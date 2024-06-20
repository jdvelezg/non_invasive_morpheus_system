package de.morpheusbox.digesters.jdotedf.repository.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class DataRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(unique=true)
    private String uuid;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "recording_id")
    private Recording recording;
    private String transducer;
    private String physicalDimension;
    private double physicalMin;
    private double physicalMax;
    private double DigitalMin;
    private double DigitalMax;
    private LocalDateTime startTime;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "measurements", joinColumns = @JoinColumn(name = "datarecord_id"))
    @AttributeOverrides({
            @AttributeOverride(name = "sensor", column = @Column(name = "sensor_name")),
            @AttributeOverride(name = "time", column = @Column(name = "time_rec")),
            @AttributeOverride(name = "signal", column = @Column(name = "signal_rec"))
    })
    private Set<PlotDataRecord> measurement;
    private double numberOfsamples;
    private double timeDuration;
    private String label;

    /**
     * Constructor
     */
    public DataRecord() {
        this.measurement = new HashSet<>();
    }

    public DataRecord(Recording recording) {
        this.recording = recording;
    }

    public DataRecord(Recording recording, String transducer, String physicalDimension, double physicalMin, double physicalMax, double digitalMin, double digitalMax, LocalDateTime startTime, Set<PlotDataRecord> measurement, double numberOfsamples, double timeDuration, String label) {
        this.recording = recording;
        this.transducer = transducer;
        this.physicalDimension = physicalDimension;
        this.physicalMin = physicalMin;
        this.physicalMax = physicalMax;
        this.DigitalMin = digitalMin;
        this.DigitalMax = digitalMax;
        this.startTime = startTime;
        this.measurement = measurement;
        this.numberOfsamples = numberOfsamples;
        this.timeDuration = timeDuration;
        this.label = label;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public Recording getRecordingLabel() {
        return recording;
    }

    public void setRecordingLabel(Recording recording) {
        this.recording = recording;
    }

    public String getTransducer() {
        return transducer;
    }

    public void setTransducer(String transducer) {
        this.transducer = transducer;
    }

    public String getPhysicalDimension() {
        return physicalDimension;
    }

    public void setPhysicalDimension(String physicalDimension) {
        this.physicalDimension = physicalDimension;
    }

    public double getPhysicalMin() {
        return physicalMin;
    }

    public void setPhysicalMin(double physicalMin) {
        this.physicalMin = physicalMin;
    }

    public double getPhysicalMax() {
        return physicalMax;
    }

    public void setPhysicalMax(double physicalMax) {
        this.physicalMax = physicalMax;
    }

    public double getDigitalMin() {
        return DigitalMin;
    }

    public void setDigitalMin(double digitalMin) {
        DigitalMin = digitalMin;
    }

    public double getDigitalMax() {
        return DigitalMax;
    }

    public void setDigitalMax(double digitalMax) {
        DigitalMax = digitalMax;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public Set<PlotDataRecord> getMeasurement() {
        return measurement;
    }

    public void setMeasurement(Set<PlotDataRecord> measurement) {
        this.measurement = measurement;
    }

    public double getNumberOfsamples() {
        return numberOfsamples;
    }

    public void setNumberOfsamples(double numberOfsamples) {
        this.numberOfsamples = numberOfsamples;
    }

    public double getTimeDuration() {
        return timeDuration;
    }

    public void setTimeDuration(double timeDuration) {
        this.timeDuration = timeDuration;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    /**
     * Clones the entire object excluding the identifiers
     * @return a copy of the object
     */
    @JsonIgnore
    public DataRecord clone(){
        return new DataRecord(
                this.recording,
                this.transducer,
                this.physicalDimension,
                this.physicalMin,
                this.physicalMax,
                this.DigitalMin,
                this.DigitalMax,
                this.startTime,
                this.measurement,
                this.numberOfsamples,
                this.timeDuration,
                this.label);
    }
}
