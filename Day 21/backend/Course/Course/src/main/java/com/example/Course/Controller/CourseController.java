package com.example.Course.Controller;



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

import com.example.Course.Entity.CourseEntity;
import com.example.Course.Service.CourseService;


@CrossOrigin
@RestController
@RequestMapping("/course")
public class CourseController {
	 
	
	@Autowired
	CourseService courseService;
	
	@PostMapping("/signupcourse")
	 public String singUp(@RequestBody CourseEntity course)
	  {
		   return courseService.saveSignUp(course);
		  
	  }
	
	@GetMapping("/getAllcourse")
	public Iterable<CourseEntity> getcourse()
	{
		return courseService.read();
	}
	
	@PutMapping("/resetcourse")
	public void changePassword(@RequestBody CourseEntity course)
	{
		courseService.resetPassword(course);
	}
	@DeleteMapping("/deletecourse/{courseid}")
	public void remove(@PathVariable int courseid)
	{
		courseService.deletecourse(courseid);
	}
}
