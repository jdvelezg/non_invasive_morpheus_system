package de.morpheusbox.system.morpheusagent.repository;

import de.morpheusbox.system.morpheusagent.repository.dtos.device.DeviceDTO;
import de.morpheusbox.system.morpheusagent.repository.entities.PatientDevice;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PatientDeviceRepository extends JpaRepository<PatientDevice, Long> {

    @Query("select d from PatientDevice d where d.device.id = :deviceId and d.isActive = :activeState")
    Optional<PatientDevice> findActiveByDeviceId(Long deviceId, boolean activeState);

    @Query("select d from PatientDevice d where d.device.id =:deviceId and d.patient.id =:patientId")
    Optional<PatientDevice> findActiveByPatientIdAndDeviceId(Long deviceId, Long patientId);

    @Query("select new de.morpheusbox.system.morpheusagent.repository.dtos.device.DeviceDTO(d) from PatientDevice d where d.isActive =:activeStatus")
    List<DeviceDTO> findAllByActiveStatusAsDto(Boolean activeStatus);

    @Modifying
    @Transactional
    @Query("update PatientDevice d set d.isActive = :update where d.id = :deviceId")
    Integer setActiveByDeviceId(Long deviceId, Boolean update);

    @Modifying
    @Transactional
    @Query("delete from PatientDevice d where d.id = :id")
    Integer deleteByDeviceId(Long id);

}
