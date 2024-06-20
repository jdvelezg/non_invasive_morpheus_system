package de.morpheusbox.system.morpheusagent.repository.dtos.device;

import com.fasterxml.jackson.annotation.JsonIgnore;
import de.morpheusbox.system.morpheusagent.repository.entities.DataRecord;
import de.morpheusbox.system.morpheusagent.repository.entities.Sensor;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Arrays;

public class DataRecordDTO {

    private DataRecord dataRecord;
    private double[] measurement;
    private double[] timeMap;

    /**
     * Constructor
     */
    public DataRecordDTO() {
        this.dataRecord = new DataRecord();
    }

    /**
     * Constructor
     * @param dataRecord
     */
    public DataRecordDTO(DataRecord dataRecord) {
        this.dataRecord = dataRecord;
    }

    @JsonIgnore
    public DataRecord getInternalDataRecord() {
        return dataRecord;
    }

    @JsonIgnore
    public long getId() {
        return dataRecord.getId();
    }

    public void setId(long id) {
        this.dataRecord.setId(id);
    }

    public String getUuid() {
        return this.dataRecord.getUuid();
    }

    public void setUuid(String uuid) {
        this.dataRecord.setUuid(uuid);
    }

    public Sensor getSensor() {
        return dataRecord.getSensor();
    }

    public String getRecordingUuid(){
        return dataRecord.getRecording().getUuid();
    }

    public String getRecording_uuid(){
        return this.getRecordingUuid();
    }

    public void setRecording_uuid(String uuid){
        this.dataRecord.getRecording().setUuid(uuid);
    }

    public void setSensor(Sensor sensor) {
        this.dataRecord.setSensor(sensor);
    }

    public void setSensor_uuid(String sensor_uuid){
        this.dataRecord.getSensor().setUuid(sensor_uuid);
    }

    @JsonIgnore
    public LocalDateTime getTimestamp() {
        return dataRecord.getTimestamp();
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.dataRecord.setTimestamp(timestamp);
    }

    @JsonIgnore
    public LocalDateTime getTimeLocalDateTime() {
        return dataRecord.getTimestamp();
    }

    public String getTime(){
        return dataRecord.getTimestamp().toString();
    }

    public void setTime(String timestamp) {
        if(timestamp.matches("^\\p{Digit}+\\p{Punct}{1}\\p{Digit}+$")){
            Double time = Double.parseDouble(timestamp);
            long seconds = time.longValue();
            Double nanosD = (time-seconds)*1000000000;
            int nanos = nanosD.intValue();
            //Instant instant = Instant.ofEpochMilli(timeLong);
            LocalDateTime date = LocalDateTime.ofEpochSecond(seconds,nanos, ZoneOffset.UTC);
            this.dataRecord.setTimestamp(date);
        }
    }

    public double[] getMeasurement() {
        return this.measurement;
    }

    public void setMeasurement(Object data) {
        if(data instanceof String){
            String measurement = (String) data;
            if(measurement.contains("[") || measurement.contains("]")){
                String[] list = measurement.replace("[","").replace("]","").split(",");
                double[] array = Arrays.stream(list).mapToDouble( (s) -> Double.parseDouble(s) ).toArray();
                this.measurement=array;
                //this.dataRecord.setMeasurement(array);
            }/**/
        }
    }

    public double[] getTimeMap() {
        return this.timeMap;
    }

    public void setTimeMap(Object datatime) {
        if(datatime instanceof String){
            String timeMap = (String) datatime;
            if(timeMap.contains("[") || timeMap.contains("]")){
                String[] list = timeMap.replace("[","").replace("]","").split(",");
                double[] array = Arrays.stream(list).mapToDouble( (s) -> Double.parseDouble(s) ).toArray();
                this.timeMap = array;
                //this.dataRecord.setTimeMap(array);
            }
        }
    }

    public void setSignal(String signal) {

        Double value = Double.valueOf(signal);
        double[] array = {value};
        if(this.measurement == null){
            this.setMeasurement(Arrays.toString(array));
            this.setNumberOfsamples(1);/**/
        }
    }

    public double getNumberOfsamples() {
        return dataRecord.getNumberOfsamples();
    }

    public void setNumberOfsamples(double numberOfsamples) {
        this.dataRecord.setNumberOfsamples(numberOfsamples);
    }

    public double getSamples() {
        return dataRecord.getNumberOfsamples();
    }

    public void setSamples(double numberOfsamples) {
        this.dataRecord.setNumberOfsamples(numberOfsamples);
    }

    public double getTimeDuration() {
        return dataRecord.getTimeDuration();
    }

    public void setTimeDuration(double timeDuration) {
        this.dataRecord.setTimeDuration(timeDuration);
    }

    public double getDuration() {
        return dataRecord.getTimeDuration();
    }

    public void setDuration(double timeDuration) {
        this.dataRecord.setTimeDuration(timeDuration);
    }

    public String getLabel() {
        return this.dataRecord.getLabel();
    }

    public void setLabel(String label) {
        this.dataRecord.setLabel(label);
    }
}
