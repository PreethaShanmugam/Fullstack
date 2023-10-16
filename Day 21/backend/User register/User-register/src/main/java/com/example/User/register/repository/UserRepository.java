package com.example.User.register.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.User.register.entity.Users;

public interface UserRepository extends JpaRepository<Users, String> {
	Users findByEmail(String email);

}