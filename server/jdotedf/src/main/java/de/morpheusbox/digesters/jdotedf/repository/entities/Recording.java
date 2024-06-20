package de.morpheusbox.digesters.jdotedf.repository.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Recording {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(unique=true, nullable = false)
    private String uuid;
    private LocalDateTime startDate;
    private LocalDateTime stopdate;
    private String patient;
    private String device;

    private long datarecordDurationInSeconds;

    /**
     * Constructor
     *
     */
    public Recording() {
    }

    /**
     * Constructor
     * @param uuid recording universal identifier
     */
    public Recording(String uuid) {
        this.uuid = uuid;
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

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getStopdate() {
        return stopdate;
    }

    public void setStopdate(LocalDateTime stopdate) {
        this.stopdate = stopdate;
    }

    public String getPatient() {
        return patient;
    }

    public void setPatient(String patient) {
        this.patient = patient;
    }

    public String getDevice() {
        return device;
    }

    public void setDevice(String device) {
        this.device = device;
    }

    public long getDatarecordDurationInSeconds() {
        return datarecordDurationInSeconds;
    }

    public void setDatarecordDurationInSeconds(long datarecordDurationInSeconds) {
        this.datarecordDurationInSeconds = datarecordDurationInSeconds;
    }
}
