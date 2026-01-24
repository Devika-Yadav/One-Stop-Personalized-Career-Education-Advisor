package com.careeradvisor.backend.service;

import com.careeradvisor.backend.model.User;
import com.careeradvisor.backend.repository.AuthRepository;
import com.careeradvisor.backend.security.JwtUtil;
import org.springframework.security.authentication.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final AuthRepository repo;
    private final PasswordEncoder encoder;
    private final AuthenticationManager authManager;
    private final JwtUtil jwtUtil;

    public AuthService(AuthRepository repo,
                       PasswordEncoder encoder,
                       AuthenticationManager authManager,
                       JwtUtil jwtUtil) {
        this.repo = repo;
        this.encoder = encoder;
        this.authManager = authManager;
        this.jwtUtil = jwtUtil;
    }

    public void signup(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        user.setRole("STUDENT"); // force default role
        repo.save(user);
    }

    public String login(String email, String password) {

        authManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password)
        );

        User user = repo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return jwtUtil.generateToken(user.getEmail(), user.getRole());
    }

    public User getUserByEmail(String email) {
        return repo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // Delete user by email
    public void deleteUser(String email) {
        User user = repo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        repo.delete(user);
    }
}
