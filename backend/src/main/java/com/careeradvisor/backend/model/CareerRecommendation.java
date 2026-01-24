package com.careeradvisor.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "career_recommendations")
public class CareerRecommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recommendationId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "domain_id", nullable = false)
    private CareerDomain careerDomain;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private CareerRole careerRole; // nullable

    private Double finalScore;

    private String source;
    // PROFILE / ASSESSMENT / BOTH

    private LocalDateTime generatedAt = LocalDateTime.now();

    // Getters & Setters
    public Long getRecommendationId() {
        return recommendationId;
    }

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public CareerDomain getCareerDomain() {
        return careerDomain;
    }
    public void setCareerDomain(CareerDomain careerDomain) {
        this.careerDomain = careerDomain;
    }

    public CareerRole getCareerRole() {
        return careerRole;
    }
    public void setCareerRole(CareerRole careerRole) {
        this.careerRole = careerRole;
    }

    public Double getFinalScore() {
        return finalScore;
    }
    public void setFinalScore(Double finalScore) {
        this.finalScore = finalScore;
    }

    public String getSource() {
        return source;
    }
    public void setSource(String source) {
        this.source = source;
    }

    public LocalDateTime getGeneratedAt() {
        return generatedAt;
    }
}
