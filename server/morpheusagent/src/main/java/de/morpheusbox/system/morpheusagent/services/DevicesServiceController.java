package de.morpheusbox.system.morpheusagent.services;

import de.morpheusbox.system.morpheusagent.repository.*;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.DeviceDTO;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.SensorDTO;
import de.morpheusbox.system.morpheusagent.repository.entities.*;
import de.morpheusbox.system.morpheusagent.services.exceptions.BadCredentialsException;
import de.morpheusbox.system.morpheusagent.utils.JWTUtil;
import jakarta.annotation.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.logging.Logger;

/**
 * Service class with methods to process device configuration and validation
 */
@Service
public class DevicesServiceController {

    private static final Logger LOGGER = Logger.getLogger(DevicesServiceController.class.getName());

    private DeviceDTO authorizedDevice;
    @Autowired
    private JWTUtil jwtUtil;
    @Autowired
    private RegisteredDeviceRepository registeredDeviceRepository;
    @Autowired
    private PatientDeviceRepository patientDeviceRepository;
    @Autowired
    private RegisteredPatientRepository registeredPatientRepository;
    @Autowired
    private DataRecordRepository dataRecordRepository;
    @Autowired
    private SensorRepository sensorRepository;
    @Autowired
    private RecorderRepository recorderRepository;

    /**
     * Constructor
     */
    public DevicesServiceController() {
    }

    /**
     * Device executing the procedures
     * @return null if no authorized device was identified
     */
    @Nullable
    public DeviceDTO getAuthorizedDevice() {
        return authorizedDevice;
    }

    /**
     * Set the device responsable of executing the procedures
     * @param authorizedDevice
     */
    public void setAuthorizedDevice(DeviceDTO authorizedDevice) {
        this.authorizedDevice = authorizedDevice;
    }

    /**
     * Set the authorized device using the authentication token
     * @param token
     */
    public void setAuthorizedDeviceFromToken(String token){
        if(jwtUtil.validateToken(token)){
            RegisteredDevice device = this.getDeviceFromAuthToken(token);
            DeviceDTO deviceDto = new DeviceDTO(device,token);
            this.setAuthorizedDevice(deviceDto);
        }
    }

    /**
     * Verify if the device responsable of executing the procedures
     * is valid and authorized.
     * This is for security features. Some methods will throw an exception if no authorized device is recognized.
     * @return
     */
    protected boolean verifyAuthorizedDevice(){
        if(this.authorizedDevice == null)
            return false;

        boolean valid = jwtUtil.validateToken(this.authorizedDevice.getToken());
        return valid;
    }

    /**
     *
     * @param deviceReference
     * @return Registered information for the device
     */
    @Nullable
    public RegisteredDevice getDeviceInformation(String deviceReference){
        Optional<RegisteredDevice> option = registeredDeviceRepository.findByUUID(deviceReference);
        if(!option.isPresent()){
            return null;
        }
        RegisteredDevice device = option.get();
        return device;
    }

    /**
     *
     * @param deviceReference
     * @return device with patient information
     */
    public DeviceDTO getDevicePatientInformation(String deviceReference){
        RegisteredDevice device = getDeviceInformation(deviceReference);
        Optional<PatientDevice> option = patientDeviceRepository.findActiveByDeviceId(device.getId(), true);
        PatientDevice patientDevice = new PatientDevice();
        if(option.isPresent()){
            patientDevice = option.get();
        }
        DeviceDTO deviceDTO = new DeviceDTO(patientDevice);

        return deviceDTO;
    }

    public List<DeviceDTO> listAllDevicePatientAsDto(){
        List<DeviceDTO> deviceList = patientDeviceRepository.findAllByActiveStatusAsDto(true);
        return deviceList;
    }

    /**
     * Extract information from the auth token to retrieve the registered device
     * @param token auth token
     * @return Registered Device
     */
    public RegisteredDevice getDeviceFromAuthToken(String token) throws BadCredentialsException{
        if(!jwtUtil.validateToken(token)){
            throw new BadCredentialsException();
        }
        String uuid = jwtUtil.getUUIDFromToken(token);
        Optional<RegisteredDevice> deviceOption = registeredDeviceRepository.findByUUID(uuid);
        if(!deviceOption.isPresent()){
            throw new BadCredentialsException();
        }
        return deviceOption.get();
    }

