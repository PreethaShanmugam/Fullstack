package com.example.User.register.jwt;

import java.util.Map;

import org.springframework.stereotype.Service;


import com.example.User.register.entity.Users;
import com.example.User.register.enumerate.dto.LoginRequest;

@Service
public interface JwtGeneratorInterface {

	String generateToken(Users user);

}