package com.careeradvisor.backend.model;

import jakarta.persistence.*;
@Entity
@Table(name = "institutions")
public class Institution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long institutionId;

    @Column(name = "institution_name", nullable = false)
    private String institutionName;

    @Column(nullable = false)
    private String stream;

    @Column(nullable = false)
    private String location;

    @Column(name = "institution_website", nullable = false)
    private String institutionWebsite;

    // getters & setters
    public Long getInstitutionId() { return institutionId; }
    public void setInstitutionId(Long institutionId) { this.institutionId = institutionId; }
    public String getInstitutionName() { return institutionName; }
    public void setInstitutionName(String institutionName) { this.institutionName = institutionName; }
    public String getStream() { return stream; }
    public void setStream(String stream) { this.stream = stream; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getInstitutionWebsite() { return institutionWebsite; }
    public void setInstitutionWebsite(String institutionWebsite) { this.institutionWebsite = institutionWebsite; }
}
