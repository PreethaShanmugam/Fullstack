package Academic.performance.Coding.comrades.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import Academic.performance.Coding.comrades.Entity.Staff;
import Academic.performance.Coding.comrades.Service.StaffService;



@RestController
@RequestMapping("/staff")
public class Staffcontrol {
	 
	
	@Autowired
	StaffService staffService;
	
	@PostMapping("/signupStaff")
	 public String singUp(@RequestBody Staff staff)
	  {
		   return staffService.saveSignUp(staff);
		  
	  }
	@GetMapping("/getstaff/{emailid}")
	public Optional<Staff> getStaffIn(@PathVariable String emailid)
	{
		return staffService.getStaff(emailid);
	}
	
	
	@GetMapping("/getAllstaff")
	public Iterable<Staff> getStaff()
	{
		return staffService.read();
	}
	
	@PutMapping("/resetpasswordStaff")
	public void changePassword(@RequestBody Staff staff)
	{
		staffService.resetPassword(staff);
	}
	@DeleteMapping("/deleteStaff/{emailid}")
	public void remove(@PathVariable String emailid)
	{
		staffService.deleteStaff(emailid);
	}
}