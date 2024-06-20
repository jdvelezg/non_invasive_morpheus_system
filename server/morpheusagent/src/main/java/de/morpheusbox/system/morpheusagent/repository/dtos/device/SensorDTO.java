package de.morpheusbox.system.morpheusagent.repository.dtos.device;

import com.fasterxml.jackson.annotation.JsonIgnore;
import de.morpheusbox.system.morpheusagent.repository.entities.Recorder;
import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredDevice;
import de.morpheusbox.system.morpheusagent.repository.entities.Sensor;

public class SensorDTO {

    private Sensor sensor;
    private Recorder recorder;
    private String description;

    /**
     * Constructor
     */
    public SensorDTO() {
        this.recorder = new Recorder();
        this.sensor = this.recorder.getSensor();
    }

    /**
     * Constructor
     * @param sensor internal object
     */
    public SensorDTO(Sensor sensor) {
        this.recorder = new Recorder(sensor);
        this.sensor = this.recorder.getSensor();
    }

    public SensorDTO(Recorder recorder){
        this.recorder = recorder;
        this.sensor = this.recorder.getSensor();
    }

    @JsonIgnore
    public Sensor getEmbeddedSensor() {
        return sensor;
    }

    @JsonIgnore
    public Recorder getEmbeddedRecorder() {
        return recorder;
    }

    @JsonIgnore
    public long getId() {
        return sensor.getId();
    }

    public void setId(long id) {
        this.sensor.setId(id);
    }

    public String getUuid() {
        return sensor.getUuid();
    }

    public void setUuid(String uuid) {
        if(uuid != null)
            if(uuid.compareTo("")!=0)
                this.sensor.setUuid(uuid);
    }

    public RegisteredDevice getRegisteredDevice() {
        return sensor.getRegisteredDevice();
    }

    public void setRegisteredDevice(RegisteredDevice device) {
        this.sensor.setRegisteredDevice(device);
    }

    public String getName() {
        return sensor.getName();
    }

    public void setName(String name) {
        this.sensor.setName(name);
    }

    public String getTransducerType() {
        return sensor.getTransducerType();
    }

    public void setTransducerType(String transducerType) {
        this.sensor.setTransducerType(transducerType);
    }

    public String getPhysicalDimension() {
        return sensor.getPhysicalDimension();
    }

    public void setPhysicalDimension(String pysicalDimension) {
        this.sensor.setPhysicalDimension(pysicalDimension);
    }

    public double getPhysicalMin() {
        return sensor.getPhysicalMin();
    }

    public void setPhysicalMin(double physicalMin) {
        this.sensor.setPhysicalMin(physicalMin);
    }

    public double getPhysicalMax() {
        return sensor.getPhysicalMax();
    }

    public void setPhysicalMax(double physicalMax) {
        this.sensor.setDigitalMin(physicalMax);
    }

    public double getDigitalMin() {
        return sensor.getDigitalMin();
    }

    public void setDigitalMin(double digitalMin) {
        sensor.setDigitalMin(digitalMin);
    }

    public double getDigitalMax() {
        return sensor.getDigitalMax();
    }

    public void setDigitalMax(double digitalMax) {
        sensor.setDigitalMax(digitalMax);
    }

    public Long getyDimension() {
        return sensor.getyDimension();
    }

    public void setyDimension(Long yDimension){ sensor.setyDimension(yDimension);}

    public Long getxDimension() {
        return sensor.getxDimension();
    }

    public void setxDimension(Long xDimension){ sensor.setxDimension(xDimension);}

    public Long getxLocation() {
        return sensor.getxLocation();
    }

    public void setxLocation(Long xLocation) {
        sensor.setxLocation(xLocation);
    }

    public Long getyLocation() {
        return sensor.getyLocation();
    }

    public void setyLocation(Long yLocation) {
        this.sensor.setyLocation(yLocation);
    }

    public Recorder getRecorder() {
        return recorder;
    }

    public void setRecorder(Recorder recorder) {
        this.recorder.setCommand(recorder.getCommand());
        this.recorder.setFilepath(recorder.getFilepath());
        this.recorder.setParams(recorder.getParams());
        this.recorder.setStreamer(recorder.isStreamer());
        this.recorder.setDescription(recorder.getDescription());
    }
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isActive() {
        return this.sensor.isActive();
    }

    public void setActive(boolean active) {
        this.sensor.setActive(active);
    }

    public String getAccessProtocol() {
        return sensor.getAccessProtocol();
    }

    public void setAccessProtocol(String accessProtocol) {
        this.sensor.setAccessProtocol(accessProtocol);
    }

    public String getPortAddress() {
        return sensor.getPortAddress();
    }

    public void setPortAddress(String portAddress) {
        this.sensor.setPortAddress(portAddress);
    }
}
