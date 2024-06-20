package de.morpheusbox.system.morpheusagent.webservices;

import de.morpheusbox.system.morpheusagent.repository.dtos.device.AgentResponse;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.DataRecordDTO;
import de.morpheusbox.system.morpheusagent.repository.dtos.device.RecordingDTO;
import de.morpheusbox.system.morpheusagent.repository.entities.DataRecord;
import de.morpheusbox.system.morpheusagent.repository.entities.PlotDataRecord;
import de.morpheusbox.system.morpheusagent.repository.entities.Recording;
import de.morpheusbox.system.morpheusagent.services.RecordingServiceController;
import de.morpheusbox.system.morpheusagent.services.exceptions.InconsistentDataReferenceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.NonTransientDataAccessException;
import org.springframework.dao.RecoverableDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;
import java.util.zip.GZIPInputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/morpheusagent/recordings")
public class RecordingWebController {

    private static final Logger LOGGER = Logger.getLogger(RecordingWebController.class.getName());

    @Autowired
    RecordingServiceController recordingServiceController;

    @GetMapping(path = "/")
    public ResponseEntity<AgentResponse<List<Recording>>> listAllRecordingByDevice(@RequestHeader(name = "device", required = false) Optional<String> auth){
        try{
            AgentResponse<List<Recording>> response = new AgentResponse<>();
            if(auth.isPresent()){
                String authToken = auth.get();
                recordingServiceController.setAuthorizedDeviceFromToken(authToken);
            }
            List<Recording> recordings = recordingServiceController.listAllRecordings();
            response.setResponse(recordings);

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

    @GetMapping(path = "/device/{deviceuuid}")
    public ResponseEntity<AgentResponse<List<Recording>>> listAllRecordingByDevice(@RequestHeader(name = "device", required = false) Optional<String> auth,
                                                                                   @PathVariable(name = "deviceuuid") String deviceUUID){
        try{
            AgentResponse<List<Recording>> response = new AgentResponse<>();
            if(auth.isPresent()){
                String authToken = auth.get();
                recordingServiceController.setAuthorizedDeviceFromToken(authToken);
            }
            List<Recording> recordings = recordingServiceController.listAllRecordingsByDevice(deviceUUID);
            response.setResponse(recordings);

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

    @PostMapping(path = "/sync")
    public ResponseEntity<AgentResponse<RecordingDTO>> syncRecordingData(@RequestHeader(required = false,name = "device") Optional<String> auth,
                                                                         @RequestBody RecordingDTO recordingDTO){
        try{
            AgentResponse<RecordingDTO> response = new AgentResponse<>();
            if(!auth.isPresent()){
                response.setError(true);
                response.setMessage("No authorized for this operation");
                return ResponseEntity.ok(response);
            }
            String authToken = auth.get();
            recordingServiceController.setAuthorizedDeviceFromToken(authToken);
            //saves/updates the recording
            recordingDTO = recordingServiceController.addRecording(recordingDTO);
            response.setResponse(recordingDTO);

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
     * Sync an individual data record
     * @param auth token autorization
     * @param recordingUUID id of the recording
     * @param data datarecord to sync
     * @return sync Datarecord
     */
    @PostMapping(path = "/sync/datarecord/{recuuid}")
    public ResponseEntity<AgentResponse<DataRecordDTO>> syncDataRecord(@RequestHeader(name = "device", required = false) Optional<String> auth,
                                                                       @PathVariable(name = "recuuid") String recordingUUID,
                                                                       @RequestBody DataRecordDTO data){
        try{
            AgentResponse response = new AgentResponse();
            if(auth.isPresent()){
                response.setError(true);
                response.setMessage("No authorized for this operation");
                return ResponseEntity.ok(response);
            }
            String authToken = auth.get();
            recordingServiceController.setAuthorizedDeviceFromToken(authToken);
            Recording recording = recordingServiceController.getRecording(recordingUUID);
            DataRecord dataRecord = recordingServiceController.addRecordingDataRecord(recording,data);
            data = new DataRecordDTO(dataRecord);
            response.setResponse(data);

            return ResponseEntity.ok(response);

        } catch(InconsistentDataReferenceException exc){
            LOGGER.warning("InconsistentDataReferenceException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }catch (NonTransientDataAccessException exc) {
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
     * Add/update a list of datarecords assigned to a recording
     * @param auth device auth
     * @param recordingUUID recording id
     * @param data datarecords
     * @return
     */
    @PostMapping(path = "/sync/datarecordlist/{recuuid}")
    public ResponseEntity<AgentResponse<String>> syncDataRecordList(@RequestHeader(name = "device", required = false) Optional<String> auth,
                                                                           @PathVariable(name = "recuuid") String recordingUUID,
                                                                           @RequestBody List<DataRecordDTO> data){
        try{
            AgentResponse response = new AgentResponse();
            if(auth.isPresent()){
                response.setError(true);
                response.setMessage("No authorized for this operation");
                return ResponseEntity.ok(response);
            }
            String authToken = auth.get();
            recordingServiceController.setAuthorizedDeviceFromToken(authToken);
            List<String> syncElements = new ArrayList();
            for (DataRecordDTO d: data) {
                try{
                    DataRecord dataRecord = recordingServiceController.addDataRecord(d);
                    syncElements.add(dataRecord.getUuid());
                }catch (InconsistentDataReferenceException exc){
                    LOGGER.warning("Failed sync of Datarecord. Associated recording is not present");
                }
            }
            //List of synced elements
            response.setResponse(syncElements);

            return ResponseEntity.ok(response);

        } catch(InconsistentDataReferenceException exc){
            LOGGER.warning("InconsistentDataReferenceException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }catch (NonTransientDataAccessException exc) {
            LOGGER.warning("NonTransientDataAccessException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());

        } catch (RecoverableDataAccessException exc) {
            LOGGER.warning("RecoverableDataAccessException " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }


    @PostMapping(path = "/sync/datarecordfile/{recuuid}", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<AgentResponse<String>> syncDataRecordFile(@RequestHeader(name = "device", required = false) Optional<String> auth,
                                                     @RequestParam("file") MultipartFile file){
        try{

            AgentResponse response = new AgentResponse();
            if(!auth.isPresent()){
                response.setError(true);
                response.setMessage("No authorized for this operation");
                return ResponseEntity.ok(response);
            }
            String authToken = auth.get();
            recordingServiceController.setAuthorizedDeviceFromToken(authToken);

            //Process FIle
            String name = file.getOriginalFilename();
            byte[] buffer = new byte[1024];
            InputStream fileInputStream = file.getInputStream();
            FileOutputStream fos = new FileOutputStream("tmpo.json");
            BufferedReader reader;
            if(name.contains(".gz")){
                GZIPInputStream gzis = new GZIPInputStream(fileInputStream);
                int len;
                while((len = gzis.read(buffer)) != -1){
                    fos.write(buffer, 0, len);
                }
                //close resources
                fos.close();
                gzis.close();
                reader = new BufferedReader(new FileReader("tmpo.json"));
            }else if(name.contains(".zip")){
                ZipInputStream zis = new ZipInputStream(fileInputStream);
                ZipEntry zipEntry = zis.getNextEntry();
                while (zipEntry != null) {
                    if (!zipEntry.isDirectory()) {
                        int len;
                        while ((len = zis.read(buffer)) > 0) {
                            fos.write(buffer, 0, len);
                        }
                        fos.close();
                    }
                    zipEntry = zis.getNextEntry();
                }
                zis.close();
                reader = new BufferedReader(new FileReader("tmpo.json"));
            }else{
                reader = new BufferedReader(new InputStreamReader(fileInputStream, StandardCharsets.UTF_8));
            }
            //process the resultant file in a separate thread
            recordingServiceController.processLargeDataFile(reader);

            response.setMessage("Server is processing data-file");

            return ResponseEntity.ok(response);

        }catch( java.io.FileNotFoundException exc){
            LOGGER.warning("FileNotFoundException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }catch(IOException exc){
            LOGGER.warning("IOException: " + exc.getMessage());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }catch(InconsistentDataReferenceException exc){
            LOGGER.warning("InconsistentDataReferenceException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }catch (NonTransientDataAccessException exc) {
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
     * Add/update a list of datarecords assigned to a recording
     * @param auth device auth
     * @param data datarecords
     * @return A list with the uuid of synced elements
     */
    @PostMapping(path = "/sync/datarecordlist")
    public ResponseEntity<AgentResponse<List>> addDataRecordList(@RequestHeader(name = "device", required = false) Optional<String> auth,
                                                                 @RequestBody List<DataRecordDTO> data){
        try{
            AgentResponse<List> response = new AgentResponse();
            if(!auth.isPresent()){
                response.setError(true);
                response.setMessage("No authorized for this operation");
                return ResponseEntity.ok(response);
            }
            String authToken = auth.get();
            recordingServiceController.setAuthorizedDeviceFromToken(authToken);/**/
            List<String> syncElements = new ArrayList();
            for (DataRecordDTO d: data) {
                try{
                    DataRecord dataRecord = recordingServiceController.addDataRecord(d);
                    syncElements.add(dataRecord.getUuid());
                }catch (InconsistentDataReferenceException exc){
                    LOGGER.warning("Failed sync of Datarecord. Associated recording is not present");
                }
            }
            //List of synced elements
            response.setResponse(syncElements);

            return ResponseEntity.ok(response);

        } catch(InconsistentDataReferenceException exc){
            LOGGER.warning("InconsistentDataReferenceException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }catch (NonTransientDataAccessException exc) {
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
     * Delete data from a recording
     * @param auth authorization token
     * @param uuid recording uuid
     * @return status of procedure
     */
    @DeleteMapping(path = "/delete/{recuuid}")
    public ResponseEntity<AgentResponse<String>> deleteRecordingData(@RequestHeader(required = false,name = "device") Optional<String> auth,
                                                                     @PathVariable(name = "recuuid", required = true) String uuid){
        try{
            AgentResponse<String> response = new AgentResponse<>();
            if(!auth.isPresent()){
                response.setError(true);
                response.setMessage("No authorized for this operation");
                return ResponseEntity.ok(response);
            }
            String authToken = auth.get();
            recordingServiceController.setAuthorizedDeviceFromToken(authToken);
            recordingServiceController.deleteRecording(uuid);


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
     * @param auth autorization token
     * @param uuid recording UUID
     * @return raw data from recording
     */
    @GetMapping(path = "/datarecords/json/{recuuid}")
    public ResponseEntity<AgentResponse<List<PlotDataRecord>>> listDatarecordsByRecording(@RequestHeader(required = false,name = "device") Optional<String> auth,
                                                                     @PathVariable(name = "recuuid", required = true) String uuid){
        try{
            AgentResponse<List<PlotDataRecord>> response = new AgentResponse<>();
            if(!auth.isPresent()){
                response.setError(true);
                response.setMessage("No authorized for this operation");
                return ResponseEntity.ok(response);
            }
            String authToken = auth.get();
            recordingServiceController.setAuthorizedDeviceFromToken(authToken);

            List<PlotDataRecord> records = recordingServiceController.listPlotableDatarecord(uuid);
            String size = Integer.toString( records.size() );
            response.setMessage(size+" raw records retrieved");
            response.setResponse(records);


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

    @GetMapping(path = "/datarecords/zip/raw/{recuuid}")
    public ResponseEntity<?> getZipRawDatarecordsByRecording(@RequestHeader(required = false,name = "device") Optional<String> auth,
                                                             @PathVariable(name = "recuuid", required = true) String uuid){
        try{
            if(auth.isPresent()){
                String authToken = auth.get();
                recordingServiceController.setAuthorizedDeviceFromToken(authToken);
            }

            byte[] zipObject = recordingServiceController.zipRawPlotableDatarecord(uuid);

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .header("content-disposition","inline; filename=raw_"+uuid+".zip")
                    .body(zipObject);

        }catch (IOException exc) {
            LOGGER.warning("IOException: " + exc.getMessage());
            throw new ResponseStatusException(//400
                    HttpStatus.FAILED_DEPENDENCY, exc.toString());

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

    @GetMapping(path = "/datarecords/zip/json/{recuuid}")
    public ResponseEntity<?> getZipJsonRecordingDatarecords(@RequestHeader(required = false,name = "device") Optional<String> auth,
                                                             @PathVariable(name = "recuuid", required = true) String uuid){
        try{
            if(auth.isPresent()){
                String authToken = auth.get();
                recordingServiceController.setAuthorizedDeviceFromToken(authToken);
            }

            byte[] zipObject = recordingServiceController.zipJsonRecordingDatarecord(uuid);

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .header("content-disposition","inline; filename=json_"+uuid+".zip")
                    .body(zipObject);

        }catch (IOException exc) {
            LOGGER.warning("IOException: " + exc.getMessage());
            throw new ResponseStatusException(//400
                    HttpStatus.FAILED_DEPENDENCY, exc.toString());

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
