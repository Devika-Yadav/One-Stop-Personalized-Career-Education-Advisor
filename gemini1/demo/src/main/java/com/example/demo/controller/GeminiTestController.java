package com.example.demo.controller;

import com.example.demo.service.GeminiService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/test")
@CrossOrigin(origins = "*")
public class GeminiTestController {

    private final GeminiService geminiService;

    public GeminiTestController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    @PostMapping("/career")
    public String predict(@RequestBody Map<String, Object> quizAnswers) {
        return geminiService.predictCareer(quizAnswers);
    }
}
