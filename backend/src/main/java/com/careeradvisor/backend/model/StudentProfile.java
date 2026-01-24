package com.careeradvisor.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "student_profile")
public class StudentProfile {
    public void setProfileId(Long profileId) {
        this.profileId = profileId;
    }

    public int getProfileVersion() {
        return profileVersion;
    }

    public void setProfileVersion(int profileVersion) {
        this.profileVersion = profileVersion;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long profileId;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String fullName;
    private String mobileNumber;
    private String gender;
    private int age;

    private String state;
    private String district;
    private String board;
    private String stream;

    private String collegeName;
    private int yearOfPass;

    // Subject marks
    private Integer mathsMarks;
    private Integer physicsMarks;
    private Integer chemistryMarks;
    private Integer biologyMarks;

    private Integer economicsMarks;
    private Integer commerceMarks;
    private Integer civicsMarks;
    private Integer historyMarks;

    private Integer totalMarks;
    private Double percentage;

    @Column(columnDefinition = "TEXT")
    private String interests;

    private int profileVersion = 1;

    private LocalDateTime createdAt = LocalDateTime.now();

    // ===== GETTERS & SETTERS =====

    public Long getProfileId() { return profileId; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public String getBoard() { return board; }
    public void setBoard(String board) { this.board = board; }

    public String getStream() { return stream; }
    public void setStream(String stream) { this.stream = stream; }

    public String getCollegeName() { return collegeName; }
    public void setCollegeName(String collegeName) { this.collegeName = collegeName; }

    public int getYearOfPass() { return yearOfPass; }
    public void setYearOfPass(int yearOfPass) { this.yearOfPass = yearOfPass; }

    public Integer getMathsMarks() { return mathsMarks; }
    public void setMathsMarks(Integer mathsMarks) { this.mathsMarks = mathsMarks; }

    public Integer getPhysicsMarks() { return physicsMarks; }
    public void setPhysicsMarks(Integer physicsMarks) { this.physicsMarks = physicsMarks; }

    public Integer getChemistryMarks() { return chemistryMarks; }
    public void setChemistryMarks(Integer chemistryMarks) { this.chemistryMarks = chemistryMarks; }

    public Integer getBiologyMarks() { return biologyMarks; }
    public void setBiologyMarks(Integer biologyMarks) { this.biologyMarks = biologyMarks; }

    public Integer getEconomicsMarks() { return economicsMarks; }
    public void setEconomicsMarks(Integer economicsMarks) { this.economicsMarks = economicsMarks; }

    public Integer getCommerceMarks() { return commerceMarks; }
    public void setCommerceMarks(Integer commerceMarks) { this.commerceMarks = commerceMarks; }

    public Integer getCivicsMarks() { return civicsMarks; }
    public void setCivicsMarks(Integer civicsMarks) { this.civicsMarks = civicsMarks; }

    public Integer getHistoryMarks() { return historyMarks; }
    public void setHistoryMarks(Integer historyMarks) { this.historyMarks = historyMarks; }

    public Integer getTotalMarks() { return totalMarks; }
    public void setTotalMarks(Integer totalMarks) { this.totalMarks = totalMarks; }

    public Double getPercentage() { return percentage; }
    public void setPercentage(Double percentage) { this.percentage = percentage; }

    public String getInterests() { return interests; }
    public void setInterests(String interests) { this.interests = interests; }
}
