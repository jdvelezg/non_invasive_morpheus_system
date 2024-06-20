package de.morpheusbox.system.morpheusagent.repository.dtos.broker;

import de.morpheusbox.system.morpheusagent.repository.dtos.device.PatientDTO;
import de.morpheusbox.system.morpheusagent.repository.entities.Recording;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class RecordingExch {

    private Recording recording;
    private List<DataRecordExch> datarecords;

    public RecordingExch() {
    }

    public RecordingExch(Recording recording) {
        this.recording = recording;
    }

    public String getUuid() {
        return recording.getUuid();
    }

    public String getDevice_uuid(String uuid){
        return recording.getRegisteredDevice().getUuid();
    }

    public String getStartDate() {
        LocalDateTime date = this.recording.getStartDate();
        if(date != null){
            return date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"));
        }
        return "";
    }

    public PatientDTO getPatient() {
        return new PatientDTO(recording.getPatient());
    }

    public String getStopdate() {
        LocalDateTime date = this.recording.getStopdate();
        if(date != null){
            return date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"));
        }
        return "";
    }

    public List<DataRecordExch> getDatarecords() {
        return datarecords;
    }

    public void setDatarecords(List<DataRecordExch> datarecords) {
        this.datarecords = datarecords;
    }
}
