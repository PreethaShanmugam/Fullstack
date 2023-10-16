package com.example.Course.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Course.Entity.CourseEntity;
import com.example.Course.Repository.CourseRepository;

@Service
public class CourseService {
	
	@Autowired
	CourseRepository courseRepo;
	
	 public String saveSignUp(CourseEntity course)
	  {
		  courseRepo.save(course);
		  return "Thanks for signUp";
	  }
	 
	 public Iterable<CourseEntity> read()
	 {
		 return courseRepo.findAll();
	 }
	 public void resetPassword(CourseEntity course)
		{
			courseRepo.save(course);
			System.out.println("Password Changed Successfully");
		}
	 public void deletecourse(int courseid)
	 {
		 courseRepo.deleteById(courseid);
	 }

}