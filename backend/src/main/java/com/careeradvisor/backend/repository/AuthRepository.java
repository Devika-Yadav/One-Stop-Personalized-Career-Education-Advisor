package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthRepository extends JpaRepository<User, Long> {

//    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);
}
