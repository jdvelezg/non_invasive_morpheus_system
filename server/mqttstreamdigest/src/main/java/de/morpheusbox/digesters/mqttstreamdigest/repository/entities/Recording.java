package de.morpheusbox.digesters.mqttstreamdigest.repository.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SourceType;

import java.time.LocalDateTime;

@Entity
@Table(name = Recording.TABLE_NAME)
public class Recording {

    public static final String TABLE_NAME= "TMP_MQTTSTREAM_Recording";
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(unique = true)
    private String uuid;
    private boolean isActive;
    @Column(name = "ddate", nullable = false, updatable = false)
    @CreationTimestamp(source = SourceType.DB)
    private LocalDateTime creationTime;


    /**
     * Constructor
     */
    public Recording() {
    }

    /**
     * Constructor
     * @param uuid
     */
    public Recording(String uuid) {
        this.uuid = uuid;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String deviceUuid) {
        this.uuid = deviceUuid;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
