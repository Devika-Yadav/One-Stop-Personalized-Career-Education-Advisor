package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.User;
import com.careeradvisor.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // ✅ GET ALL USERS
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // ✅ MAKE ADMIN
    @PutMapping("/make-admin/{userId}")
    public String makeAdmin(@PathVariable Long userId) {
        userService.promoteToAdmin(userId);
        return "User promoted to ADMIN";
    }
    @DeleteMapping("/delete/{userId}")
    public String deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return "User deleted successfully";
    }
}
