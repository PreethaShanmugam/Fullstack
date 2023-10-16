package com.example.User.register.jwt;

import java.util.Date;
import javax.crypto.SecretKey;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.example.User.register.entity .Users;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtGenerator implements JwtGeneratorInterface {

    @Value("${jwt.secret}")
    private String secret;

    public String generateToken(Users user) {
        // Generate a secure key with at least 256 bits
        SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

        String jwtToken = Jwts.builder()
            .setSubject(user.getEmail())
            .claim("role", user.getRole().name()) // Include the user's role in the claims
            .setIssuedAt(new Date())
            .signWith(SignatureAlgorithm.HS256, key)
            .compact();

        return jwtToken;
    }
}
