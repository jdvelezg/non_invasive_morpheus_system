package de.morpheusbox.system.morpheusagent.utils;

import de.morpheusbox.system.morpheusagent.config.JWTConfiguration;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;

import java.io.*;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JWTUtil implements java.io.Serializable {

    private static final long serialVersionUID =0L;

    @Autowired
    private JWTConfiguration jwtConfig;

    /**
     * Constructor
     */
    public JWTUtil() {
    }

    public static LocalDateTime getLocalDateFromUnixTimeAsDouble(double timestamp){
        Double time = (Double) timestamp;
        long seconds = time.longValue();
        Double nanosD = (time-seconds)*1000000000;
        int nanos = nanosD.intValue();
        LocalDateTime date = LocalDateTime.ofEpochSecond(seconds,nanos, ZoneOffset.UTC);
        return date;
    }

    /**
     * Extracts field stored in the token
     * @param token
     * @param claimsResolver
     * @param <T>
     * @return
     */
    private <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    /**
     *
     * @param token
     * @return fields stored in the token
     */
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(jwtConfig.getBase()).parseClaimsJws(token).getBody();
    }

    /**
     *
     * @param token
     * @return True when the token is expired
     */
    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        final Date now = new Date();
        return expiration.before(now);
    }

    /**
     * Creaters a new token with the claims specified
     * @param claims
     * @param appCredential
     * @return JWT token
     */
    private String doGenerateToken(Map<String, Object> claims, String appCredential) {

        String token = Jwts.builder()
                .setClaims(claims)
                .setSubject(appCredential)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwtConfig.getExpire() * 1000))
                .signWith(jwtConfig.getBase()).compact();

        return token;
    }

    /**
     * Extrae la fecha de expiracion del token
     * @param token
     * @return
     */
    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    /**
     * Extrae el usuario del token
     * @param token
     * @return
     */
    public String getUUIDFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    /**
     * Generates a token JWT
     * @param reference MAC of the device
     * @return
     */
    public String generateToken(String reference) {
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, reference);
    }


    /**
     * True when token JWT is valid
     * @param token
     * @return
     */
    public Boolean validateToken(String token) {
        try {
            boolean expired = isTokenExpired(token);
            return !expired;
        }catch(ExpiredJwtException exc){
            return false;
        }
    }

    /**
     * For Security purposes.
     * If False no new devices should be allowed in the system.
     * @return configuration setting about new devices. True to allow register new devices.
     */
    public boolean allowRegisterNewDevices(){
        return jwtConfig.isNewAllowed();
    }


    public static byte[] zipFile(File fileToZip) throws IOException{
        ByteArrayOutputStream bytesOs = new ByteArrayOutputStream();
        ZipOutputStream zipOut = new ZipOutputStream(bytesOs);

        FileInputStream fis = new FileInputStream(fileToZip);
        ZipEntry zipEntry = new ZipEntry(fileToZip.getName());
        zipOut.putNextEntry(zipEntry);

        byte[] bytes = new byte[1024];
        int length;
        while((length = fis.read(bytes)) >= 0) {
            zipOut.write(bytes, 0, length);
        }
        zipOut.close();
        fis.close();
        bytesOs.close();

        return bytesOs.toByteArray();
    }


}
