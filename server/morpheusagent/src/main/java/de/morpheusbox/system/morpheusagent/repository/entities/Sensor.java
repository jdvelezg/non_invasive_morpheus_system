package de.morpheusbox.system.morpheusagent.repository.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.UUID;

@Entity
public class Sensor implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(unique=true)
    private String uuid;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "device_id")
    private RegisteredDevice registeredDevice;
    private String transducerType;
    private String physicalDimension;
    private double physicalMin;
    private double physicalMax;
    private double DigitalMin;
    private double DigitalMax;
    private String name;
    /**
     * Using top left corner of the Bed as zero point,
     * xLocation determines where the top-left corner of the device is located to the right along the width of the bed
     */
    private Long xLocation;
    /**
     * Using top left corner of the Bed as zero point,
     * yLocation determines where the top-left corner of the device is located below along the large of the bed.
     */
    private Long yLocation;
    /**
     * Starting in the (xLocation,yLocation) point yDimension
     * determines how many units the sensor occupies below along the large of the bed.
     */
    private Long yDimension;
    /**
     * Starting in the (xLocation,yLocation) point xDimension
     * determines how many units the sensor occupies to the right along the width of the bed
     */
    private Long xDimension;

    private boolean active;
    private String accessProtocol;
    private String portAddress;


    /**
     * Constructor
     */
    public Sensor() {
        this.registeredDevice = new RegisteredDevice();
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

    @JsonIgnore
    public UUID getUuidObject() {
        return UUID.fromString(this.uuid);
    }

    public void setUuid(String uuid) {
            this.uuid = uuid;
    }
    public void setUuid(UUID uuid) {
        this.uuid = uuid.toString();
    }

    public RegisteredDevice getRegisteredDevice() {
        return registeredDevice;
    }

    public void setRegisteredDevice(RegisteredDevice registeredDevice) {
        this.registeredDevice = registeredDevice;
    }

    public String getTransducerType() {
        return transducerType;
    }

    public void setTransducerType(String transducerType) {
        this.transducerType = transducerType;
    }

    public String getPhysicalDimension() {
        return physicalDimension;
    }

    public void setPhysicalDimension(String pysicalDimension) {
        this.physicalDimension = pysicalDimension;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getxLocation() {
        return xLocation;
    }

    public void setxLocation(Long xLocation) {
        this.xLocation = xLocation;
    }

    public Long getyLocation() {
        return yLocation;
    }

    public void setyLocation(Long yLocation) {
        this.yLocation = yLocation;
    }

    public Long getyDimension() {
        return yDimension;
    }

    public void setyDimension(Long yDimension) {
        this.yDimension = yDimension;
    }

    public Long getxDimension() {
        return xDimension;
    }

    public void setxDimension(Long xDimension) {
        this.xDimension = xDimension;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getAccessProtocol() {
        return accessProtocol;
    }

    public void setAccessProtocol(String accessProtocol) {
        this.accessProtocol = accessProtocol;
    }

    public String getPortAddress() {
        return portAddress;
    }

    public void setPortAddress(String portAddress) {
        this.portAddress = portAddress;
    }
}
