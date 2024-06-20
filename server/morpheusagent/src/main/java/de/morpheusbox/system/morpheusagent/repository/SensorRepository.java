package de.morpheusbox.system.morpheusagent.repository;

import de.morpheusbox.system.morpheusagent.repository.entities.Sensor;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SensorRepository extends JpaRepository<Sensor,Long> {

    @Query("select s from Sensor s where s.registeredDevice.id=:deviceId")
    List<Sensor> findAllByDevice(Long deviceId,Sort t);

    @Query("select s from Sensor s where s.name=:name and s.registeredDevice.id=:deviceId")
    Optional<Sensor> findByNameAndDevice(String name,Long deviceId);

    @Query("select s from Sensor s where s.uuid=:uuid")
    Optional<Sensor> findByUUID(String uuid);

    @Modifying
    @Transactional
    @Query("delete from Sensor s where s.id = :id")
    Integer deleteSensorById(Long id);
}
