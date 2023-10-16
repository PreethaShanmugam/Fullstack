package Academic.performance.Coding.comrades.JWT;

import java.util.Map;

import Academic.performance.Coding.comrades.Entity.Admin;


public interface JwtGeneratorInterface  {

	Map<String, String> generateToken(Admin admin);
}

