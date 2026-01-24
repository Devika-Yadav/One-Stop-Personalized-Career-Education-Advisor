package com.careeradvisor.backend.service;

import com.careeradvisor.backend.model.*;
import com.careeradvisor.backend.repository.CareerRecommendationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CareerRecommendationService {

    private final CareerRecommendationRepository repo;

    public CareerRecommendationService(CareerRecommendationRepository repo) {
        this.repo = repo;
    }

    // Save new recommendation
    public CareerRecommendation saveRecommendation(
            User user,
            CareerDomain domain,
            CareerRole role,
            Double score,
            String source) {

        CareerRecommendation rec = new CareerRecommendation();
        rec.setUser(user);
        rec.setCareerDomain(domain);
        rec.setCareerRole(role);
        rec.setFinalScore(score);
        rec.setSource(source);

        return repo.save(rec);
    }

    // Get all recommendations of a user
    public List<CareerRecommendation> getUserRecommendations(User user) {
        return repo.findByUserOrderByGeneratedAtDesc(user);
    }
}