    /**
     *
     * @return List with all registered devices
     */
    public List<RegisteredDevice> getRegisteredDevices(){

        List<RegisteredDevice> devices = registeredDeviceRepository.findAllRegisteredDevices(Sort.by("uuid"));
        return devices;
    }

    /**
     * Creates a new Device authorized in the system or updates current if already registered
     * @param deviceDTO device reference
     * @return The stored device with ID and authorization (JWT) token
     */
    public DeviceDTO registerNewDevice(DeviceDTO deviceDTO){
        String uuid = deviceDTO.getUuid();
        String token = deviceDTO.getToken();
        boolean isNewDevice = false;

        //if not set
        if(token == null || token.compareTo("null")==0 || token.compareTo("")==0 || !jwtUtil.validateToken(token)){
            token = jwtUtil.generateToken(uuid);
            deviceDTO.setToken(token);
        }
        //checks if the device is already registered
        Optional<RegisteredDevice> optionDevice = registeredDeviceRepository.findByUUID(uuid);
        if(optionDevice.isPresent()){
            Long id = optionDevice.get().getId();
            deviceDTO.setId(id);
        }else{
            isNewDevice=true;
        }
        RegisteredDevice device = deviceDTO.getDevice();
        device = registeredDeviceRepository.save(device);
        DeviceDTO responseDTO = new DeviceDTO(device,token);
        //assign a default EMPTY patient to the device is new
        Optional<RegisteredPatient> optPatient = this.registeredPatientRepository.findEMPTYpatient();
        if(isNewDevice){

            if(optPatient.isPresent()){
                RegisteredPatient empty = optPatient.get();
                deviceDTO.setPatient(empty);
                responseDTO =this.registerNewPatientDevice(deviceDTO);
            }
        }
        //retrieve and update current patient-device
        else{
            RegisteredPatient patient= deviceDTO.getPatient();
            String patientUUID = patient.getUuid();
            Optional<RegisteredPatient> patientOpt = registeredPatientRepository.findByUUID(patientUUID);
            if(patientOpt.isPresent()){
                Long patientId = patientOpt.get().getId();
                Long deviceId = device.getId();
                Optional<PatientDevice> optPatDev =
                        patientDeviceRepository.findActiveByPatientIdAndDeviceId(deviceId,patientId);
                if(optPatDev.isPresent()){
                    PatientDevice patientDevice = optPatDev.get();
                    patientDevice.setyBedDimension(deviceDTO.getyBedDimension());
                    patientDevice.setxBedDimension(deviceDTO.getxBedDimension());
                    patientDevice.setBedDimensionUnits(deviceDTO.getBedDimensionUnits());
                    patientDevice = patientDeviceRepository.save(patientDevice);
                    responseDTO = new DeviceDTO(patientDevice);
                    responseDTO.setToken(token);
                }
            }else if(optPatient.isPresent()){
                RegisteredPatient empty = optPatient.get();
                deviceDTO.setPatient(empty);
                responseDTO =this.registerNewPatientDevice(deviceDTO);
            }
        }

        return responseDTO;
    }

    public DeviceDTO updateDevice(DeviceDTO deviceDTO){
        String uuid = deviceDTO.getUuid();
        //checks if the device is already registered
        Optional<RegisteredDevice> optionDevice = registeredDeviceRepository.findByUUID(uuid);
        if(optionDevice.isPresent()){
            Long id = optionDevice.get().getId();
            deviceDTO.setId(id);
        }
        RegisteredDevice device = deviceDTO.getDevice();
        device = registeredDeviceRepository.save(device);
        DeviceDTO responseDTO = new DeviceDTO(device,null);
        //Updates patient
        RegisteredPatient patient= deviceDTO.getPatient();
        String patientUUID = patient.getUuid();
        Optional<RegisteredPatient> patientOpt = registeredPatientRepository.findByUUID(patientUUID);
        if(patientOpt.isPresent()){
            Long patientId = patientOpt.get().getId();
            Long deviceId = device.getId();
            Optional<PatientDevice> optPatDev =
                    patientDeviceRepository.findActiveByPatientIdAndDeviceId(deviceId,patientId);
            if(optPatDev.isPresent()){
                PatientDevice patientDevice = optPatDev.get();
                patientDevice.setyBedDimension(deviceDTO.getyBedDimension());
                patientDevice.setxBedDimension(deviceDTO.getxBedDimension());
                patientDevice.setBedDimensionUnits(deviceDTO.getBedDimensionUnits());
                patientDevice = patientDeviceRepository.save(patientDevice);
                responseDTO = new DeviceDTO(patientDevice);
            }
        }

        return responseDTO;
    }

