package com.careeradvisor.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "career_domains")
public class CareerDomain {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long domainId;

    @Column(nullable = false, unique = true)
    private String domainName;
    // ENGINEERING, MEDICAL, COMMERCE, LAW, ARTS, GOVERNMENT

    @Column(length = 500)
    private String description;

    @Column(nullable = false)
    private String eligibleStreams;
    // MPC,BIPC,MEC,CEC,HEC

    private Double minAggregate;

    // getters & setters
    public Long getDomainId() {
        return domainId;
    }

    public void setDomainId(Long domainId) {
        this.domainId = domainId;
    }

    public String getDomainName() {
        return domainName;
    }

    public void setDomainName(String domainName) {
        this.domainName = domainName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEligibleStreams() {
        return eligibleStreams;
    }

    public void setEligibleStreams(String eligibleStreams) {
        this.eligibleStreams = eligibleStreams;
    }

    public Double getMinAggregate() {
        return minAggregate;
    }

    public void setMinAggregate(Double minAggregate) {
        this.minAggregate = minAggregate;
    }
}
