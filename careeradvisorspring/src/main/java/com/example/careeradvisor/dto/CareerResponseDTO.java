package com.example.careeradvisor.dto;

public class CareerResponseDTO {

    private String career;
    private double confidence;

    public CareerResponseDTO(String career, double confidence) {
        this.career = career;
        this.confidence = confidence;
    }

    public String getCareer() {
        return career;
    }

    public double getConfidence() {
        return confidence;
    }
}
