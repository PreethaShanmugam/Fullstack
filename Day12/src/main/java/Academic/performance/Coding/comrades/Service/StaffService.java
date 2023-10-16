package Academic.performance.Coding.comrades.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Academic.performance.Coding.comrades.Entity.Staff;

import Academic.performance.Coding.comrades.Repository.StaffRepository;
@Service
public class StaffService {
	
	@Autowired
	StaffRepository staffRepo;
	
	 public String saveSignUp(Staff staff)
	  {
		  staffRepo.save(staff);
		  return "Thanks for signUp";
	  }
	 
	 public Optional<Staff> getStaff(String emailid)
		{
			return staffRepo.findById(emailid);
		}
	 public Iterable<Staff> read()
	 {
		 return staffRepo.findAll();
	 }
	 public void resetPassword(Staff staff)
		{
			staffRepo.save(staff);
			System.out.println("Password Changed Successfully");
		}
	 public void deleteStaff(String emailid)
	 {
		 staffRepo.deleteById(emailid);
	 }

}
