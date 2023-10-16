package com.example.User.register.enumerate.dto;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component

public class LoginRequest {
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	private String email;
	private String password;
}
