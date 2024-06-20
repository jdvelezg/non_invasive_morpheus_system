package de.morpheusbox.system.morpheusagent.repository;

import de.morpheusbox.system.morpheusagent.repository.entities.RegisteredDevice;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RegisteredDeviceRepository extends JpaRepository<RegisteredDevice,Long> {

    @Query("select d from RegisteredDevice d")
    List<RegisteredDevice> findAllRegisteredDevices(Sort s);

    @Query("select d from RegisteredDevice d where d.name=:reference")
    List<RegisteredDevice> findAllByName(String reference);

    @Query("select d from RegisteredDevice d where d.uuid=:uuid")
    Optional<RegisteredDevice> findByUUID(String uuid);

    @Modifying
    @Transactional
    @Query("delete from RegisteredDevice d where d.id = :id")
    Integer deleteRegisteredDeviceById(Long id);
}
