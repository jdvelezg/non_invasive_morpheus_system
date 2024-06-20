package de.morpheusbox.system.morpheusagent.websocket;


import de.morpheusbox.system.morpheusagent.repository.dtos.device.*;
import de.morpheusbox.system.morpheusagent.repository.entities.Recording;
import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredDevice;
import de.morpheusbox.system.morpheusagent.repository.entities.Sensor;
import de.morpheusbox.system.morpheusagent.services.DevicesServiceController;
import de.morpheusbox.system.morpheusagent.services.RecordingServiceController;
import org.springframework.beans.ConversionNotSupportedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.*;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.LogRecord;
import java.util.logging.Logger;
import java.util.zip.GZIPInputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

@Controller
public class RecordingSocketController {

    private static final Logger LOGGER = Logger.getLogger(RecordingSocketController.class.getName());
    @Autowired
    RecordingServiceController recordingServiceController;
    @Autowired
    DevicesServiceController devicesServiceController;
    @Autowired
    SimpMessagingTemplate simpMessagingTemplate;

    /*@MessageMapping("/data")
    @SendTo("/topic/recording")
    public AgentResponse<List<Recording>> listAllRecordingByDevice(String deviceUUID){
        return null;
    }/**/

    @MessageMapping("/status")
    public void broadcastStatus(@Payload DeviceDTO device){
        LOGGER.log(new LogRecord(Level.INFO,device.toString()));
        this.simpMessagingTemplate.convertAndSend("/topic/status",device);
    }

    @MessageMapping("/recordings")
    public void registerStartedRecording(@Headers Map<String,Object> header, @Payload RecordingDTO recordingDTO){
        LOGGER.log(new LogRecord(Level.INFO,"receiving recording_started"));
        recordingServiceController.addRecording(recordingDTO);
    }

    @MessageMapping("/report_online")
    public void updateOnlineDevices(@Headers Map<String,Object> header, @Payload DeviceDTO device){
        LOGGER.log(new LogRecord(Level.INFO,header.toString()));
        String deviceUUID = device.getUuid();
        RegisteredDevice updatedDevice = this.devicesServiceController.updateLastOnlineDatetime(deviceUUID);
        this.simpMessagingTemplate.convertAndSend("/topic/online_devices",updatedDevice);
        //Send command to device to sync current active patient
        DeviceDTO deviceDTO = this.devicesServiceController.getDevicePatientInformation(deviceUUID);
        String patientUUID = deviceDTO.getPatient_uuid();
        //updates patient if configured
        if(patientUUID != null && patientUUID.compareTo("") != 0){
            Map<String,Object> commandMessage = new HashMap<>();
            commandMessage.put("ACTION","SET_PATIENT");
            Map<String,String> params = new HashMap<String,String>();
            params.put("uuid",patientUUID);
            params.put("name",deviceDTO.getPatient().getAlias());
            commandMessage.put("PARAMS",(Object) params);
            String deviceQueue = "/queue/".concat(deviceUUID);
            this.simpMessagingTemplate.convertAndSend(deviceQueue,commandMessage);
        }
        //ask for sensor information if missing
        devicesServiceController.setAuthorizedDevice(device);
        List<Sensor> sensorList = devicesServiceController.listAllDeviceSensor();
        if(sensorList.size() == 0){
            Map<String,Object> commandMessage = new HashMap<>();
            commandMessage.put("ACTION","LIST_SENSORS");
            commandMessage.put("PARAMS",null);
            String deviceQueue = "/queue/".concat(deviceUUID);
            this.simpMessagingTemplate.convertAndSend(deviceQueue,commandMessage);
        }
    }


    @MessageMapping("/sync_configuration")
    public void updateOnlineDevices(@Headers Map<String,Object> header, @Payload Map<Object,Object> configuration){
        LOGGER.log(new LogRecord(Level.INFO,header.toString()));
        try{
            if(configuration.containsKey("device")) {
                DeviceDTO deviceDTO = (DeviceDTO) configuration.get("device");
                //extract sensor information
                if (configuration.containsKey("sensors")) {
                    LOGGER.log(new LogRecord(Level.INFO, "SENSORS is present"));
                    List<Map> sensorList = (List<Map>) configuration.get("sensors");
                    for (Map conf : sensorList) {
                        Sensor configSensor = new Sensor();
                        if (conf.containsKey("uuid"))
                            configSensor.setUuid((String) conf.get("uuid"));
                        if (conf.containsKey("name"))
                            configSensor.setName((String) conf.get("name"));
                        if (conf.containsKey("transducerType"))
                            configSensor.setTransducerType((String) conf.get("transducerType"));
                        if (conf.containsKey("physicalDimension"))
                            configSensor.setTransducerType((String) conf.get("physicalDimension"));
                        if (conf.containsKey("physicalMin"))
                            configSensor.setPhysicalMin((Double) conf.get("physicalMin"));
                        if (conf.containsKey("physicalMax"))
                            configSensor.setPhysicalMax((Double) conf.get("physicalMax"));
                        if (conf.containsKey("DigitalMin"))
                            configSensor.setDigitalMin((Double) conf.get("DigitalMin"));
                        if (conf.containsKey("DigitalMax"))
                            configSensor.setDigitalMax((Double) conf.get("DigitalMax"));
                        if (conf.containsKey("xLocation"))
                            configSensor.setxLocation((Long) conf.get("xLocation"));
                        if (conf.containsKey("yLocation"))
                            configSensor.setyLocation((Long) conf.get("yLocation"));
                        if (conf.containsKey("xDimension"))
                            configSensor.setxDimension((Long) conf.get("xDimension"));
                        if (conf.containsKey("yDimension"))
                            configSensor.setyDimension((Long) conf.get("yDimension"));
                        if (conf.containsKey("active"))
                            configSensor.setActive((Boolean) conf.get("active"));
                        if (conf.containsKey("accessProtocol"))
                            configSensor.setAccessProtocol((String) conf.get("accessProtocol"));
                        if (conf.containsKey("portAddress"))
                            configSensor.setPortAddress((String) conf.get("portAddress"));
                        //add device reference
                        configSensor.setRegisteredDevice(deviceDTO.getDevice());
                        this.devicesServiceController.addDeviceSensor(configSensor);
                    }//foreach
                }//if-sensor
            }//if-device
        }catch (Exception exc){
            LOGGER.log(new LogRecord(Level.INFO, "Configuration conversion failed"));
            LOGGER.log(new LogRecord(Level.INFO, exc.getMessage()));
        }
    }
}
