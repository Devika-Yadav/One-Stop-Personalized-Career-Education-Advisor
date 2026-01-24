package com.careeradvisor.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "pdf_resources")
public class PdfResource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pdfId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String domain;
    // ENGINEERING, MEDICAL, COMMERCE, etc.

    private String role;
    // Optional: Developer, Analyst, UI/UX

    @Column(nullable = false)
    private String skills;

    private String author;

    @Column(nullable = false)
    private String platform;

    @Column(nullable = false, length = 500)
    private String pdfUrl;

    private LocalDateTime createdAt = LocalDateTime.now();

    // Getters & Setters
    public Long getPdfId() { return pdfId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDomain() { return domain; }
    public void setDomain(String domain) { this.domain = domain; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getSkills() { return skills; }
    public void setSkills(String skills) { this.skills = skills; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public String getPlatform() { return platform; }
    public void setPlatform(String platform) { this.platform = platform; }

    public String getPdfUrl() { return pdfUrl; }
    public void setPdfUrl(String pdfUrl) { this.pdfUrl = pdfUrl; }

    public LocalDateTime getCreatedAt() { return createdAt; }
}
