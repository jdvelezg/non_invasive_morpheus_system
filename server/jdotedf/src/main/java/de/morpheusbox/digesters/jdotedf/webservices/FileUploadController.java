package de.morpheusbox.digesters.jdotedf.webservices;

import de.morpheusbox.digesters.jdotedf.edflib.EDFException;
import de.morpheusbox.digesters.jdotedf.repository.DotEDFFileRepository;
import de.morpheusbox.digesters.jdotedf.repository.entities.DotEDFFile;
import de.morpheusbox.digesters.jdotedf.services.FileDiggestService;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.*;
import java.time.LocalDateTime;
import java.util.logging.Logger;
import java.util.zip.GZIPInputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

@RestController
@RequestMapping(path = "/edf")
public class FileUploadController {
    private static final Logger LOGGER = Logger.getLogger(FileUploadController.class.getName());

    @Autowired
    private FileDiggestService fileDiggestService;
    @Autowired
    private DotEDFFileRepository dotEDFFileRepository;

    /**
     * Accepts a EDF file and process it to store the Heart Rate and Respiration Rate recordings in the database
     * @param recording_id the recording associated with the EDF file
     * @param file
     * @return Status of the process
     * @throws Exception 
     */
    @PostMapping(path = "/upload", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<String> handleUpload(@RequestParam("recording_id") String recording_id,
                                               @RequestParam("file") MultipartFile file) throws Exception {

        String recordingUUID = recording_id;
        String name = file.getOriginalFilename();

        //saves info of EDF file
        DotEDFFile dotEDFFile = new DotEDFFile(name,recordingUUID);
        dotEDFFile.setGeneratedRandomUUID();
        dotEDFFile.setUploadDate(LocalDateTime.now());
        dotEDFFileRepository.save(dotEDFFile);

        String outputFile = "digest_tmp.edf";
        byte[] buffer = new byte[1024];
        try{
            InputStream fileInputStream = file.getInputStream();
            FileOutputStream fos = new FileOutputStream(outputFile);
            if(name.contains(".gz")){
                GZIPInputStream gzis = new GZIPInputStream(fileInputStream);
                int len;
                while((len = gzis.read(buffer)) != -1){
                    fos.write(buffer, 0, len);
                }
                //close resources
                fos.close();
                gzis.close();
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
            }else if(name.contains(".edf") || name.contains(".bdf")){
                OutputStream outStream = new FileOutputStream(outputFile);
                int len;
                while((len = fileInputStream.read(buffer)) != -1){
                    outStream.write(buffer, 0, len);
                }
                IOUtils.closeQuietly(outStream);
            }else {
                throw new EDFException(1,"No a valid format to process");
            }

            fileDiggestService.edfDataExtraction(recordingUUID,outputFile);

            return ResponseEntity.ok("Server is digesting the file...");

        }catch( java.io.FileNotFoundException exc){
            LOGGER.warning("FileNotFoundException: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }catch(EDFException exc){
            LOGGER.warning("InconsistentFileFormat: " + exc.toString());
            throw new ResponseStatusException(//400
                    HttpStatus.BAD_REQUEST, exc.toString());
        }
    }

}
