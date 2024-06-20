package de.morpheusbox.system.morpheusagent.repository.dtos.device;

import com.fasterxml.jackson.annotation.JsonIgnore;
import de.morpheusbox.system.morpheusagent.repository.entities.Recording;
import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredDevice;
import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredPatient;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class RecordingDTO {

    private Recording recording;

    private String start;
    private String stop;

    private List<DataRecordDTO> datarecords;

    /**
     * Constructor
     */
    public RecordingDTO() {
        this.recording = new Recording();
        this.datarecords = new ArrayList<>();
    }

    /**
     * Constructor
     * @param recording
     */
    public RecordingDTO(Recording recording) {
        this.recording = recording;
    }

    @JsonIgnore
    public Recording getInternalRecording() {
        return recording;
    }

    public long getId() {
        return recording.getId();
    }

    public void setId(long id) {
        this.recording.setId(id);
    }

    public String getUuid() {
        return recording.getUuid();
    }

    public void setUuid(String uuid) {
        if(uuid != null)
            if(uuid.compareTo("")!=0)
                this.recording.setUuid(uuid);
    }

    /*public LocalDateTime getStartDate() {
        return recording.getStartDate();
    }

    public void setStartDate(LocalDateTime startDate) {
        this.recording.setStartDate(startDate);
    }**/

    public String getStartDate() {
        LocalDateTime date = this.recording.getStartDate();
        if(date != null){
            return date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"));
        }
        return "";
    }
    public void setStartDate(String startDate) {
        this.start = startDate;
        if(startDate.matches("^\\p{Digit}{4}-\\p{Digit}{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}\\p{Punct}\\p{Digit}{6}$")){
            LocalDateTime date = LocalDateTime.parse(startDate, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"));
            this.recording.setStartDate(date);
        }else if(startDate.matches("^\\p{Digit}+$")){
            Long dateStr = Long.parseLong(startDate);
            Instant instant = Instant.ofEpochMilli(dateStr);
            ZoneId zone = ZoneId.of("Europe/Berlin");
            LocalDateTime dt = instant.atZone(zone).toLocalDateTime();
            this.recording.setStartDate(dt);
        }
    }

    public RegisteredPatient getPatient() {
        return recording.getPatient();
    }

    public void setPatient(RegisteredPatient patient) {
        this.recording.setPatient(patient);
    }

    public RegisteredDevice getRegisteredDevice() {
        return recording.getRegisteredDevice();
    }

    public void setRegisteredDevice(RegisteredDevice registeredDevice) {
        this.recording.setRegisteredDevice(registeredDevice);
    }


    public void setDataqueue(Object dataqueue) {

    }

    public String getStopdate() {
        LocalDateTime date = this.recording.getStopdate();
        if(date != null){
            return date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"));
        }
        return "";
    }
    public void setStopdate(String stopdate) {
        this.stop = stopdate;
        if(stopdate.matches("^\\p{Digit}{4}-\\p{Digit}{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}\\p{Punct}\\p{Digit}{6}$")){
            LocalDateTime date = LocalDateTime.parse(stopdate, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"));
            this.recording.setStopdate(date);
        }else if(stopdate.matches("^\\p{Digit}+$")){
            Long dateStr = Long.parseLong(stopdate);
            Instant instant = Instant.ofEpochMilli(dateStr);
            ZoneId zone = ZoneId.of("Europe/Berlin");
            LocalDateTime dt = instant.atZone(zone).toLocalDateTime();
            this.recording.setStopdate(dt);
        }
    }

    public List<DataRecordDTO> getDatarecords() {
        return datarecords;
    }

    public void setDatarecords(List<DataRecordDTO> datarecords) {
        this.datarecords = datarecords;
    }
}
