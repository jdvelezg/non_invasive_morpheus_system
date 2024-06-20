package de.morpheusbox.system.morpheusagent.repository;

import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredPatient;
import de.morpheusbox.system.morpheusagent.repository.entities.Sensor;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RegisteredPatientRepository extends JpaRepository<RegisteredPatient, Long> {

    @Query("select p from RegisteredPatient p where p.uuid=:uuid")
    Optional<RegisteredPatient> findByUUID(String uuid);

    @Query("select p from RegisteredPatient p where p.name='EMPTY'")
    Optional<RegisteredPatient> findEMPTYpatient();

    @Query("select p from RegisteredPatient p where p.name=:name")
    Optional<RegisteredPatient> findByName(String name);

    @Modifying
    @Transactional
    @Query("delete from RegisteredPatient p where p.id = :id")
    Integer deletePatientById(Long id);

}
