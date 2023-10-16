package com.example.User.register.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.User.register.entity.Users;
import com.example.User.register.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	private UserRepository adminRepository;
	  @Autowired
	  public UserServiceImpl(UserRepository adminRepository){
	    this.adminRepository=adminRepository;
	  }
	  @Override
	  public void saveUser(Users admin) {
	    adminRepository.save(admin);
	  }
	  @Override
	  public Users getEmailAndPassword(String name, String plainPassword) {
		    Users user = adminRepository.findByEmail(name);
		    BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
		    String hashedPassword=user.getPassword();
		    boolean exists=passwordEncoder.matches(plainPassword,hashedPassword);
		    if(exists)
		    {
		    	return user;
		    }
		    else
		    {
		    	System.out.println("Invalid id and password");
		    	throw new UsernameNotFoundException("Invalid id and password");
		    }
	  }
}