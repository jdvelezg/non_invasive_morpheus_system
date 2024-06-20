package de.morpheusbox.system.morpheusagent.services;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.morpheusbox.system.morpheusagent.repository.DataRecordRepository;
import de.morpheusbox.system.morpheusagent.repository.RecordingRepository;
import de.morpheusbox.system.morpheusagent.repository.dtos.broker.DataRecordExch;
import de.morpheusbox.system.morpheusagent.repository.dtos.broker.RecordingExch;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.DataRecordDTO;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.DeviceDTO;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.PatientDTO;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.RecordingDTO;
import de.morpheusbox.system.morpheusagent.repository.entities.*;
import de.morpheusbox.system.morpheusagent.services.exceptions.BadCredentialsException;
import de.morpheusbox.system.morpheusagent.services.exceptions.InconsistentDataReferenceException;
import de.morpheusbox.system.morpheusagent.utils.JWTUtil;
import jakarta.annotation.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.*;
import java.time.LocalDateTime;
import java.util.*;
import java.util.logging.Logger;

@Service
public class RecordingServiceController {

    private static final Logger LOGGER = Logger.getLogger(RecordingServiceController.class.getName());
    @Autowired
    private DevicesServiceController devicesServiceController;
    @Autowired
    private PatientServiceController patientServiceController;
    @Autowired
    private RecordingRepository recordingRepository;
    @Autowired
    private DataRecordRepository dataRecordRepository;

    /**
     * Constructor
     */
    public RecordingServiceController() {
    }

    @Nullable
    public DeviceDTO getAuthorizedDevice() {
        return devicesServiceController.getAuthorizedDevice();
    }

    /**
     * Set the device responsable of executing the procedures
     * @param authorizedDevice
     */
    public void setAuthorizedDevice(DeviceDTO authorizedDevice) {
        devicesServiceController.setAuthorizedDevice(authorizedDevice);
    }

    /**
     * Set the authorized device using the authentication token
     * @param token
     */
    public void setAuthorizedDeviceFromToken(String token){
        if(token !=null && token.compareTo("")!=0 && token.compareTo("null")!=0 )
            devicesServiceController.setAuthorizedDeviceFromToken(token);
    }

    /**
     * Verify if the device responsable of executing the procedures
     * is valid and authorized.
     * This is for security features. Some methods will throw an exception if no authorized device is recognized.
     * @return
     */
    private boolean verifyAuthorizedDevice(){
        return devicesServiceController.verifyAuthorizedDevice();
    }

    /**
     *
     * @return List with all recordings
     */
    public List<Recording> listAllRecordings(){
        List<Recording> list = recordingRepository.findAll(Sort.by("startDate","uuid"));
        return list;
    }
    /**
     *
     * @param deviceUUID
     * @return List with all recordings from a device
     */
    public List<Recording> listAllRecordingsByDevice(String deviceUUID){
        List<Recording> list = recordingRepository.findAllByRegisteredDevice(deviceUUID);
        return list;
    }

    /**
     * Provide information of a stored recording
     * @param uuid
     * @return the recording with given uuid
     * @throws InconsistentDataReferenceException when data is not found
     */
    public Recording getRecording(String uuid) throws InconsistentDataReferenceException {
        Optional<Recording> optional = recordingRepository.findByUuid(uuid);
        if(!optional.isPresent()){
            throw new InconsistentDataReferenceException();
        }
        Recording recording = optional.get();

        return recording;
    }

    /**
     * retrieve the information of a recording and its datarecords
     * @param uuid
     * @return recording with datarecords
     */
    public RecordingDTO getRecordingData(String uuid){
        Recording recording = this.getRecording(uuid);
        RecordingDTO dto = new RecordingDTO(recording);
        List<DataRecordDTO> records = dataRecordRepository.getAllByRecordingUUID(uuid);
        dto.setDatarecords(records);

        return dto;
    }

