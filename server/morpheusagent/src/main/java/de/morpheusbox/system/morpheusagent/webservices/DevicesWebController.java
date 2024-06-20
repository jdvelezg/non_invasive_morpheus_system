package de.morpheusbox.system.morpheusagent.webservices;

import de.morpheusbox.system.morpheusagent.repository.dtos.device.AgentResponse;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.DeviceDTO;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.SensorDTO;
import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredDevice;
import de.morpheusbox.system.morpheusagent.repository.entities.Sensor;
import de.morpheusbox.system.morpheusagent.services.DevicesServiceController;
import de.morpheusbox.system.morpheusagent.services.exceptions.BadCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.NonTransientDataAccessException;
import org.springframework.dao.RecoverableDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/morpheusagent/devices")
public class DevicesWebController {

    private static final Logger LOGGER = Logger.getLogger(DevicesWebController.class.getName());
    @Autowired
    private DevicesServiceController devicesServiceController;

    /**
     *
     * @return The information registered for the device
     */
    @GetMapping(path = {"/info/{uuid}","/"})
    public ResponseEntity<AgentResponse<List<RegisteredDevice>>> getRegisteredDeviceInformation(@RequestHeader(required = false, name = "device") Optional<String> auth,
                                                                                               @PathVariable(required = false, name = "uuid") Optional<String> uuid){
        try{
            AgentResponse<List<RegisteredDevice>> response = new AgentResponse();
            List<RegisteredDevice> list = new ArrayList<>();
            if(uuid.isPresent()){
                RegisteredDevice device = devicesServiceController.getDeviceInformation(uuid.get());
                list.add(device);
            }else{
                list = devicesServiceController.getRegisteredDevices();
            }
            response.setMessage(Integer.toString(list.size())+" devices registered");
            response.setResponse(list);

            return ResponseEntity.ok(response);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

    @GetMapping(path = {"/dto/{uuid}","/dto"})
    public ResponseEntity<AgentResponse<List<DeviceDTO>>> getDeviceDTOInformation(@RequestHeader(required = false, name = "device") Optional<String> auth,
                                                                            @PathVariable(required = false, name = "uuid") Optional<String> uuid){
        try{
            AgentResponse<List<DeviceDTO>> response = new AgentResponse();
            List<DeviceDTO> devicesList = new ArrayList<>();
            if(uuid.isPresent()){
                DeviceDTO deviceDTO = devicesServiceController.getDevicePatientInformation(uuid.get());
                devicesList.add(deviceDTO);
            }else{
                devicesList = devicesServiceController.listAllDevicePatientAsDto();
            }
            response.setResponse(devicesList);
            response.setMessage(Integer.toString(devicesList.size()).concat(" devices registered"));

            return ResponseEntity.ok(response);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

    /**
     * Register a new device
     * @param device {uuid:,type:,name:,}
     * @return Device updated description and authentication token for further communications: {id:,uuid:,type:,name:,token}
     */
    @PostMapping(path = "/add")
    public ResponseEntity<AgentResponse<DeviceDTO>> addRegisteredDevice(@RequestBody DeviceDTO device){

        try {
            AgentResponse<DeviceDTO> response = new AgentResponse<DeviceDTO>();
            if(device.getPatient().getUuid() == null || device.getPatient().getUuid().compareTo("")==0){
                device = this.devicesServiceController.registerNewDevice(device);
            }else{
                device = this.devicesServiceController.registerNewPatientDevice(device);
            }

            response.setResponse(device);
            response.setMessage("Device registered");

            return ResponseEntity.ok(response);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }

    }

    @PutMapping(path = "/add")
    public ResponseEntity<AgentResponse<DeviceDTO>> updateRegisteredDevice(@RequestBody DeviceDTO device){
        try {
            AgentResponse<DeviceDTO> response = new AgentResponse<DeviceDTO>();
            device = this.devicesServiceController.updateDevice(device);

            response.setResponse(device);
            response.setMessage("Device registered");

            return ResponseEntity.ok(response);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

    /**
     * Removes a device from the system
     * @param id id of the device
     * @return string message when procedure is completed
     */
    @DeleteMapping(path = "/delete/id/{id}")
    public ResponseEntity<AgentResponse> removeRegisteredDevice(@RequestHeader(required = false, name = "device") Optional<String> auth,
                                                                @PathVariable(required = true, name = "id") Optional<Long> id){

        try {
            AgentResponse<String> response = new AgentResponse<>();
            if(id.isPresent()){
                Long idNumber = id.get();
                this.devicesServiceController.removeRegisteredDevice(idNumber);
                response.setMessage("Device "+idNumber.toString()+" removed from the system");
            }else{
                response.setMessage("None id provided. Nothing removed");
                response.setError(true);
            }


            return ResponseEntity.ok(response);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

    /**
     * Removes a device from the system using the device reference
     * @param uuid reference of the device (usually the MAC)
     * @return string message when the procedure is completed
     */
    @DeleteMapping(path = "/delete/uuid/{uuid}")
    public ResponseEntity<AgentResponse> removeRegisteredDeviceByReference(@RequestHeader(required = false, name = "device") Optional<String> auth,
                                                                           @PathVariable(required = true, name = "uuid") Optional<String> uuid){

        try {
            AgentResponse<String> response = new AgentResponse<>();
            if(uuid.isPresent()){
                String reference = uuid.get();
                this.devicesServiceController.removeRegisteredDevice(reference);
                response.setMessage("Device with reference -"+reference+"- removed from the system");
            }else{
                response.setMessage("No reference provided. Nothing removed");
                response.setError(true);
            }


            return ResponseEntity.ok(response);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

    /**
     * Updates the device parameters and refresh the authentication token
     * @param auth authentication token
     * @param device device parameters
     * @return updated device
     */
    @PutMapping(path = "/refresh")
    public ResponseEntity<AgentResponse<DeviceDTO>> updateRegisteredDevice(@RequestHeader(required = false, name = "device") Optional<String> auth,
                                                                           @RequestBody DeviceDTO device){
        try{
            AgentResponse<DeviceDTO> response = new AgentResponse<DeviceDTO>();
            DeviceDTO deviceDto =
                    this.devicesServiceController.registerNewDevice(device);
            response.setResponse(deviceDto);
            response.setMessage("Device registered");

            return ResponseEntity.ok(response);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }
    @GetMapping(path = {"/sensors","/sensors/{uuid}"})
    public ResponseEntity<AgentResponse<List<Sensor>>> listSensorByDevice(@RequestHeader(required = true,name = "device") Optional<String> auth,
                                                                          @PathVariable(name = "uuid") Optional<String> uuid){
        try{
            AgentResponse<List<Sensor>> response = new AgentResponse<List<Sensor>>();
            if(auth.isPresent()){
                devicesServiceController.setAuthorizedDeviceFromToken(auth.get());

                List<Sensor> sensorList = new ArrayList<>();
                if(uuid.isPresent()){
                    Sensor sensor = devicesServiceController.getSensorInformation(uuid.get());
                    if(sensor == null)
                        response.setMessage("Sensor not found");
                    else
                        sensorList.add(sensor);
                }else{
                    sensorList = devicesServiceController.listAllDeviceSensor();
                }
                response.setResponse(sensorList);

            }else{
                response.setError(true);
                response.setMessage("No authorization provided");
            }

            return ResponseEntity.ok(response);

        } catch (BadCredentialsException exc) {
            throw new ResponseStatusException(//400
                    HttpStatus.NETWORK_AUTHENTICATION_REQUIRED, exc.toString());

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }

    }

    @PostMapping(path = "/sensors/add")
    public ResponseEntity<AgentResponse<SensorDTO>> addSensorToDevice(@RequestHeader(required = true,name = "device") Optional<String> auth,
                                                                   @RequestBody SensorDTO sensorDTO){

        try{
            AgentResponse<SensorDTO> response = new AgentResponse<SensorDTO>();
            if(auth.isPresent()){
                devicesServiceController.setAuthorizedDeviceFromToken(auth.get());
                Sensor sensor = sensorDTO.getEmbeddedSensor();
                sensor = devicesServiceController.addDeviceSensor(sensor);
                SensorDTO dto = new SensorDTO(sensor);
                dto.setRecorder(sensorDTO.getRecorder());
                dto = devicesServiceController.saveRecorder(dto);
                response.setResponse(dto);
                response.setMessage("sensor "+sensor.getName()+" added");
            }else{
                response.setError(true);
                response.setMessage("No authorization provided");
            }
            return ResponseEntity.ok(response);

        } catch (BadCredentialsException exc) {
            throw new ResponseStatusException(//400
                    HttpStatus.NETWORK_AUTHENTICATION_REQUIRED, exc.toString());

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }

    }

    @PostMapping(path = "/sensors/list")
    public ResponseEntity<AgentResponse<List>> addSensorListToDevice(@RequestHeader(required = true,name = "device") Optional<String> auth,
                                                                       @RequestBody List<SensorDTO> sensorList){

        try{
            AgentResponse<List> response = new AgentResponse<List>();
            if(auth.isPresent()){
                devicesServiceController.setAuthorizedDeviceFromToken(auth.get());
                List<SensorDTO> sensorsUpdated = new ArrayList<>();
                for (SensorDTO sensorDTO:sensorList) {
                    SensorDTO sensor = devicesServiceController.saveRecorder(sensorDTO);
                    sensorsUpdated.add(sensor);
                }
                response.setResponse(sensorsUpdated);
                response.setMessage("sensor list updated");
            }else{
                response.setError(true);
                response.setMessage("No authorization provided");
            }
            return ResponseEntity.ok(response);

        } catch (BadCredentialsException exc) {
            throw new ResponseStatusException(//400
                    HttpStatus.NETWORK_AUTHENTICATION_REQUIRED, exc.toString());

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }

    }

    @PutMapping(path = "/sensors/update")
    public ResponseEntity<AgentResponse<Sensor>> updateSensorDevice(@RequestHeader(required = true,name = "device") Optional<String> auth,
                                                                      @RequestBody Sensor sensor){

        try{
            AgentResponse<Sensor> response = new AgentResponse<Sensor>();
            if(auth.isPresent()){
                devicesServiceController.setAuthorizedDeviceFromToken(auth.get());
                sensor = devicesServiceController.addDeviceSensor(sensor);
                response.setResponse(sensor);
            }else{
                response.setError(true);
                response.setMessage("No authorization provided");
            }
            return ResponseEntity.ok(response);

        } catch (BadCredentialsException exc) {
            throw new ResponseStatusException(//400
                    HttpStatus.NETWORK_AUTHENTICATION_REQUIRED, exc.toString());

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }

    }

    @DeleteMapping(path = "/sensors/delete/{uuid}")
    public ResponseEntity<AgentResponse<String>> deleteSensor(@RequestHeader(required = true,name = "device") Optional<String> auth,
                                                              @PathVariable(name = "uuid") Optional<String> uuid){

        try{
            AgentResponse<String> response = new AgentResponse<String>();
            if(auth.isPresent()){
                devicesServiceController.setAuthorizedDeviceFromToken(auth.get());
                if(uuid.isPresent()) {
                    devicesServiceController.deleteSensor(uuid.get());
                    response.setMessage("Sensor -"+uuid.get()+"- deleted");
                }else {
                    response.setMessage("No reference provided. Nothing deleted");
                    response.setError(true);
                }
            }

            return ResponseEntity.ok(response);


        } catch (BadCredentialsException exc) {
            throw new ResponseStatusException(//400
                    HttpStatus.NETWORK_AUTHENTICATION_REQUIRED, exc.toString());

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }





}
