package com.example.demo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private static final String GEMINI_URL =
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=";

    public String predictCareer(Map<String, Object> quizJson) {

        StringBuilder prompt = new StringBuilder();
        prompt.append("You are a career guidance expert.\n");
        prompt.append("Based on the quiz answers below, return ONLY ONE career domain.\n\n");

        quizJson.forEach((key, value) ->
                prompt.append(key).append(": ").append(value).append("\n")
        );

        prompt.append("\nReturn ONLY one word.\n");
        prompt.append("Example: Software Engineering, Medicine, Data Science");

        Map<String, Object> requestBody = Map.of(
                "contents", List.of(
                        Map.of(
                                "parts", List.of(
                                        Map.of("text", prompt.toString())
                                )
                        )
                )
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> request =
                new HttpEntity<>(requestBody, headers);

        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<String> response =
                restTemplate.postForEntity(
                        GEMINI_URL + apiKey,
                        request,
                        String.class
                );

        return response.getBody();
    }
}