    /**
     * Adds or updates a recording
     * @param recordingDTO
     * @return the saved recording
     */
    public RecordingDTO addRecording(RecordingDTO recordingDTO){
        if(!verifyAuthorizedDevice()){
            throw new BadCredentialsException();
        }
        Recording recording = recordingDTO.getInternalRecording();
        recording = addRecording(recording);
        recordingDTO = new RecordingDTO(recording);

        return recordingDTO;
    }

    /**
     * Adds or update a recording
     * @param recording
     * @return the saved recording
     */
    private Recording addRecording(Recording recording){
        if(!verifyAuthorizedDevice()){
            throw new BadCredentialsException();
        }
        //verify uuid
        Optional<Recording> optional = recordingRepository.findByUuid(recording.getUuid());
        //update if present
        if(optional.isPresent()){
            long id = optional.get().getId();
            recording.setId(id);
        }
        String patientUUID = recording.getPatient().getUuid();
        PatientDTO patientDTO = patientServiceController.getPatientInfo(patientUUID);
        if(patientDTO == null)
            throw new InconsistentDataReferenceException();
        else{
            RegisteredPatient patient = patientDTO.getPatient();
            recording.setPatient(patient);
            RegisteredDevice device = this.getAuthorizedDevice().getDevice();
            recording.setRegisteredDevice(device);
        }
        recording = recordingRepository.save(recording);

        return recording;
    }

    /**
     * Deletes a recording
     * @param uuid identifier of recording to erase
     */
    public void deleteRecording(String uuid){
        if(!verifyAuthorizedDevice()){
            throw new BadCredentialsException();
        }
        Optional<Recording> optional = recordingRepository.findByUuid(uuid);
        if(optional.isPresent()){
            Recording recording = optional.get();
            long recordingId = recording.getId();
            dataRecordRepository.deleteDataRecordByRecordingId(recordingId);
            recordingRepository.delete(recording);
        }
    }

    /**
     * Adds a datarecord from a recording
     * @param recording
     * @param dataRecordDTO
     * @return
     */
    public DataRecord addRecordingDataRecord(Recording recording, DataRecordDTO dataRecordDTO){
        if(!verifyAuthorizedDevice()){
            throw new BadCredentialsException();
        }
        DataRecord dataRecord = dataRecordDTO.getInternalDataRecord();
        dataRecord.setRecording(recording);
        dataRecord = dataRecordRepository.save(dataRecord);

        return dataRecord;
    }

    /**
     * Adds a datarecord.
     * @param dataRecordDTO data record
     * @return saved data record
     * @throws InconsistentDataReferenceException if the internal recording ID is not present
     */
    public DataRecord addDataRecord(DataRecordDTO dataRecordDTO) throws InconsistentDataReferenceException{
        if(!verifyAuthorizedDevice()){
            throw new BadCredentialsException();
        }
        //check if already exists
        Optional<DataRecord> optRecord = dataRecordRepository.findByUUID(dataRecordDTO.getUuid());
        if(optRecord.isPresent()){
            return dataRecordDTO.getInternalDataRecord();
        }
        //check Recording
        String recording_uuid = dataRecordDTO.getRecordingUuid();
        Recording recording = this.getRecording(recording_uuid);
        DataRecord dataRecord = dataRecordDTO.getInternalDataRecord();
        dataRecord.setRecording(recording);
        //Check sensor
        String sensor_uuid = dataRecord.getSensor().getUuid();
        Sensor sensor = devicesServiceController.getSensorInformation(sensor_uuid);
        if(sensor == null)
            throw new InconsistentDataReferenceException();
        dataRecord.setSensor(sensor);
        //Spread measurements
        Set<PlotDataRecord> records = this.spreadDataRecord(dataRecordDTO);
        dataRecord.setMeasurement(records);
        //save data record
        dataRecord = dataRecordRepository.save(dataRecord);
        //plotDataRecordRepository.saveAll(records);

        return dataRecord;
    }

