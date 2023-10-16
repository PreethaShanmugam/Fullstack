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


import Academic.performance.Coding.comrades.Entity.Student;
import Academic.performance.Coding.comrades.Service.StudentService;


@RestController
@RequestMapping("/student")
public class Studentcontrol {
	
	@Autowired
	StudentService studentService;
	
	@PostMapping("/signupStudent")
	 public String singUp(@RequestBody Student student)
	  {
		   return studentService.saveSignUp(student);
		  
	  }
	@GetMapping("/getstudent/{emailid}")
	public Optional<Student> getStudentIn(@PathVariable String emailid)
	{
		return studentService.getStudent(emailid);
	}
	@GetMapping("/getAllstudent")
	public Iterable<Student> getStudent()
	{
		return studentService.read();
	}
	@PutMapping("/resetpasswordStudent")
	public void changePassword(@RequestBody Student student)
	{
		studentService.resetPassword(student);
	}
	@DeleteMapping("/deleteStudent/{emailid}")
	public void remove(@PathVariable String emailid)
	{
		studentService.deleteStudent(emailid);
	}
	

}
