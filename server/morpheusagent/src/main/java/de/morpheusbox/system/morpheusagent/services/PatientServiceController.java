package de.morpheusbox.system.morpheusagent.services;

import de.morpheusbox.system.morpheusagent.repository.RegisteredPatientRepository;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.PatientDTO;
import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredDevice;
import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredPatient;
import jakarta.annotation.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.logging.Logger;

@Service
public class PatientServiceController {

    private static final Logger LOGGER = Logger.getLogger(DevicesServiceController.class.getName());
    @Autowired
    private RegisteredPatientRepository registeredPatientRepository;

    /**
     * Constructor
     */
    public PatientServiceController() {
    }

    /**
     * List the information of patients registered in the system
     * @return
     */
    public List<RegisteredPatient> listPatientsInfo(){
        List<RegisteredPatient> patients = this.registeredPatientRepository.findAll();
        return patients;
    }

    /**
     *
     * @param uuid
     * @return the patient with uuid
     */
    public @Nullable PatientDTO getPatientInfo(String uuid){
        Optional<RegisteredPatient> option = registeredPatientRepository.findByUUID(uuid);
        if(!option.isPresent())
            return null;
        RegisteredPatient patient = option.get();
        PatientDTO patientDTO = new PatientDTO(patient);
        return patientDTO;
    }

    /**
     * Creates a new Patient
     * @param uuid reference of the patient
     * @return saved patient
     */
    public RegisteredPatient addNewPatient(String uuid){
        //Checks if already stored
        Optional<RegisteredPatient> patientOption = registeredPatientRepository.findByUUID(uuid);
        RegisteredPatient patient = new RegisteredPatient();
        if(patientOption.isPresent()){
            patient = patientOption.get();
        }else{
            patient.setUuid(uuid);
        }
        patient = registeredPatientRepository.save(patient);

        return patient;
    }

    /**
     *
     * @param patientDTO
     * @return
     */
    public PatientDTO addNewPatient(PatientDTO patientDTO){
        //Checks if already stored
        String uuid = patientDTO.getUuid();
        Optional<RegisteredPatient> patientOption = registeredPatientRepository.findByUUID(uuid);
        RegisteredPatient patient = patientDTO.getPatient();
        if(patientOption.isPresent()){
            Long id = patientOption.get().getId();
            patient.setId(id);
        }
        patient = registeredPatientRepository.save(patient);
        patientDTO = new PatientDTO(patient);
        return patientDTO;
    }

    public RegisteredPatient addNewPatient(RegisteredPatient patient){
        //Checks if already stored
        String uuid = patient.getUuid();
        if(uuid == null || uuid.length()<30){
            uuid = UUID.randomUUID().toString();
            patient.setUuid(uuid);
        }else{
            Optional<RegisteredPatient> patientOption = registeredPatientRepository.findByUUID(uuid);
            if(patientOption.isPresent()){
                Long id = patientOption.get().getId();
                patient.setId(id);
            }
        }

        patient = registeredPatientRepository.save(patient);
        return patient;
    }

    /**
     * Deletes a patient
     * @param uuid reference to the patient
     */
    public void deletePatient(String uuid){
        //Checks if already stored
        Optional<RegisteredPatient> patientOption = registeredPatientRepository.findByUUID(uuid);
        if(patientOption.isPresent())
            registeredPatientRepository.delete(patientOption.get());
    }
}
