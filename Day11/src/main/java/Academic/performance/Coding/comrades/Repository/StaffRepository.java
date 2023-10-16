package Academic.performance.Coding.comrades.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Academic.performance.Coding.comrades.Entity.Staff;

@Repository
public interface StaffRepository extends JpaRepository<Staff, String> {

}
