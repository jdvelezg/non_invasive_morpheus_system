package de.morpheusbox.digesters.jdotedf.repository.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Embeddable;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Embeddable
public class PlotDataRecord {
    private String transducer;
    private LocalDateTime time;
    private Double signal;
    private String label;

    public PlotDataRecord() {
    }

    /**
     *
     * @param transducer transducer name
     * @param time timestamp
     * @param signal signal recorded
     * @param label label of data (RIP Tho/Abd, ECG)
     */
    public PlotDataRecord(String transducer, LocalDateTime time, Double signal, String label) {
        this.transducer = transducer;
        this.time = time;
        this.signal = signal;
        this.label = label;
    }

    public String getTransducer() {
        return transducer;
    }

    public void setTransducer(String transducer) {
        this.transducer = transducer;
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
        return "TRANSDUCER;TIMESTAMP;SIGNAL;LABEL\n";
    }
    /**
     * header: Sensor;timestamp;
     * @return cvs values
     */
    @JsonIgnore
    public String toCSVString(){
        Long timestamp = this.time.toInstant(ZoneOffset.UTC).toEpochMilli();

        return this.transducer +";"+
                Long.toString(timestamp)+";"+
                Double.toString(this.signal)+";"+
                this.label+"\n";
    }
}
