package com.example.Assignment.Service;

import java.util.List;

import com.example.Assignment.Entity.AssignmentEntity;

public interface AssignmentSerivice {
    List<AssignmentEntity> getAssignmentsByCourseId(Long courseId);
    AssignmentEntity createAssignment(AssignmentEntity assignment);
}
