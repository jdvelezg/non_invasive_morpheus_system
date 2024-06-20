package de.morpheusbox.digesters.jdotedf.services;

import de.morpheusbox.digesters.jdotedf.edflib.EDFException;
import de.morpheusbox.digesters.jdotedf.edflib.EDFreader;
import de.morpheusbox.digesters.jdotedf.repository.DataRecordRepository;
import de.morpheusbox.digesters.jdotedf.repository.RecordingRepository;
import de.morpheusbox.digesters.jdotedf.repository.entities.DataRecord;
import de.morpheusbox.digesters.jdotedf.repository.entities.PlotDataRecord;
import de.morpheusbox.digesters.jdotedf.repository.entities.Recording;
import org.antlr.v4.runtime.misc.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.Reader;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class FileDiggestService {

    private static final Logger LOGGER = Logger.getLogger(FileDiggestService.class.getName());
    @Autowired
    private DataRecordRepository dataRecordRepository;
    @Autowired
    private RecordingRepository recordingRepository;


    /**
     * Constructor
     */
    public FileDiggestService() {
    }

    /**
     * Process signals labeled as "ECG" or "RIP"
     * @param recordingUUID
     * @param pathToFile
     */
    @Async
    public void edfDataExtraction(String recordingUUID, String pathToFile){
        try{
            //Loads the file
            EDFreader hdl = new EDFreader(pathToFile);

            //Creates the recording record
            Recording recording;
            Optional<Recording> option = recordingRepository.findByUuid(recordingUUID);
            if(!option.isEmpty()){
                recording = option.get();
            }else{
                recording = new Recording(recordingUUID);
            }

            //Extract patient name
            String patient = hdl.getPatientName();
            recording.setPatient(patient);
            //extract start date
            LocalDateTime startTime = LocalDateTime.of(
                    hdl.getStartDateYear(),
                    hdl.getStartDateMonth(),
                    hdl.getStartDateDay(),
                    hdl.getStartTimeHour(), hdl.getStartTimeMinute(), hdl.getStartTimeSecond());
            recording.setStartDate(startTime);
            //extract stop date
            Long durationInSeconds = hdl.getFileDuration()/hdl.EDFLIB_TIME_DIMENSION;
            recording.setStopdate(startTime.plusSeconds(durationInSeconds));
            //Extracts device
            String device = hdl.getEquipment();
            recording.setDevice(device);
            //Extracts datarecord duration
            long dtDuration = hdl.getLongDataRecordDuration()/hdl.EDFLIB_TIME_DIMENSION; //in seconds
            recording.setDatarecordDurationInSeconds(dtDuration);

            //saves the recording reference
            recording = recordingRepository.save(recording);

            //Extracts Only 3 signals: ECG, RIP Tho/Abd
            //identify the signals to extract
            int edfsignals = hdl.getNumSignals();
            String label = "";

            for(int i=0; i<edfsignals; i++){
                label = hdl.getSignalLabel(i);
                int num_samples = hdl.getSampelsPerDataRecord(i);
                int samplerate = (int)(num_samples / dtDuration);

                if(label.contains("ECG") || label.contains("RIP")){
                    LOGGER.log(Level.INFO, label);
                    this.extractRecordingSignalData(recording,hdl,i,samplerate,startTime);

                }
            }

            hdl.close();
        }
        catch (IOException exc){
            LOGGER.warning("FileNotFoundException: " + exc.getMessage());
        }
        catch(EDFException e)
        {
            LOGGER.log(Level.SEVERE,"EDFException, An error occured: "+e.getMessage());
        }
    }

    /**
     * Extracts the signals samples from a recording
     * @param recording associated recording
     * @param edfReader reader of EDF file
     * @param recordIndx recording index
     * @param samplerate sample rate of the recording
     * @throws EDFException
     */
    private void extractRecordingSignalData(Recording recording, EDFreader edfReader,int recordIndx,int samplerate, LocalDateTime startTime) throws EDFException, IOException{

        DataRecord dataRecord = new DataRecord(recording);

        //Extracts recording label
        String label = edfReader.getSignalLabel(recordIndx);
        dataRecord.setLabel(label);
        //Extracts physical dimension
        String physDim = edfReader.getPhysicalDimension(recordIndx);
        dataRecord.setPhysicalDimension(physDim);
        //Extracts physicalMin
        Double physMin = edfReader.getPhysicalMinimum(recordIndx);
        dataRecord.setPhysicalMin(physMin);
        //Extracts physicalMax
        Double physMax = edfReader.getPhysicalMaximum(recordIndx);
        dataRecord.setPhysicalMax(physMax);
        //Extracts DigitalMax
        Integer digitalMax = edfReader.getDigitalMaximum(recordIndx);
        dataRecord.setDigitalMax(Double.parseDouble(digitalMax.toString()));
        //Extracts DigitalMin
        Integer digitalMin = edfReader.getDigitalMinimum(recordIndx);
        dataRecord.setDigitalMin(Double.parseDouble(digitalMin.toString()));
        //Set startTime
        dataRecord.setStartTime(startTime);
        //Extracts number of samples
        Integer numSamples = edfReader.getSampelsPerDataRecord(recordIndx);
        dataRecord.setNumberOfsamples(Double.parseDouble(numSamples.toString()));
        //Extracts timeDuration
        Long duration = edfReader.getLongDataRecordDuration();
        dataRecord.setTimeDuration(Double.parseDouble(duration.toString()));

        double[] buffer = new double[samplerate];
        int samplesRead = -1;
        //1 Second = 1,000,000,000 Nanoseconds
        double nanosPerSample = 1000000000/samplerate;
        LocalDateTime recordStartTime = startTime;
        while(samplesRead != 0){
            samplesRead = edfReader.readPhysicalSamples(recordIndx,buffer);
            Set<PlotDataRecord> dataRecords = this.createPlotDatarecord(
                    edfReader.getTransducer(recordIndx),
                    label,
                    samplesRead,
                    recordStartTime,
                    nanosPerSample,
                    buffer);
            DataRecord newDataRecord = dataRecord.clone();
            newDataRecord.setMeasurement(dataRecords);
            //save in database
            dataRecordRepository.save(newDataRecord);
            double addnanos = nanosPerSample*samplesRead;
            recordStartTime = recordStartTime.plusNanos((long)addnanos);
        }
    }

    private Set<PlotDataRecord> createPlotDatarecord(String transducer, String label, int numberOfSamples, LocalDateTime startTime, double secondsPerSample, double[] signals){
        Set<PlotDataRecord> dataRecordSet = new HashSet<PlotDataRecord>(numberOfSamples);

        for(int i=0; i<numberOfSamples; i++){
            double timer = secondsPerSample*i;
            LocalDateTime time = startTime.plusNanos((long)timer);

            PlotDataRecord plotDataRecord = new PlotDataRecord();
            plotDataRecord.setTime(time);
            plotDataRecord.setTransducer(transducer);
            plotDataRecord.setLabel(label);
            plotDataRecord.setSignal(signals[i]);

            dataRecordSet.add(plotDataRecord);
        }

        return dataRecordSet;
    }






}
