package com.example.careeradvisor.service;

import com.example.careeradvisor.dto.CareerRequestDTO;
import com.example.careeradvisor.dto.CareerResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class MLService {

    @Autowired
    private RestTemplate restTemplate;

    private final String ML_API_URL = "http://127.0.0.1:8000/predict";

    public CareerResponseDTO getPrediction(CareerRequestDTO request) {

        Map<String, Object> response = restTemplate.postForObject(ML_API_URL, request, Map.class);

        if (response == null || !response.containsKey("career")) {
            return new CareerResponseDTO("Unavailable", 0.0);
        }

        String career = response.get("career").toString();
        double confidence = ((Number) response.get("confidence")).doubleValue();

        return new CareerResponseDTO(career, confidence);
    }
}
