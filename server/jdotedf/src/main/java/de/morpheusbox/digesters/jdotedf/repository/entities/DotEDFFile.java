package de.morpheusbox.digesters.jdotedf.repository.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class DotEDFFile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(unique=true)
    private String uuid;
    private String name;
    private String recordingUUID;
    private LocalDateTime uploadDate;

    /**
     * Constructor
     */
    public DotEDFFile() {
    }

    public DotEDFFile(String name, String recordingUUID) {
        this.name = name;
        this.recordingUUID = recordingUUID;
    }

    /**
     * Generates a random UUID and set in field uuid as String
     */
    public void setGeneratedRandomUUID(){
        this.uuid = UUID.randomUUID().toString();
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

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRecordingUUID() {
        return recordingUUID;
    }

    public void setRecordingUUID(String recordingUUID) {
        this.recordingUUID = recordingUUID;
    }

    public LocalDateTime getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(LocalDateTime uploadDate) {
        this.uploadDate = uploadDate;
    }
}
