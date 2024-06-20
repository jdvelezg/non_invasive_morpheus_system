package de.morpheusbox.system.morpheusagent.repository;

import de.morpheusbox.system.morpheusagent.repository.dtos.broker.DataRecordExch;
import de.morpheusbox.system.morpheusagent.repository.entities.DataRecord;
import de.morpheusbox.system.morpheusagent.repository.entities.PlotDataRecord;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import de.morpheusbox.system.morpheusagent.repository.dtos.device.DataRecordDTO;

@Repository
public interface DataRecordRepository extends JpaRepository<DataRecord,Long> {

    @Query("select d from DataRecord d where d.uuid = :uuid")
    Optional<DataRecord> findByUUID(String uuid);

    @Query("select new de.morpheusbox.system.morpheusagent.repository.dtos.device.DataRecordDTO(d) from DataRecord d where d.recording.uuid = :recordingUUID")
    List<DataRecordDTO> getAllByRecordingUUID(String recordingUUID);

    @Query("select new de.morpheusbox.system.morpheusagent.repository.dtos.device.DataRecordDTO(d) from DataRecord d where d.recording.id = :recordingID")
    List<DataRecordDTO> getAllByRecordingID(Long recordingID);

    //de.morpheusbox.system.morpheusagent.repository.dtos.broker
    @Query("select new de.morpheusbox.system.morpheusagent.repository.dtos.broker.DataRecordExch(d) from DataRecord d where d.recording.id = :recordingID")
    List<DataRecordExch> getAllExchangeByRecordingID(Long recordingID);

    @Query("select d.measurement from DataRecord d where d.recording.id = :recordingID")
    List<PlotDataRecord> getAllPlotableByRecordingID(Long recordingID);

    @Modifying
    @Transactional
    @Query("delete from DataRecord d where d.recording.id = :id")
    Integer deleteDataRecordByRecordingId(Long id);

    @Modifying
    @Transactional
    @Query("delete from DataRecord d where d.sensor.id = :sensorId")
    Integer deleteDataRecordBySensorId(Long sensorId);
}
