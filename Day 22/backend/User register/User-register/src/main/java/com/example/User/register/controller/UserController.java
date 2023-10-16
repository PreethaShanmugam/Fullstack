package com.example.User.register.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.User.register.entity.Users;
import com.example.User.register.enumerate.dto.LoginRequest;
import com.example.User.register.jwt.JwtGeneratorInterface;
import com.example.User.register.service.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping("/auth")
@RequiredArgsConstructor
@Transactional
public class UserController {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    private UserService userService;
    private JwtGeneratorInterface jwtGenerator;

    @Autowired
    public UserController(UserService userService, JwtGeneratorInterface jwtGenerator) {
        this.userService = userService;
        this.jwtGenerator = jwtGenerator;
    }

    @PostMapping("/register")
    public ResponseEntity<?> postUser(@RequestBody Users admin) {
        String password = admin.getPassword();
        String hashedPassword = passwordEncoder.encode(password);
        try {
            admin.setPassword(hashedPassword);
            userService.saveUser(admin);
            return new ResponseEntity<>(admin, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to register user.", HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Users userData = userService.getEmailAndPassword(email, password);

        if (userData == null) {
            return new ResponseEntity<>("Invalid username or password.", HttpStatus.UNAUTHORIZED);
        }

        // Generate a JWT token
        String token = jwtGenerator.generateToken(userData);

        // Create a response object with role and token
        Map<String, String> response = new HashMap<>();
        response.put("role", userData.getRole().name()); // Get the role name
        response.put("token", token);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
