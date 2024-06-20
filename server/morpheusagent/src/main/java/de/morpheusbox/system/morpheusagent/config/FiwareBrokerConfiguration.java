package de.morpheusbox.system.morpheusagent.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * Retrieves the configuration of the Fiware broker used to perform the integration
 */
@Configuration
@ConfigurationProperties(prefix = "de.morpheusbox.fiware")
public class FiwareBrokerConfiguration {
    @Value("127.0.0.1")
    private String brokerHost;
    @Value("1026")
    private String brokerPort;

    public String getBrokerHost() {
        return brokerHost;
    }

    public void setBrokerHost(String brokerHost) {
        this.brokerHost = brokerHost;
    }

    public String getBrokerPort() {
        return brokerPort;
    }

    public void setBrokerPort(String brokerPort) {
        this.brokerPort = brokerPort;
    }
}
