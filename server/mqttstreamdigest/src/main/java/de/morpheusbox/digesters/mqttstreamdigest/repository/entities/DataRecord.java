package de.morpheusbox.digesters.mqttstreamdigest.repository.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = DataRecord.TABLE_NAME)
public class DataRecord {
    public static final String TABLE_NAME= "TMP_MQTTSTREAM_DataRecord";
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "recording_id")
    private Recording recording;
    @Column(name = "ddate", nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDateTime creationTime;
    private String transducer;
    private String timestamp;
    @Lob
    @Column(columnDefinition="TEXT")
    private String measurement;
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "TMP_plotableRecords", joinColumns = @JoinColumn(name = "tmp_datarecord_id"))
    @AttributeOverrides({
            @AttributeOverride(name = "sensor", column = @Column(name = "sensor_UUID")),
            @AttributeOverride(name = "time", column = @Column(name = "time_rec")),
            @AttributeOverride(name = "signal", column = @Column(name = "signal_rec"))
    })
    private Set<PlotDataRecord> records;
    private boolean sync;

    /**
     * Constructor
     */
    public DataRecord() {
        this.recording = new Recording();
        this.records = new HashSet<>();
    }


    /**
     * Constructor
     * @param transducer name of sensor generting the measurement
     * @param timestamp timestamp of the measurement
     * @param measurement vector of measurements (as coma separated string numeric values)
     */
    public DataRecord(Recording recording, String transducer, String timestamp, String measurement) {
        this.recording = recording;
        this.transducer = transducer;
        this.timestamp = timestamp;
        this.measurement = measurement;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTransducer() {
        return transducer;
    }

    public void setTransducer(String transducer) {
        this.transducer = transducer;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getMeasurement() {
        return measurement;
    }

    public void setMeasurement(String measurement) {
        this.measurement = measurement;
    }

    public Set<PlotDataRecord> getRecords() {
        return records;
    }

    public void setRecords(Set<PlotDataRecord> records) {
        this.records = records;
    }

    public Recording getDevice() {
        return recording;
    }

    public void setDevice(Recording recording) {
        this.recording = recording;
    }

    public boolean isSync() {
        return sync;
    }

    public void setSync(boolean sync) {
        this.sync = sync;
    }
}
