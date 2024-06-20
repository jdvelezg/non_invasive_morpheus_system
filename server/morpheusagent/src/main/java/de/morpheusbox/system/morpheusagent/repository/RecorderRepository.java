package de.morpheusbox.system.morpheusagent.repository;

import de.morpheusbox.system.morpheusagent.repository.entities.Recorder;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecorderRepository extends JpaRepository<Recorder,Long> {

    @Query("select r from Recorder r where r.sensor.id = :sensorId")
    Optional<Recorder> findBySensorId(long sensorId);

    @Modifying
    @Transactional
    @Query("delete from Recorder r where r.sensor.id = :sensorId")
    Integer deleteRecorderBySensorId(Long sensorId);
}
