package Academic.performance.Coding.comrades.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Academic.performance.Coding.comrades.Entity.Student;

import Academic.performance.Coding.comrades.Repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	StudentRepository studentRepo;
	
	 public String saveSignUp(Student student)   //register student
	  {
		 studentRepo.save(student);
		  return "Thanks for signUp";
	  }
	 
	 public Optional<Student> getStudent(String emailid) //login of student and also get particular student
		{
			return studentRepo.findById(emailid);
		}
	 public Iterable<Student> read()   //get all student details
	 {
		 return studentRepo.findAll();
	 }
	 public void resetPassword(Student student) //reset password
		{
			studentRepo.save(student);
			System.out.println("Password Changed Successfully");
		}
	 public void deleteStudent(String emailid)   //remove student
	 {
		 studentRepo.deleteById(emailid);
	 }


}
