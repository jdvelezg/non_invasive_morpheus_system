package de.morpheusbox.digesters.mqttstreamdigest.webservices;


import de.morpheusbox.digesters.mqttstreamdigest.services.MqttClientService;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.NonTransientDataAccessException;
import org.springframework.dao.RecoverableDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;
import java.util.logging.Logger;

@RestController
@RequestMapping("/mqtt-stream")
public class DigestMqttController {

    private static final Logger LOGGER = Logger.getLogger(DigestMqttController.class.getName());

    @Autowired
    private MqttClientService mqttClientService;

    @PostMapping("/start/{transducer}")
    public ResponseEntity<String> startMqttClientStreamDigest(@PathVariable(name = "transducer") String sensorID,
                                                              @RequestBody Map<String,String> body){
        try{
            String recordingId = body.get("recordingID");
            //Create the topic transducer/deviceId
            String transducer = sensorID.toLowerCase();
            String topic = "/".concat(recordingId.replaceAll("\"","")).concat("/").concat(transducer).concat("/+");
            mqttClientService.initNewMqttClientListener(recordingId,transducer,topic,1);

            return ResponseEntity.ok("Listener has been activated for topic "+topic);

        }catch (MqttException exc) {
            LOGGER.warning("MqttException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.EXPECTATION_FAILED, exc.toString());

        }catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());

        }catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

    @DeleteMapping(path = "/stop/{transducer}/{recordingId}")
    public ResponseEntity<String> stopMqttClient(@PathVariable(name = "transducer") String transducer,
                                                 @PathVariable(name = "recordingId") String recordingId){

        try{
            mqttClientService.endMqqtClientListener(recordingId,transducer);
            return ResponseEntity.ok("Listener has been deactivated for "+transducer+"_"+recordingId);

        }catch (MqttException exc) {
            LOGGER.warning("MqttException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.EXPECTATION_FAILED, exc.toString());

        }catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());

        }catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

    @PostMapping("/publish")
    public ResponseEntity<String> publishMqttMessage(@RequestParam("topic") String topic,
                                                     @RequestParam("message") String content){
        try{
            mqttClientService.publishMqttMessage(null,topic,null,null,null,content,1);

            return ResponseEntity.ok("Message is being processed");

        }catch (MqttException exc) {
            LOGGER.warning("MqttException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.EXPECTATION_FAILED, exc.toString());

        }catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());

        }catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }

    }


}
