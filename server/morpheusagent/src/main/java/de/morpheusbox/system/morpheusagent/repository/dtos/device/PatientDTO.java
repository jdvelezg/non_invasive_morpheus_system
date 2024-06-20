package de.morpheusbox.system.morpheusagent.repository.dtos.device;

import com.fasterxml.jackson.annotation.JsonIgnore;
import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredPatient;

public class PatientDTO {

    private RegisteredPatient patient;
    /**
     * Constructor
     */
    public PatientDTO() {
        this.patient = new RegisteredPatient();
    }

    /**
     * Constructor
     * @param patient
     */
    public PatientDTO(RegisteredPatient patient) {
        this.patient = patient;
    }

    @JsonIgnore
    public RegisteredPatient getPatient() {
        return patient;
    }

    @JsonIgnore
    public long getId() {
        return this.patient.getId();
    }

    public void setId(long id) {
        this.patient.setId(id);
    }

    public String getUuid() {
        return this.patient.getUuid();
    }

    public void setUuid(String uuid) {
        if(uuid != null)
            if(uuid.compareTo("")!=0)
                this.patient.setUuid(uuid);
    }

    public String getName() {
        return this.patient.getAlias();
    }

    public void setName(String name) {
        this.patient.setAlias(name);
    }


}