    /**
     * Set lastOnline parameter of device to current datetime
     * @param deviceUuid
     * @return device updated
     */
    public RegisteredDevice updateLastOnlineDatetime(String deviceUuid){
        Optional<RegisteredDevice> optDevice = this.registeredDeviceRepository.findByUUID(deviceUuid);
        if(optDevice.isPresent()){
            RegisteredDevice device = optDevice.get();
            device.setLastOnline( LocalDateTime.now() );
            this.registeredDeviceRepository.save(device);
            return device;
        }
        return null;
    }

    /**
     * Add/updates a Patient.
     * Add/updates a device.
     * Add/updates a patient-device information
     * @param deviceDTO Patient-Device relation information
     * @return The updated deviceDTO
     */
    public DeviceDTO registerNewPatientDevice(DeviceDTO deviceDTO){
        RegisteredDevice device = deviceDTO.getDevice();
        RegisteredPatient patient = deviceDTO.getPatient();
        PatientDevice patientDevice = deviceDTO.getPatientDevice();
        //get the patient info
        Optional<RegisteredPatient> optPatient = registeredPatientRepository.findByUUID(patientDevice.getPatient().getUuid());
        if(optPatient.isPresent()){
            //Long id = optPatient.get().getId();
            patientDevice.setPatient(optPatient.get());
        }
        //get the device info
        Optional<RegisteredDevice> optDevice = registeredDeviceRepository.findByUUID(device.getUuid());
        if(optDevice.isPresent()){
            //Long id = optDevice.get().getId();
            patientDevice.setDevice(optDevice.get());
        }else if(device.getUuid().compareTo("") == 0 || device.getUuid() == null){
            device.setUuid(UUID.randomUUID().toString());
        }
        //check for existent
        Optional<PatientDevice> optPatientDevice
                = patientDeviceRepository.findActiveByPatientIdAndDeviceId(patientDevice.getDevice().getId(), patientDevice.getPatient().getId());
        if(optPatientDevice.isPresent()){
            Long id = optPatientDevice.get().getId();
            patientDevice.setId(id);
        }
        patientDevice.setActive(true);
        patientDevice.setDatetime(LocalDateTime.now());
        //inactivate other relations
        patientDeviceRepository.setActiveByDeviceId(patientDevice.getDevice().getId(), false);
        //saves the patient - device relation info
        patientDevice = patientDeviceRepository.save(patientDevice);
        DeviceDTO responseDto =new DeviceDTO(patientDevice);
        //assign/refresh token
        String token = deviceDTO.getToken();
        if(token == null || token.compareTo("null")==0 || token.compareTo("")==0){
            token = jwtUtil.generateToken(device.getUuid());
        }
        responseDto.setToken(token);

        return responseDto;
    }

    /**
     * Removes a Device from the system
     * @param deviceId Id of the device
     */
    public void removeRegisteredDevice(Long deviceId){
        Optional<RegisteredDevice> option = registeredDeviceRepository.findById(deviceId);
        if(option.isPresent()){
            RegisteredDevice device = option.get();
            registeredDeviceRepository.deleteRegisteredDeviceById(device.getId());
        }
    }

    /**
     * Removes a Device from the system
     * @param deviceUUID usually the MAC
     */
    public void removeRegisteredDevice(String deviceUUID){
        Optional<RegisteredDevice> option = registeredDeviceRepository.findByUUID(deviceUUID);
        if(option.isPresent()){
            RegisteredDevice device = option.get();
            registeredDeviceRepository.deleteRegisteredDeviceById(device.getId());
        }
    }

