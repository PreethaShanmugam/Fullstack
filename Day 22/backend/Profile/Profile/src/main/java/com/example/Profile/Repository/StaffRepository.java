package com.example.Profile.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Profile.Entity.StaffEntity;


@Repository
public interface StaffRepository extends JpaRepository<StaffEntity, String> {

}