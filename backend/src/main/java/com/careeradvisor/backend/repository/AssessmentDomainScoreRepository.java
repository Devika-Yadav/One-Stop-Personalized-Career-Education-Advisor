package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.AssessmentDomainScore;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssessmentDomainScoreRepository
        extends JpaRepository<AssessmentDomainScore, Long> {
    List<AssessmentDomainScore> findByAttemptId(Long attemptId);
}
