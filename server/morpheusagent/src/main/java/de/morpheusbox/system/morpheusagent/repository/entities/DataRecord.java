package de.morpheusbox.system.morpheusagent.repository.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
public class DataRecord implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(unique=true, nullable = false)
    private String uuid;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "recording_id")
    private Recording recording;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "sensor_id")
    private Sensor sensor;
    private LocalDateTime timestamp;
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

    public DataRecord() {
        Recording recording = new Recording();
        this.recording = recording;
        Sensor sensor = new Sensor();
        this.sensor = sensor;
        this.measurement = new HashSet<>();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public UUID getUuidObject() {
        return UUID.fromString(uuid);
    }

    public String getUuid() {
        String uuid = this.uuid != null? this.uuid.toString(): new String();
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid.toString();
    }

    public Sensor getSensor() {
        return sensor;
    }

    public Recording getRecording() {
        return recording;
    }

    public void setRecording(Recording recording) {
        this.recording = recording;
    }

    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
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
}
