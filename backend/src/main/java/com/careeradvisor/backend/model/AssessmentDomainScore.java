package com.careeradvisor.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "assessment_domain_scores")
public class AssessmentDomainScore {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scoreId;

    private Long attemptId;
    private String domain; // ENGINEERING, MEDICAL, etc
    private int score;

    // getters & setters

    public Long getScoreId() {
        return scoreId;
    }

    public void setScoreId(Long scoreId) {
        this.scoreId = scoreId;
    }

    public Long getAttemptId() {
        return attemptId;
    }

    public void setAttemptId(Long attemptId) {
        this.attemptId = attemptId;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
