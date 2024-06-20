package de.morpheusbox.system.morpheusagent.repository.entities;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * This entity represent the interaction between Devices and Patients.
 * The attribute IsActive indicates which user is using the device, and
 * the datetime attribute indicates the last update of IsActive
 */
@Entity
@Table(indexes = {
        @Index(name = "uniqueIndex", columnList = "device_id,patient_id", unique = true),
        @Index(name = "uniqueActiveIndex", columnList = "device_id,patient_id,is_active", unique = true),
})
public class PatientDevice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST,CascadeType.MERGE})
    @JoinColumn(name = "device_id")
    private RegisteredDevice device;
    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST,CascadeType.MERGE})
    @JoinColumn(name = "patient_id")
    private RegisteredPatient patient;
    @Column(name = "is_active")
    private boolean isActive;
    private LocalDateTime datetime;
    private Long xBedDimension;
    private Long yBedDimension;
    private String bedDimensionUnits;

    /**
     * Constructor
     */
    public PatientDevice() {
        this.patient = new RegisteredPatient();
        this.device = new RegisteredDevice();
        this.datetime = LocalDateTime.now();
    }

    /**
     * Constructor.
     * REgister a device for a Patient as Active
     * @param device Device registered
     * @param patient Patient registered
     */
    public PatientDevice(RegisteredDevice device, RegisteredPatient patient) {
        this.device = device;
        this.patient = patient;
        this.isActive = true;
        this.datetime = LocalDateTime.now();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public RegisteredDevice getDevice() {
        return device;
    }

    public void setDevice(RegisteredDevice device) {
        this.device = device;
    }

    public RegisteredPatient getPatient() {
        return patient;
    }

    public void setPatient(RegisteredPatient patient) {
        this.patient = patient;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public LocalDateTime getDatetime() {
        return datetime;
    }

    public void setDatetime(LocalDateTime datetime) {
        this.datetime = datetime;
    }

    public Long getxBedDimension() {
        return xBedDimension;
    }

    public void setxBedDimension(Long xBedDimension) {
        this.xBedDimension = xBedDimension;
    }

    public Long getyBedDimension() {
        return yBedDimension;
    }

    public void setyBedDimension(Long yBedDimension) {
        this.yBedDimension = yBedDimension;
    }

    public String getBedDimensionUnits() {
        return bedDimensionUnits;
    }

    public void setBedDimensionUnits(String bedDimensionUnits) {
        this.bedDimensionUnits = bedDimensionUnits;
    }
}
