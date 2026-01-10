package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.User;
import com.careeradvisor.backend.service.AuthService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService service;

    public AuthController(AuthService service) {
        this.service = service;
    }

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        service.signup(user);
        return "User registered";
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> req) {
        String token = service.login(req.get("email"), req.get("password"));
        return Map.of("token", token);
    }
}
