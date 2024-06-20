package de.morpheusbox.digesters.mqttstreamdigest.repository;

import de.morpheusbox.digesters.mqttstreamdigest.repository.entities.DataRecord;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface DataRecordRepository extends JpaRepository<DataRecord,Long> {
}
