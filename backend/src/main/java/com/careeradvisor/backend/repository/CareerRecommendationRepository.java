package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.CareerRecommendation;
import com.careeradvisor.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CareerRecommendationRepository
        extends JpaRepository<CareerRecommendation, Long> {

    List<CareerRecommendation> findByUserOrderByGeneratedAtDesc(User user);
}
