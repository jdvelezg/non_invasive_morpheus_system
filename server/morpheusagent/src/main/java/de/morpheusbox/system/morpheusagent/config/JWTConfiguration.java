package de.morpheusbox.system.morpheusagent.config;

import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.security.Key;

@Configuration
@ConfigurationProperties(prefix = "de.morpheusbox.agent.jwt")
public class JWTConfiguration {
    /**
     *  encryption wordkey
     */
    @Value("FF8536F6DD487C2247F70087D5D99CBB01D349261B6FC6F33268818B417B412D")
    private String base;
    /**
     * token expiration (in hours)
     */
    @Value("1")
    private int expire;
    /**
     * True to allow new authorizations
     */
    @Value("true")
    private boolean newAllowed;

    /**
     * Constructor
     */
    public JWTConfiguration() {
    }

    public Key getBase() {

        byte[] keyBytes = Decoders.BASE64.decode(this.base);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public void setBase(String base) {
        this.base = base;
    }

    /**
     * Set the expiration time in Hours
     * if zero, default of 100 years is set
     * @param expire
     */
    public void setExpire(int expire) {
        if(this.expire < 1){
            //if no expire set, default will be 100 years
            this.expire = 24 * 365 * 100;
        }else
            this.expire = expire;
    }

    /**
     * @return expiration time for the authentication token in seconds
     */
    public int getExpire() {
        return expire * 60 * 60;
    }

    public boolean isNewAllowed() {
        return newAllowed;
    }
}
