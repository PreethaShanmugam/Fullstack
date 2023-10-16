package Academic.performance.Coding.comrades.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Academic.performance.Coding.comrades.Entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {
	

}
