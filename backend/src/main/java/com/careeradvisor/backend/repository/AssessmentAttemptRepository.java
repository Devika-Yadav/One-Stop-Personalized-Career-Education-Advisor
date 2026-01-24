package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.AssessmentAttempt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AssessmentAttemptRepository
        extends JpaRepository<AssessmentAttempt, Long> {
    Optional<AssessmentAttempt> findTopByUserIdOrderByAttemptNoDesc(Long userId);
}
