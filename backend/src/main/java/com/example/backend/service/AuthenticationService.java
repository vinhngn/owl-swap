package com.example.backend.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.dto.LoginUserDto;
import com.example.backend.dto.RegisterUserDto;
import com.example.backend.dto.UserDto;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.response.UserResponse;
import com.example.backend.util.GenerateUtils;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(
        UserRepository userRepository,
        AuthenticationManager authenticationManager,
        PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

   public User authenticate(LoginUserDto input) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                input.getEmail(),
                input.getPassword()
            )
        );

        User user = userRepository.findByEmail(input.getEmail());
        return user;
    }

    public UserResponse signup(RegisterUserDto input) {
        // Check if a user with the given email already exists
        if (userRepository.findByUserName(input.getUserName()) != null) {
            throw new IllegalArgumentException("A user with this userName already exists.");
        }

        if (userRepository.findByEmail(input.getEmail()) != null) {
            throw new IllegalArgumentException("A user with this email already exists.");
        }
    
    
        // Create a new user entity
        User user = new User();
        user.setUserId(GenerateUtils.generateUUID());
        user.setUserName(input.getUserName());
        user.setEmail(input.getEmail());
        user.setHashPassword(passwordEncoder.encode(input.getPassword()));
        user.setIsActive(true);
        user.setCreatedAt(new Date());
        user.setUpdatedAt(new Date());
    
        // Save user and map to UserResponse
        User savedUser = userRepository.save(user);
        return convertToUserResponse(savedUser);
    }
    
    public List<UserResponse> allUsers() {
        return userRepository.findAll().stream()
                .map(this::convertToUserResponse)
                .collect(Collectors.toList());
    }

    private UserResponse convertToUserResponse(User user) {
        UserResponse userResponse = new UserResponse();
        userResponse.setUserId(user.getUserId());
        userResponse.setUserName(user.getUserName());
        userResponse.setEmail(user.getEmail());
        userResponse.setIsActive(user.getIsActive());
        userResponse.setCreatedAt(user.getCreatedAt());
        userResponse.setUpdatedAt(user.getUpdatedAt());
        return userResponse;
    }
}
