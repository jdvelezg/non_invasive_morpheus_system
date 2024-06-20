package de.morpheusbox.digesters.jdotedf.repository;

import de.morpheusbox.digesters.jdotedf.repository.entities.DataRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRecordRepository extends JpaRepository<DataRecord,Long> {

}
