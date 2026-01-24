package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.AssessmentResponse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssessmentResponseRepository
        extends JpaRepository<AssessmentResponse, Long> {
}
