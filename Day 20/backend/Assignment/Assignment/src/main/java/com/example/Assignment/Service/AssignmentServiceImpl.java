package com.example.Assignment.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Assignment.Entity.AssignmentEntity;
import com.example.Assignment.Repository.AssignmentRepository;

@Service
public class AssignmentServiceImpl implements AssignmentSerivice {
    private final AssignmentRepository assignmentRepository;

    @Autowired
    public AssignmentServiceImpl(AssignmentRepository assignmentRepository) {
        this.assignmentRepository = assignmentRepository;
    }

    @Override
    public List<AssignmentEntity> getAssignmentsByCourseId(Long courseId) {
        return assignmentRepository.findByCourseId(courseId);
    }
    @Override
    public AssignmentEntity createAssignment(AssignmentEntity assignment) {
        // You can perform additional validation or logic here if needed

        // Save the assignment
        return assignmentRepository.save(assignment);
    }
}
