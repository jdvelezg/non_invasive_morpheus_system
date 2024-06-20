package de.morpheusbox.digesters.mqttstreamdigest.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.openssl.PEMKeyPair;
import org.bouncycastle.openssl.PEMParser;
import org.bouncycastle.openssl.jcajce.JcaPEMKeyConverter;

import javax.net.ssl.KeyManagerFactory;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManagerFactory;
import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileReader;
import java.security.KeyPair;
import java.security.KeyStore;
import java.security.Security;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;

@Configuration
@ConfigurationProperties(prefix = "de.morpheus.mqttserver")
public class MqttServerConfiguration {

    @Value("localhost")
    private String broker;
    @Value("1883")
    private String port;
    @Value("9001")
    private String wsport;
    @Value("tcp")
    private String protocol;
    @Value("")
    private String username;
    @Value("")
    private String password;
    @Value("morpheus_backclient")
    private String clientId;
    @Value("/cacert.pem")
    private String caFilePath;
    @Value("/client.pem")
    private String clientCrtFilePath;
    @Value("/client.key")
    private String clientKeyFilePath;

    /**
     * Constructor
     */
    public MqttServerConfiguration() {
    }

    public String getTcpUrl(){
        String url = this.protocol.concat("://").concat(this.broker).concat(":").concat(this.port);
        return url;
    }

    public String getWsUrl(){
        String wsProtocol = "ws";
        String url = protocol.concat("://").concat(this.broker).concat(this.wsport);
        return url;
    }

    public String getBroker() {
        return broker;
    }

    public void setBroker(String broker) {
        this.broker = broker;
    }

    public String getPort() {
        return port;
    }

    public void setPort(String port) {
        this.port = port;
    }

    public String getWsport() {
        return wsport;
    }

    public void setWsport(String wsport) {
        this.wsport = wsport;
    }

    public String getProtocol() {
        return protocol;
    }

    public void setProtocol(String protocol) {
        this.protocol = protocol;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public String getCaFilePath() {
        return caFilePath;
    }

    public void setCaFilePath(String caFilePath) {
        this.caFilePath = caFilePath;
    }

    public String getClientCrtFilePath() {
        return clientCrtFilePath;
    }

    public void setClientCrtFilePath(String clientCrtFilePath) {
        this.clientCrtFilePath = clientCrtFilePath;
    }

    public String getClientKeyFilePath() {
        return clientKeyFilePath;
    }

    public void setClientKeyFilePath(String clientKeyFilePath) {
        this.clientKeyFilePath = clientKeyFilePath;
    }

    /**
     * to use a self-signed certificate for TLS/SSL connections
     * use org.eclipse.paho.client.mqttv3.MqttConnectOptions.options.setSocketFactory(socketFactory);
     * extracted from: https://www.emqx.com/en/blog/how-to-use-mqtt-in-java
     * @param caCrtFile
     * @param crtFile
     * @param keyFile
     * @param password
     * @return
     * @throws Exception
     */
    public static SSLSocketFactory getSocketFactory(final String caCrtFile,
                                                    final String crtFile, final String keyFile, final String password)
            throws Exception {
        Security.addProvider(new BouncyCastleProvider());

        // load CA certificate
        X509Certificate caCert = null;

        FileInputStream fis = new FileInputStream(caCrtFile);
        BufferedInputStream bis = new BufferedInputStream(fis);
        CertificateFactory cf = CertificateFactory.getInstance("X.509");

        while (bis.available() > 0) {
            caCert = (X509Certificate) cf.generateCertificate(bis);
        }

        // load client certificate
        bis = new BufferedInputStream(new FileInputStream(crtFile));
        X509Certificate cert = null;
        while (bis.available() > 0) {
            cert = (X509Certificate) cf.generateCertificate(bis);
        }

        // load client private key
        PEMParser pemParser = new PEMParser(new FileReader(keyFile));
        Object object = pemParser.readObject();
        JcaPEMKeyConverter converter = new JcaPEMKeyConverter().setProvider("BC");
        KeyPair key = converter.getKeyPair((PEMKeyPair) object);
        pemParser.close();

        // CA certificate is used to authenticate server
        KeyStore caKs = KeyStore.getInstance(KeyStore.getDefaultType());
        caKs.load(null, null);
        caKs.setCertificateEntry("ca-certificate", caCert);
        TrustManagerFactory tmf = TrustManagerFactory.getInstance("X509");
        tmf.init(caKs);

        // client key and certificates are sent to server so it can authenticate
        KeyStore ks = KeyStore.getInstance(KeyStore.getDefaultType());
        ks.load(null, null);
        ks.setCertificateEntry("certificate", cert);
        ks.setKeyEntry("private-key", key.getPrivate(), password.toCharArray(),
                new java.security.cert.Certificate[]{cert});
        KeyManagerFactory kmf = KeyManagerFactory.getInstance(KeyManagerFactory
                .getDefaultAlgorithm());
        kmf.init(ks, password.toCharArray());

        // finally, create SSL socket factory
        SSLContext context = SSLContext.getInstance("TLSv1.2");
        context.init(kmf.getKeyManagers(), tmf.getTrustManagers(), null);

        return context.getSocketFactory();
    }
}
