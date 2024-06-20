package de.morpheusbox.digesters.mqttstreamdigest.repository;

import de.morpheusbox.digesters.mqttstreamdigest.repository.entities.Recording;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DeviceRepository extends JpaRepository<Recording,Long> {

    @Query("select d from Recording d where d.uuid=:uuid")
    Optional<Recording> findByUUID(String uuid);
}
