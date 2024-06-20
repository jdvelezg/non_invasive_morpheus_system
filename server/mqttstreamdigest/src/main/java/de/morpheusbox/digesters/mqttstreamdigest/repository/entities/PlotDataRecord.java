package de.morpheusbox.digesters.mqttstreamdigest.repository.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Embeddable;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Embeddable
public class PlotDataRecord {

    private String sensor;
    private LocalDateTime time;
    private Double signal;
    private String label;

    /**
     * Contructor
     */
    public PlotDataRecord() {
    }

    /**
     *
     * @param sensor sensor name
     * @param time timestamp
     * @param signal signal recorded
     * @param label label of data
     */
    public PlotDataRecord(String sensor, LocalDateTime time, Double signal, String label) {
        this.sensor = sensor;
        this.time = time;
        this.signal = signal;
        this.label = label;
    }

    /**
     * Constructor
     * @param label label of Plot
     */
    public PlotDataRecord(String label) {
        this.label = label;
    }

    public String getSensor() {
        return sensor;
    }

    public void setSensor(String sensor) {
        this.sensor = sensor;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public Double getSignal() {
        return signal;
    }

    public void setSignal(Double signal) {
        this.signal = signal;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    @JsonIgnore
    public static String csvHeaderLine(){
        return "SENSOR;TIMESTAMP;SIGNAL;LABEL\n";
    }

    /**
     * header: Sensor;timestamp;
     * @return cvs values
     */
    @JsonIgnore
    public String toCSVString(){
        Long timestamp = this.time.toInstant(ZoneOffset.UTC).toEpochMilli();

        return this.sensor +";"+
                Long.toString(timestamp)+";"+
                Double.toString(this.signal)+";"+
                this.label+"\n";
    }
}