    /**
     * Refresh the token for a previously authorized device
     * @param deviceReference usually MAC address
     * @return A new token
     */
    public String refreshDeviceToken(String deviceReference){
        return jwtUtil.generateToken(deviceReference);
    }

    /**
     * Saves a recorder in the database
     * @param sensorDTO
     * @return updated Sensor DTO
     */
    public SensorDTO saveRecorder(SensorDTO sensorDTO){
        //Check that there is a real device registering the sensor
        if(!this.verifyAuthorizedDevice()){
            throw new BadCredentialsException();
        }
        Sensor sensor = sensorDTO.getEmbeddedSensor();
        sensor = addDeviceSensor(sensor);
        Recorder recorder = sensorDTO.getEmbeddedRecorder();
        recorder.setSensor(sensor);
        Optional<Recorder> recOption = recorderRepository.findBySensorId(sensor.getId());
        if(recOption.isPresent()){
            Recorder rec = recOption.get();
            recorder.setId(rec.getId());
        }
        recorder = this.recorderRepository.save(recorder);
        SensorDTO response = new SensorDTO(recorder);

        return response;
    }


    /**
     * Add or updates a sensor to the authorized device
     * @param sensor
     * @return the updated sensor
     */
    public Sensor addDeviceSensor(Sensor sensor){
        //Check that there is a real device registering the sensor
        if(!this.verifyAuthorizedDevice()){
            throw new BadCredentialsException();
        }
        //Ensures the device registering the sensor
        RegisteredDevice device = this.authorizedDevice.getDevice();
        sensor.setRegisteredDevice(device);
        //Check if the sensor is not in system
        String sensorName = sensor.getName();
        Optional<Sensor> sensorOption = sensorRepository.findByNameAndDevice(sensorName, device.getId());
        Optional<Sensor> sensorOption2 = sensorRepository.findByUUID(sensor.getUuid());
        if(sensorOption.isPresent()){
            Long sensorId = sensorOption.get().getId();
            String uuid = sensorOption.get().getUuid();
            sensor.setId(sensorId);
            sensor.setUuid(uuid);
        }else if(sensorOption2.isPresent()){
            Long sensorId = sensorOption2.get().getId();
            String uuid = sensorOption2.get().getUuid();
            sensor.setId(sensorId);
            sensor.setUuid(uuid);
        }else if(sensor.getUuid().compareTo("")==0 || sensor.getUuid() == null){
            String uuid = UUID.randomUUID().toString();
            sensor.setUuid(uuid);
        }
        sensor = sensorRepository.save(sensor);

        return sensor;
    }

    /**
     * Retrieves the sensor information from the system
     * @param uuid
     * @return
     */
    @Nullable
    public Sensor getSensorInformation(String uuid){
        //Check that there is a real device registering the sensor
        if(!this.verifyAuthorizedDevice()){
            throw new BadCredentialsException();
        }
        Optional<Sensor> sensorOption = sensorRepository.findByUUID(uuid);
        if(sensorOption.isPresent())
            return sensorOption.get();
        else
            return null;
    }

    /**
     * Retrieve the list of registered sensors for the device
     * @return
     */
    public List<Sensor> listAllDeviceSensor(){
        //Check that there is a real device registering the sensor
        if(!this.verifyAuthorizedDevice()){
            throw new BadCredentialsException();
        }
        Long deviceId = this.authorizedDevice.getId();
        List<Sensor> sensorList = sensorRepository.findAllByDevice(deviceId,Sort.by("name"));

        return sensorList;
    }

    /**
     * Deletes a sensor register from the system
     * @param uuid
     */
    public void deleteSensor(String uuid){
        if(!this.verifyAuthorizedDevice()){
            throw new BadCredentialsException();
        }
        Optional<Sensor> sensorOption = sensorRepository.findByUUID(uuid);
        if(sensorOption.isPresent()){
            long sensorId = sensorOption.get().getId();
            dataRecordRepository.deleteDataRecordBySensorId(sensorId);
            recorderRepository.deleteRecorderBySensorId(sensorId);
            sensorRepository.deleteSensorById(sensorId);
        }
    }

}
