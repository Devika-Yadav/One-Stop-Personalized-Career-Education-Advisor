package com.careeradvisor.backend.security;

import com.careeradvisor.backend.model.User;
import com.careeradvisor.backend.repository.AuthRepository;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final AuthRepository repo;

    public CustomUserDetailsService(AuthRepository repo) {
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String email) {

        User user = repo.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole()) // STUDENT / ADMIN
                .build();
    }
}
