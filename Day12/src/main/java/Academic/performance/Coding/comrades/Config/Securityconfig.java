package Academic.performance.Coding.comrades.Config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
public class Securityconfig {
   @Bean
   public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
	   http
	   	.cors().disable()
	   	.csrf().disable()
	   	.authorizeHttpRequests().requestMatchers(AntPathRequestMatcher.antMatcher("/admin/public")).permitAll()
	   	.and().authorizeHttpRequests().requestMatchers(AntPathRequestMatcher.antMatcher("/admin/secured")).authenticated();
	   return http.build();
   }
}
