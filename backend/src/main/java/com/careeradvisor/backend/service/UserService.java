package com.careeradvisor.backend.service;

import com.careeradvisor.backend.model.User;
import com.careeradvisor.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository usersRepository;

    public UserService(UserRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<User> getAllUsers() {
        return usersRepository.findAll();
    }

    public void promoteToAdmin(Long userId) {
        User user = usersRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setRole("ADMIN");
        usersRepository.save(user);
    }
    public void deleteUser(Long userId) {
        usersRepository.deleteById(userId);
    }
}
