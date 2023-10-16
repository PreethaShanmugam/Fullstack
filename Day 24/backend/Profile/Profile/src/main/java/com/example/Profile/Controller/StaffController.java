package com.example.Profile.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.Profile.Service.StaffService;
import com.example.Profile.Entity.StaffEntity;



@CrossOrigin
@RestController
@RequestMapping("/staff")
public class StaffController {
	 
	
	@Autowired
	StaffService staffService;
	
	@PostMapping("/staffpost")
	 public String singUp(@RequestBody StaffEntity staff)
	  {
		   return staffService.saveSignUp(staff);
		  
	  }
	@GetMapping("/getstaff/{emailid}")
	public Optional<StaffEntity> getStaffIn(@PathVariable String emailid)
	{
		return staffService.getStaff(emailid);
	}
	
	
	@GetMapping("/getAllstaff")
	public Iterable<StaffEntity> getStaff()
	{
		return staffService.read();
	}
	
	@PutMapping("/resetpasswordStaff")
	public void changePassword(@RequestBody StaffEntity staff)
	{
		staffService.resetPassword(staff);
	}
	@DeleteMapping("/deleteStaff/{emailid}")
	public void remove(@PathVariable String emailid)
	{
		staffService.deleteStaff(emailid);
	}
}