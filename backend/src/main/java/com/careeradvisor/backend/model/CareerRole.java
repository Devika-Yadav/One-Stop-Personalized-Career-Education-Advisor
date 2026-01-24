package com.careeradvisor.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "career_roles")
public class CareerRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roleId;

    @ManyToOne
    @JoinColumn(name = "domain_id", nullable = false)
    private CareerDomain careerDomain;

    @Column(nullable = false, unique = true)
    private String roleName; // Developer, Data Analyst, UI/UX Designer, etc.

    @Column(length = 500)
    private String description;

    private Integer minScore; // minimum assessment score required

    // Getters & Setters
    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public CareerDomain getCareerDomain() {
        return careerDomain;
    }

    public void setCareerDomain(CareerDomain careerDomain) {
        this.careerDomain = careerDomain;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getMinScore() {
        return minScore;
    }

    public void setMinScore(Integer minScore) {
        this.minScore = minScore;
    }
}
