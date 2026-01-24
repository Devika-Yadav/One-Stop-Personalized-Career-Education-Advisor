package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.AssessmentQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssessmentQuestionRepository
        extends JpaRepository<AssessmentQuestion, Long> {
    List<AssessmentQuestion> findByCategory(String category);
}
