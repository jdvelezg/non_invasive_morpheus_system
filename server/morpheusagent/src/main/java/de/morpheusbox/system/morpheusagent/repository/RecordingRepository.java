package de.morpheusbox.system.morpheusagent.repository;

import de.morpheusbox.system.morpheusagent.repository.dtos.broker.RecordingExch;
import de.morpheusbox.system.morpheusagent.repository.entities.Recording;
import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredDevice;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RecordingRepository extends JpaRepository<Recording,Long> {

    @Query("select r from Recording r where r.uuid = :uuid")
    Optional<Recording> findByUuid(String uuid);

    @Query("select de.morpheusbox.system.morpheusagent.repository.dtos.broker.RecordingExch(r) from Recording r where r.uuid = :uuid")
    Optional<RecordingExch> findExchByUuid(String uuid);

    @Query("select r from Recording r where r.registeredDevice.uuid = :deviceUUID")
    List<Recording> findAllByRegisteredDevice(String deviceUUID);

    @Modifying
    @Transactional
    @Query("delete from Recording r where r.patient.id = :id")
    Integer deleteRecordingsByPatientId(Long id);

    @Modifying
    @Transactional
    @Query("delete from Recording r where r.registeredDevice.id = :id")
    Integer deleteRecordingsByDeviceId(Long id);

    @Query("select r from Recording r where r.patient.id=:id")
    List<RegisteredDevice> findAllByPatientId(Long id);
}
