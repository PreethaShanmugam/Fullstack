package com.example.post.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/stafff")
public class Staff {
	@GetMapping("/")
	public String Student()
	{
		return "Staff";
	}
}