    public Set<PlotDataRecord> spreadDataRecord(DataRecordDTO dataRecord){
        String label = dataRecord.getLabel();
        String sensor = dataRecord.getSensor().getName();

        double[] measurements = dataRecord.getMeasurement();
        double[] timestamps = dataRecord.getTimeMap();

        Set records = new HashSet<>();
        for(int i=0; i<measurements.length;i++){
            LocalDateTime time;
            if(timestamps == null){
                time = dataRecord.getTimestamp();
            }else{
                time = JWTUtil.getLocalDateFromUnixTimeAsDouble(timestamps[i]);
            }
            PlotDataRecord record = new PlotDataRecord(sensor,time,measurements[i],label);
            records.add(record);
        }
        return records;
    }

    @Async
    public void processLargeDataFile(BufferedReader reader){
        try{
            String line = reader.readLine();
            if(line.startsWith("[")){
                line = line.substring(1);
            }

            while (line != null) {
                ObjectMapper mapper = new ObjectMapper();
                JsonFactory factory = mapper.getFactory();
                JsonParser parser = factory.createParser(line);
                //JsonNode actualObj = mapper.readTree(parser);
                DataRecordDTO dto = mapper.readValue(parser,DataRecordDTO.class);
                this.addDataRecord(dto);
                line = reader.readLine();
            }
        }catch (IOException exc){
            LOGGER.warning("FileNotFoundException: " + exc.getMessage());
        }
    }

    /**
     *
     * @param recording_uuid
     * @return List of plotable datarecords from recording
     */
    public List<PlotDataRecord> listPlotableDatarecord(String recording_uuid){
        List<PlotDataRecord> records = new ArrayList();
        Optional<Recording> optional = recordingRepository.findByUuid(recording_uuid);
        if(optional.isPresent()){
            long recordingId = optional.get().getId();
            records = dataRecordRepository.getAllPlotableByRecordingID(recordingId);
        }

        return records;
    }

    public byte[] zipJsonRecordingDatarecord(String recording_uuid) throws IOException{
        /*if(!verifyAuthorizedDevice()){
            throw new BadCredentialsException();
        }/**/
        List<DataRecordExch> records = new ArrayList();
        Optional<Recording> optional = recordingRepository.findByUuid(recording_uuid);
        RecordingExch recordingExch = new RecordingExch();
        if(optional.isPresent()){
            Recording recording = optional.get();
            recordingExch = new RecordingExch(recording);
            records = dataRecordRepository.getAllExchangeByRecordingID(recording.getId());
            recordingExch.setDatarecords(records);
        }
        String sourceFile = "json_"+recording_uuid+".json";
        ObjectMapper objectMapper = new ObjectMapper();
        /*objectMapper.configure(DeserializationFeature.READ_DATE_TIMESTAMPS_AS_NANOSECONDS,true);
        objectMapper.configure(DeserializationFeature.FAIL_ON_INVALID_SUBTYPE,false);
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES,false);/**/
        objectMapper.writeValue(new File(sourceFile),recordingExch);
        File fileToZip = new File(sourceFile);
        byte[] zipFile = JWTUtil.zipFile(fileToZip);

        return zipFile;
    }

    /**
     *
     * @param recording_uuid
     * @return
     * @throws IOException
     */
    public byte[] zipRawPlotableDatarecord(String recording_uuid) throws IOException{
        String sourceFile = "raw_"+recording_uuid+".csv";
        BufferedWriter writer = new BufferedWriter(new FileWriter(sourceFile));
        List<PlotDataRecord> records = this.listPlotableDatarecord(recording_uuid);
        //write header
        String line = PlotDataRecord.csvHeaderLine();
        writer.write(line);
        //write data
        for(PlotDataRecord d: records){
            line = d.toCSVString();
            writer.write(line);
        }
        writer.close();
        File fileToZip = new File(sourceFile);
        byte[] zipFile = JWTUtil.zipFile(fileToZip);

        return zipFile;
    }

}
