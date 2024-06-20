package de.morpheusbox.system.morpheusagent.repository.dtos.broker;

import de.morpheusbox.system.morpheusagent.repository.entities.DataRecord;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DataRecordExch {

    private DataRecord dataRecord;

    /**
     * Constructor
     */
    public DataRecordExch() {
    }

    /**
     * Constructor
     * @param dataRecord
     */
    public DataRecordExch(DataRecord dataRecord) {
        this.dataRecord = dataRecord;
    }

    public String getUuid() {
        return this.dataRecord.getUuid();
    }

    public String getRecording_uuid(String uuid){
        return this.dataRecord.getRecording().getUuid();
    }

    public String getSensor() {
        return dataRecord.getSensor().getName();
    }

    public String getTime(){
        LocalDateTime date = this.dataRecord.getTimestamp();
        if(date != null){
            return date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"));
        }
        return "";
    }

    public String getLabel() {
        return this.dataRecord.getLabel();
    }
}
