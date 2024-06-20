package de.morpheusbox.system.morpheusagent.webservices;


import de.morpheusbox.system.morpheusagent.repository.dtos.device.AgentResponse;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.PatientDTO;
import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredPatient;
import de.morpheusbox.system.morpheusagent.services.PatientServiceController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.NonTransientDataAccessException;
import org.springframework.dao.RecoverableDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.logging.Logger;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/morpheusagent/users")
public class PatientWebController {

    private static final Logger LOGGER = Logger.getLogger(PatientWebController.class.getName());
    @Autowired
    private PatientServiceController patientServiceController;

    /**
     *
     * @param auth
     * @param patient
     * @return
     */
    @PostMapping(path = "/add")
    public ResponseEntity<AgentResponse<PatientDTO>> addPatientInfo(@RequestHeader(required = false,name = "device") Optional<String> auth,
                                                                    @RequestBody PatientDTO patient){

        try{
            AgentResponse<PatientDTO> response = new AgentResponse<PatientDTO>();
            if(auth.isPresent()){

            }
            patient = patientServiceController.addNewPatient(patient);
            response.setResponse(patient);

            return ResponseEntity.ok(response);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());

        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

    /**
     *
     * @param patient
     * @return
     */
    @PostMapping(path = "/patient")
    public ResponseEntity<AgentResponse<RegisteredPatient>> postPatientInfo(@RequestBody RegisteredPatient patient){

        try{
            AgentResponse<RegisteredPatient> response = new AgentResponse<RegisteredPatient>();

            patient = patientServiceController.addNewPatient(patient);
            response.setResponse(patient);
            response.setMessage("Patient Saved");

            return ResponseEntity.ok(response);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());

        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

    /**
     * Updates/creates a user with the uuid
     * TODO this must be changed to register app users as patients
     * @param uuid
     * @return
     */
    @PutMapping(path = "/add/{uuid}")
    public ResponseEntity<AgentResponse<RegisteredPatient>> addPatient(@RequestHeader(required = false,name = "device") Optional<String> auth,
                                                                       @PathVariable(name = "uuid") String uuid){

        try{
            AgentResponse<RegisteredPatient> response = new AgentResponse<>();
            RegisteredPatient patient = patientServiceController.addNewPatient(uuid);
            response.setResponse(patient);

            return ResponseEntity.ok(response);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());

        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

    @GetMapping(path = "/patients")
    public ResponseEntity<AgentResponse<List>> showPatient(){
        try{
            AgentResponse response = new AgentResponse<RegisteredPatient>();
            List<RegisteredPatient> patients = patientServiceController.listPatientsInfo();
            response.setResponse(patients);

            Integer count = patients.size();
            response.setMessage(count.toString().concat(" Patients registered"));


            return ResponseEntity.ok(response);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());

        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

    @GetMapping(path = "patient/{uuid}")
    public ResponseEntity<PatientDTO> showPatient(@PathVariable(name = "uuid") String uuid){
        try{
            PatientDTO patient = patientServiceController.getPatientInfo(uuid);
            if(patient == null){
                patient = new PatientDTO();
            }
            return ResponseEntity.ok(patient);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());

        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

    /**
     * Deletes a user using the uuid
     * @param uuid
     * @return
     */
    @DeleteMapping(path = "/delete/{uuid}")
    public ResponseEntity<AgentResponse<String>> deletePatient(@PathVariable(name = "uuid") String uuid){

        try{
            AgentResponse<String> response = new AgentResponse<>();
            patientServiceController.deletePatient(uuid);
            response.setMessage("Patient -"+uuid+"- deleted");

            return ResponseEntity.ok(response);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }

    }

    /**
     * Generates a new random UUID
     * @return random uuid as plain text
     */
    @GetMapping(path = "/randomuuid")
    public ResponseEntity<String> createNewPatient(){

        try{
            String token = UUID.randomUUID().toString();

            return ResponseEntity.ok(token);

        } catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());


        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }

    }


}
