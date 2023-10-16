package com.example.Course.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Course.Entity.CourseEntity;


@Repository
public interface CourseRepository extends JpaRepository<CourseEntity, Integer> {

}