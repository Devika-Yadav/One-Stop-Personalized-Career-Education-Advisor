package com.example.careeradvisor.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/")
    public String home() {
        return "Career Advisor Backend is running!";
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }
}
