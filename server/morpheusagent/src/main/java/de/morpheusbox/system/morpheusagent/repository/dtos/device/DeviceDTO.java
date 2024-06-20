package de.morpheusbox.system.morpheusagent.repository.dtos.device;

import com.fasterxml.jackson.annotation.JsonIgnore;
import de.morpheusbox.system.morpheusagent.repository.entities.PatientDevice;
import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredDevice;
import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredPatient;

import java.time.LocalDateTime;

/**
 * Device Data transfer object encapsulates the Registered device and includes the authentication token.
 */
public class DeviceDTO {

    private PatientDevice patientDevice;
    private String token;

    /**
     * Constructor
     * @param device
     * @param token
     */
    public DeviceDTO(RegisteredDevice device, String token) {
        this.token = token;
        this.patientDevice = new PatientDevice();
        this.patientDevice.setDevice(device);
    }

    public DeviceDTO(PatientDevice patientDevice) {
        this.patientDevice = patientDevice;
    }

    /**
     * Constructor
     */
    public DeviceDTO() {
        this.patientDevice = new PatientDevice();
    }

    @JsonIgnore
    public RegisteredDevice getDevice(){
        return this.patientDevice.getDevice();
    }

    @JsonIgnore
    public PatientDevice getPatientDevice() {
        return patientDevice;
    }

    @JsonIgnore
    public long getId() {
        return patientDevice.getDevice().getId();
    }

    public void setId(long id) {
        this.patientDevice.getDevice().setId(id);
    }

    public String getUuid() {
        return patientDevice.getDevice().getUuid();
    }

    public void setUuid(String uuid) {
        if(uuid != null)
            if(uuid.compareTo("")!=0)
                this.patientDevice.getDevice().setUuid(uuid);
    }

    public String getType() {
        return patientDevice.getDevice().getType();
    }

    public void setType(String type) {
        this.patientDevice.getDevice().setType(type);
    }

    public String getName() {
        return patientDevice.getDevice().getName();
    }

    public PatientDTO getPatientDto(){
        PatientDTO patientDTO = new PatientDTO(this.patientDevice.getPatient());
        return patientDTO;
    }

    public void setPatientDto(PatientDTO patientDTO){
        RegisteredPatient patient = new RegisteredPatient();
        patient.setUuid(patientDTO.getUuid());
        patient.setAlias(patientDTO.getName());
        this.setPatient(patient);
    }

    public String getIpAddress() {
        return patientDevice.getDevice().getIpAddress();
    }

    public void setIpAddress(String ipAddress) {
        this.patientDevice.getDevice().setIpAddress(ipAddress);
    }

    public LocalDateTime getLastOnline() {
        return patientDevice.getDevice().getLastOnline();
    }

    public void setLastOnline(LocalDateTime datetime) {
        this.patientDevice.getDevice().setLastOnline(datetime);
    }

    public void setName(String name) {
        this.patientDevice.getDevice().setName(name);
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getxBedDimension() {
        return this.patientDevice.getxBedDimension();
    }

    @JsonIgnore
    public RegisteredPatient getPatient(){
        return this.patientDevice.getPatient();
    }

    public String getPatient_uuid(){ return this.patientDevice.getPatient().getUuid(); }

    public void setPatient_uuid(String uuid){
        RegisteredPatient patient = new RegisteredPatient();
        patient.setUuid(uuid);
        this.patientDevice.setPatient(patient); }

    public void setPatient(RegisteredPatient patient){
        this.patientDevice.setPatient(patient);
    }

    public void setxBedDimension(Long xBedDimension) {
        this.patientDevice.setxBedDimension(xBedDimension);
    }

    public Long getyBedDimension() {
        return patientDevice.getyBedDimension();
    }

    public void setyBedDimension(Long yBedDimension) {
        this.patientDevice.setyBedDimension(yBedDimension);
    }

    public String getBedDimensionUnits() {
        return this.patientDevice.getBedDimensionUnits();
    }

    public void setBedDimensionUnits(String bedDimensionUnits) {
        this.patientDevice.setBedDimensionUnits(bedDimensionUnits);
    }

    public boolean isActive() {
        return patientDevice.isActive();
    }

    public void setActive(boolean active) {
        this.patientDevice.setActive(active);
    }
}
