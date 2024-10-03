package com.example.backend.seeder;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.backend.entity.AdminUser;
import com.example.backend.repository.AdminUserRepository;
import com.example.backend.util.GenerateUtils;

@Component
@Configuration
public class AdminUserDataSeeder {

    private static final Logger logger = LoggerFactory.getLogger(AdminUserDataSeeder.class);

    @Bean
    CommandLineRunner seedUsers(AdminUserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepository.count() == 0) { // Prevent duplicate entries


                // Create an admin user
                AdminUser adminUser = new AdminUser();
                adminUser.setUserId(GenerateUtils.generateUUID());
                adminUser.setFullName("Vinh Nguyen");
                adminUser.setEmail("tun36777@temple.edu");
                adminUser.setHashPassword(passwordEncoder.encode("123456"));
                adminUser.setIsActive(true);
                adminUser.setCreatedAt(new Date());
                adminUser.setUpdatedAt(new Date());


                // Create an joining/student user
                AdminUser student1 = new AdminUser();
                student1.setUserId(GenerateUtils.generateUUID());
                student1.setFullName("Anurag Reddy");
                student1.setEmail("anuchan@temple.edu");
                student1.setHashPassword(passwordEncoder.encode("123456")); 
                student1.setIsActive(true);
                student1.setCreatedAt(new Date());
                student1.setUpdatedAt(new Date());
                // Save users to the database
                userRepository.save(adminUser);
                userRepository.save(student1);

                logger.info("Users seeded successfully!");
            }
        };
    }
}