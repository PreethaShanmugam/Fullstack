package com.example.Assignment.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Assignment.Entity.AssignmentEntity;

import java.util.List;

@Repository
public interface AssignmentRepository extends JpaRepository<AssignmentEntity, Long> {
    // Define a custom query method to retrieve assignments by course ID
    List<AssignmentEntity> findByCourseId(Long courseId);
}


