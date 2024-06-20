package de.morpheusbox.digesters.mqttstreamdigest.beans;

import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttCallback;
import org.eclipse.paho.client.mqttv3.MqttMessage;

import java.util.logging.Level;
import java.util.logging.Logger;

public class MqttProcessStreamCallback implements MqttCallback {

    private static final Logger LOGGER = Logger.getLogger(MqttProcessStreamCallback.class.getName());
    @Override
    public void connectionLost(Throwable throwable) {
        LOGGER.log(Level.INFO,"connectionLost: " + throwable.getMessage());
    }

    @Override
    public void messageArrived(String s, MqttMessage mqttMessage) throws Exception {

    }

    @Override
    public void deliveryComplete(IMqttDeliveryToken iMqttDeliveryToken) {

    }
}
