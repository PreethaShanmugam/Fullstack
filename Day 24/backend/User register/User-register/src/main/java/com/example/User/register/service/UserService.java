package com.example.User.register.service;

import org.springframework.stereotype.Service;

import com.example.User.register.entity.Users;
import com.example.User.register.enumerate.dto.LoginRequest;
import com.example.User.register.enumerate.dto.LoginResponse;

@Service
public interface UserService {
	 public void saveUser(Users admin);
	    public Users getEmailAndPassword(String name, String password);
	    
}