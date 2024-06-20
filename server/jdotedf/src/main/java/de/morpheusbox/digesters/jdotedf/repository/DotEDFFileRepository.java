package de.morpheusbox.digesters.jdotedf.repository;

import de.morpheusbox.digesters.jdotedf.repository.entities.DotEDFFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DotEDFFileRepository extends JpaRepository<DotEDFFile,Long> {
}
