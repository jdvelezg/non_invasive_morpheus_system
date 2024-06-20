package de.morpheusbox.digesters.mqttstreamdigest.beans;

import de.morpheusbox.digesters.mqttstreamdigest.repository.DataRecordRepository;
import de.morpheusbox.digesters.mqttstreamdigest.repository.entities.DataRecord;
import de.morpheusbox.digesters.mqttstreamdigest.repository.entities.Recording;
import de.morpheusbox.digesters.mqttstreamdigest.repository.entities.PlotDataRecord;
import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.MqttCallback;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.DoubleStream;


public class MqttSaveStreamCallback implements MqttCallback{

    private static final Logger LOGGER = Logger.getLogger(MqttCallback.class.getName());

    private Recording recording;
    private DataRecordRepository dataRecordRepository;

    /**
     * Constructor
     */
    public MqttSaveStreamCallback() {
    }

    /**
     * Constructor
     * @param recording
     */
    public MqttSaveStreamCallback(Recording recording, DataRecordRepository dataRecordRepository) {
        this.recording = recording;
        this.dataRecordRepository = dataRecordRepository;
    }

    public void connectionLost(Throwable cause) {
        LOGGER.log(Level.INFO,"connectionLost: " + cause.getMessage());
    }

    /**
     *
     * @param topic accepts topic with structure: /recordingUUID/transducerUUID[/label *optional]
     * @param message
     */
    public void messageArrived(String topic, MqttMessage message) {
        String strMessage = new String(message.getPayload());
        String recordingUUID;
        String transducerUUID;
        String timestamp;
        String measurement;
        String label;

        if(topic.matches("^(\\/)[\\d\\w\\-)]+(\\/)[\\d\\w\\-]+(\\/)?[\\d\\w\\-)]*$") && topic.contains("/"+this.recording.getUuid())){
        //if(topic.matches("^(\\/)[\\S]+(\\/)[\\S]+") && topic.contains("/"+this.recording.getUuid())){
            String[] topicData = topic.split("/");
            int t = topicData.length;
            if(t >= 3){
                recordingUUID = topicData[1];
                transducerUUID = topicData[2];
                if(t==4)
                    label = topicData[3];
                else
                    label = "raw";
                boolean tmp_Rec = recordingUUID.compareTo(this.recording.getUuid())==0;
                boolean tmp_reg = strMessage.matches("^\\d+[\\.\\d]*[|]\\d+[\\.\\d]*[(,;),\\d[\\.\\d]*]*[\\n]?");
                if(recordingUUID.compareTo(this.recording.getUuid())==0
                        &&
                        (
                            strMessage.matches("^\\d+[\\.\\d]*[|]\\d+[\\.\\d]*[(,;),\\d[\\.\\d]*]*[\\n]?")
                            || strMessage.matches("^\\p{Digit}{4}[-/]{1}\\p{Digit}{2}[-/]{1}\\p{Digit}{2}[ T]{1}\\p{Digit}+[:]{1}\\p{Digit}+[:]{1}\\p{Digit}+[|]\\d+[\\.\\d]*[(,;),\\d[\\.\\d]*]*[\\n]?")
                        )
                ){
                    String[] messageData = strMessage.split("\\|");
                    int m = messageData.length;
                    if(m == 2){
                        timestamp = messageData[0];
                        measurement = messageData[1];
                        if(measurement.contains(";")){
                            measurement = measurement.replace(";",",");
                        }
                        //store information in database
                        DataRecord dataRecord = new DataRecord(this.recording,transducerUUID,timestamp,measurement);
                        Set<PlotDataRecord> records = spreadDataRecord(transducerUUID,measurement,timestamp,label);
                        dataRecord.setRecords(records);
                        try {
                            dataRecordRepository.save(dataRecord);
                        }catch(Exception e){
                            LOGGER.log(Level.SEVERE,"Error storing data: "+ e.getMessage());
                        }
                    }//if-message-lenght
                }//if-strMessage-matches
            }//if-topic-lenght
        }//if-topic-matches
        else {
            LOGGER.log(Level.INFO, "topic: " + topic + " not processed");
            LOGGER.log(Level.INFO, "Qos: " + message.getQos());
            LOGGER.log(Level.INFO, "message content: " + strMessage);
        }
    }

    public Set<PlotDataRecord> spreadDataRecord(String sensorUUID,String records,String initialTimestamp, String label){
        String[] values = records.split(",");
        DoubleStream stream = Arrays.stream(values).mapToDouble(s->Double.parseDouble(s));
        double[] measurements = stream.toArray();

        //build nanoseconds
        int samples = measurements.length;
        Double nanoSecs = Double.valueOf(1000000000/samples);
        LocalDateTime initial = this.extractDateTime(initialTimestamp);

        Set dataRecords = new HashSet<>();
        for(int i=1; i<measurements.length;i++){
            long nanosToAdd = nanoSecs.intValue()*i;
            LocalDateTime time = initial.plusNanos(nanosToAdd);
            double value = measurements[i];
            if(value != 0d){
                PlotDataRecord record = new PlotDataRecord(sensorUUID,time,measurements[i],label);
                dataRecords.add(record);
            }
        }
        return dataRecords;
    }

    /**
     * Extracts the datetime from a string Unix Epoch
     * @param timestamp
     * @return
     */
    public LocalDateTime extractDateTime(String timestamp) {
        Double time;
        if(timestamp.matches("^\\p{Digit}+\\p{Punct}{1}\\p{Digit}+$")){
            time = Double.parseDouble(timestamp);
            long seconds = time.longValue();
            Double nanosD = (time-seconds)*1000000000;
            int nanos = nanosD.intValue();
            LocalDateTime date = LocalDateTime.ofEpochSecond(seconds,nanos, ZoneOffset.of("-01:00"));
            date.plusHours(1l);
            return date;

        } else if(timestamp.matches("^\\p{Digit}+$")) {
           Long epoch = Long.parseLong(timestamp);
           time = (double) epoch/1000000000;
            long seconds = time.longValue();
            Double nanosD = (time-seconds)*1000000000;
            int nanos = nanosD.intValue();
            LocalDateTime date = LocalDateTime.ofEpochSecond(seconds,nanos, ZoneOffset.of("-01:00"));
            date.atZone(ZoneId.systemDefault());
            return date;
        } else if (timestamp.matches("^\\p{Digit}+[-/]{1}\\p{Digit}+[-/]{1}\\p{Digit}+[ T]{1}\\p{Digit}+[:]{1}\\p{Digit}+[:]{1}\\p{Digit}+$")) {
            String format = "yyyy";
            String spacer = timestamp.contains("/")?"/":"-";
            format = format+spacer+"MM"+spacer+"dd";
            String tHeader = timestamp.contains("T")?"T":" ";
            format = format + tHeader + "HH:mm:ss";

            DateTimeFormatter dateFmt = DateTimeFormatter.ofPattern(format);
            LocalDateTime date = LocalDateTime.parse(timestamp,dateFmt);
            date.atZone(ZoneId.systemDefault());
            return date;

        }
        LOGGER.log(Level.WARNING,"Not parseable timestamp ("+timestamp+") taking current time instead");
        return LocalDateTime.now();

    }

    public void deliveryComplete(IMqttDeliveryToken token) {
        LOGGER.log(Level.INFO,"deliveryComplete---------" + token.isComplete());
    }
}
