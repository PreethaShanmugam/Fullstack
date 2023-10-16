package com.example.Assignment.Controller;

	import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;

import com.example.Assignment.Entity.AssignmentEntity;
import com.example.Assignment.Service.AssignmentSerivice;

import java.util.List;
@CrossOrigin
	@RestController
	@RequestMapping("/assignment")
	public class Assignmentcontroller {
	    private final AssignmentSerivice assignmentService;

	    @Autowired
	    public Assignmentcontroller(AssignmentSerivice assignmentService) {
	        this.assignmentService = assignmentService;
	    }

	    @GetMapping("/getAssignment/{courseId}")
	    public List<AssignmentEntity> getAssignmentsByCourseId(@PathVariable Long courseId) {
	        return assignmentService.getAssignmentsByCourseId(courseId);
	    }
//	    @PostMapping("/createAssignment")
//	    public AssignmentEntity createAssignment(@RequestBody AssignmentEntity assignment) {
//	        // You can perform additional validation or logic here if needed
//
//	        // Save the assignment using the service
//	        return assignmentService.createAssignment(assignment);
//	    }
	    @PostMapping("/createAssignment/{courseId}")
	    public AssignmentEntity createAssignment(
	        @PathVariable Long courseId,
	        @RequestBody AssignmentEntity assignment
	    ) {
	        // Set the courseId for the assignment
	        assignment.setCourseId(courseId);
	        
	        return assignmentService.createAssignment(assignment);
	    }


	}


