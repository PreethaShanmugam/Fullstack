package Academic.performance.Coding.comrades.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Academic.performance.Coding.comrades.Entity.Admin;

import Academic.performance.Coding.comrades.Repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	AdminRepository adminRepo;
	
	 public String saveSignUp(Admin admin)
	  {
		  adminRepo.save(admin);
		  return "Thanks for signUp";
	  }
	 
	 public Optional<Admin> getAdmin(String emailid)
		{
			return adminRepo.findById(emailid);
		}
	 public Iterable<Admin> getAdmins()
		{
			return adminRepo.findAll();
		}
	 public void change(Admin admin)
		{
			adminRepo.save(admin);
			System.out.println("Password Changed Successfully");
		}
	 public void delete()
		{
			adminRepo.deleteAll();
		}

}
