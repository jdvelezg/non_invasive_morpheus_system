package de.morpheusbox.system.morpheusagent.repository.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

/**
 * Recording Class represent a recording event registered by the device
 */
@Entity
public class Recording implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(unique=true, nullable = false)
    private String uuid;
    private LocalDateTime startDate;
    private LocalDateTime stopdate;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "patient_id")
    private RegisteredPatient patient;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "device_id")
    private RegisteredDevice registeredDevice;

    /**
     * Constructor
     */
    public Recording() {
        RegisteredPatient patient1 = new RegisteredPatient();
        this.patient = patient1;
        RegisteredDevice device = new RegisteredDevice();
        this.registeredDevice = device;
    }

    @JsonIgnore
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUuid() {
        String uuid = this.uuid != null? this.uuid.toString(): new String();
        return uuid;
    }

    public UUID getUuidObject() {
        return UUID.fromString(this.uuid);
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid.toString();
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

    public RegisteredPatient getPatient() {
        return patient;
    }

    public void setPatient(RegisteredPatient patient) {
        this.patient = patient;
    }

    public RegisteredDevice getRegisteredDevice() {
        return registeredDevice;
    }

    public void setRegisteredDevice(RegisteredDevice registeredDevice) {
        this.registeredDevice = registeredDevice;
    }

    public LocalDateTime getStopdate() {
        return stopdate;
    }

    public void setStopdate(LocalDateTime stopdate) {
        this.stopdate = stopdate;
    }
}
