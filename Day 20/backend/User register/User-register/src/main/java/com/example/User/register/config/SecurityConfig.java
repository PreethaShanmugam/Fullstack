package com.example.User.register.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration

public class SecurityConfig {
  @SuppressWarnings("removal")
@Bean
   public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
	   http.cors().disable().csrf().disable()
		.authorizeHttpRequests()
		.requestMatchers(AntPathRequestMatcher.antMatcher("/auth/**")).permitAll()
		.and().authorizeHttpRequests().requestMatchers(AntPathRequestMatcher.antMatcher("/staff/*")).permitAll();
		return http.build();
   }

@Bean
public BCryptPasswordEncoder bCryptPasswordEncoder()
{
	return new BCryptPasswordEncoder();
}


}
