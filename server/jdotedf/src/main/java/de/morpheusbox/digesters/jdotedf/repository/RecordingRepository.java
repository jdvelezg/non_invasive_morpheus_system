package de.morpheusbox.digesters.jdotedf.repository;

import de.morpheusbox.digesters.jdotedf.repository.entities.Recording;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecordingRepository extends JpaRepository<Recording,Long> {

    @Query("select r from Recording r where r.uuid = :uuid")
    Optional<Recording> findByUuid(String uuid);
}
