package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<User, Long> {
}
