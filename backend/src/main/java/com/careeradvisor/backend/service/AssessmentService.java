package com.careeradvisor.backend.service;

import com.careeradvisor.backend.model.*;
import com.careeradvisor.backend.repository.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AssessmentService {

    private final AssessmentQuestionRepository questionRepo;
    private final AssessmentAttemptRepository attemptRepo;
    private final AssessmentResponseRepository responseRepo;
    private final AssessmentDomainScoreRepository scoreRepo;

    public AssessmentService(
            AssessmentQuestionRepository questionRepo,
            AssessmentAttemptRepository attemptRepo,
            AssessmentResponseRepository responseRepo,
            AssessmentDomainScoreRepository scoreRepo) {
        this.questionRepo = questionRepo;
        this.attemptRepo = attemptRepo;
        this.responseRepo = responseRepo;
        this.scoreRepo = scoreRepo;
    }

    // Start Assessment
    public AssessmentAttempt startAssessment(Long userId) {
        int attemptNo = attemptRepo.findTopByUserIdOrderByAttemptNoDesc(userId)
                .map(a -> a.getAttemptNo() + 1)
                .orElse(1);

        AssessmentAttempt attempt = new AssessmentAttempt();
        attempt.setUserId(userId);
        attempt.setAttemptNo(attemptNo);
        attempt.setStartedAt(LocalDateTime.now());

        return attemptRepo.save(attempt);
    }

    // Submit Answer
    public void submitResponse(Long attemptId, Long questionId, String option) {
        AssessmentResponse response = new AssessmentResponse();
        response.setAttemptId(attemptId);
        response.setQuestionId(questionId);
        response.setSelectedOption(option);
        responseRepo.save(response);
    }

    // Calculate Domain Scores
    public void calculateScores(Long attemptId) {
        List<AssessmentResponse> responses = responseRepo.findAll();

        Map<String, Integer> domainScores = new HashMap<>();

        for (AssessmentResponse r : responses) {
            AssessmentQuestion q = questionRepo.findById(r.getQuestionId()).orElseThrow();

            if (q.getCorrectOption() == null ||
                    q.getCorrectOption().equals(r.getSelectedOption())) {

                domainScores.merge(q.getDomain(), q.getWeight(), Integer::sum);
            }
        }

        domainScores.forEach((domain, score) -> {
            AssessmentDomainScore ds = new AssessmentDomainScore();
            ds.setAttemptId(attemptId);
            ds.setDomain(domain);
            ds.setScore(score);
            scoreRepo.save(ds);
        });

        AssessmentAttempt attempt = attemptRepo.findById(attemptId).orElseThrow();
        attempt.setCompletedAt(LocalDateTime.now());
        attemptRepo.save(attempt);
    }
}
