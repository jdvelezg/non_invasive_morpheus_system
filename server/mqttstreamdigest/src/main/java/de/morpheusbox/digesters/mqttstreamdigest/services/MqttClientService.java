package de.morpheusbox.digesters.mqttstreamdigest.services;

import de.morpheusbox.digesters.mqttstreamdigest.beans.MqttSaveStreamCallback;
import de.morpheusbox.digesters.mqttstreamdigest.config.MqttServerConfiguration;
import de.morpheusbox.digesters.mqttstreamdigest.repository.DataRecordRepository;
import de.morpheusbox.digesters.mqttstreamdigest.repository.DeviceRepository;
import de.morpheusbox.digesters.mqttstreamdigest.repository.entities.Recording;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class MqttClientService {

    private static final Logger LOGGER = Logger.getLogger(MqttClientService.class.getName());

    /**
     * set to sore al the clients set to active.
     * This set can be accessed later to close connections when a device stop streaming mqtt messages
     */
    private Map<String,MqttClient> activeMqttClients;
    @Autowired
    private MqttServerConfiguration mqttServerConfiguration;
    @Autowired
    private DeviceRepository deviceRepository;
    @Autowired
    private DataRecordRepository dataRecordRepository;


    public MqttClientService() {
        this.activeMqttClients = new HashMap<>();
    }

    /**
     * Create a class PublishSample that will publish a MQTT message to the topic
     * extracted from: https://www.emqx.com/en/blog/how-to-use-mqtt-in-java
     * @param broker use configuration if null
     * @param topic topic to publish message
     * @param username use configuration if null
     * @param password use configuration if null
     * @param clientid use configuration if null
     * @param content message to publish
     * @param qos QoS; usually = 1
     */
    @Async
    public void publishMqttMessage(String broker, @NonNull String topic, String username, String password, String clientid, @NonNull String content, int qos) throws MqttException{
        if(broker == null){
            broker = mqttServerConfiguration.getTcpUrl();
        }
        if(username == null){
            username = mqttServerConfiguration.getUsername();
        }
        if(password == null){
            password = mqttServerConfiguration.getPassword();
        }
        if(clientid == null){
            clientid = mqttServerConfiguration.getClientId();
        }

        MqttClient client = new MqttClient(broker, clientid.concat("_publisher"), new MemoryPersistence());
        MqttConnectOptions options = new MqttConnectOptions();
        //options.setUserName(username);
        //options.setPassword(password.toCharArray());
        options.setConnectionTimeout(60);
        options.setKeepAliveInterval(60);
        //connect
        client.connect(options);
        // create message and setup QoS
        MqttMessage message = new MqttMessage(content.getBytes());
        message.setQos(qos);
        // publish message
        client.publish(topic, message);
        LOGGER.log(Level.INFO,"Message published");
        LOGGER.log(Level.INFO,"topic: " + topic);
        LOGGER.log(Level.INFO,"message content: " + content);
        // disconnect
        client.disconnect();
        // close client
        client.close();
    }

    @Async
    public void initNewMqttClientListener(String recordingId,String transducer,String topic, int qos) throws MqttException {
        //check Device ID
        Optional<Recording> optional = deviceRepository.findByUUID(recordingId);
        Recording recording;
        if(optional.isEmpty()){
            recording = new Recording(recordingId);
        }else{
            recording = optional.get();
            //stops if already running
            this.endMqqtClientListener(transducer,recordingId);
        }
        recording.setActive(true);
        try {
            deviceRepository.save(recording);
        }catch(Exception exc){
            optional = deviceRepository.findByUUID(recordingId);
            recording = optional.get();
        }
        String surrogateId = transducer.concat("_").concat(recordingId);
        MqttSaveStreamCallback callback = new MqttSaveStreamCallback(recording,dataRecordRepository);

        //Connect the server
        String broker = mqttServerConfiguration.getTcpUrl();
        String clientId = mqttServerConfiguration.getClientId().concat("-").concat(surrogateId);//specific client id
        MqttClient client = new MqttClient(broker,clientId,
                                            new MemoryPersistence());
        // connect options
        MqttConnectOptions options = new MqttConnectOptions();
        options.setUserName(mqttServerConfiguration.getUsername());
        options.setPassword(mqttServerConfiguration.getPassword().toCharArray());
        options.setCleanSession(false); //Sets whether the client and server should remember state across restarts and reconnects
        //setConnectionTimeout: Sets the connection timeout value.
        //setKeepAliveInterval: Sets the "keep alive" interval.
        options.setKeepAliveInterval(10);
        options.setAutomaticReconnect(true);
        // setup callback
        client.setCallback(callback);
        //Subscribe to the topic
        client.connect(options);
        client.subscribe(topic, qos);
        this.activeMqttClients.put(surrogateId,client);
    }

    @Async
    public void endMqqtClientListener(String recordingId,String transducer) throws MqttException{
        String surrogateId = transducer.concat("_").concat(recordingId);
        //check Device ID
        Optional<Recording> optional = deviceRepository.findByUUID(recordingId);
        Recording recording;
        if(optional.isPresent()){
            recording = optional.get();
            recording.setActive(false);
            deviceRepository.save(recording);
        }
        if(this.activeMqttClients.containsKey(surrogateId)){
            MqttClient client = this.activeMqttClients.remove(surrogateId);
            client.disconnect();
            client.close();
        }
    }
}
