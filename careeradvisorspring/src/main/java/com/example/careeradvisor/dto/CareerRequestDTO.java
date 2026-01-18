package com.example.careeradvisor.dto;

public class CareerRequestDTO {

    private String education;

    // ratings (1–5)
    private int interestMath;
    private int interestBiology;
    private int interestCommerce;
    private int codingLevel;
    private int problemSolving;
    private int patientCare;
    private int labWork;
    private int dataInterest;
    private int govtJobInterest;
    private int businessInterest;

    // getters & setters
    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public int getInterestMath() {
        return interestMath;
    }

    public void setInterestMath(int interestMath) {
        this.interestMath = interestMath;
    }

    public int getInterestBiology() {
        return interestBiology;
    }

    public void setInterestBiology(int interestBiology) {
        this.interestBiology = interestBiology;
    }

    public int getInterestCommerce() {
        return interestCommerce;
    }

    public void setInterestCommerce(int interestCommerce) {
        this.interestCommerce = interestCommerce;
    }

    public int getCodingLevel() {
        return codingLevel;
    }

    public void setCodingLevel(int codingLevel) {
        this.codingLevel = codingLevel;
    }

    public int getProblemSolving() {
        return problemSolving;
    }

    public void setProblemSolving(int problemSolving) {
        this.problemSolving = problemSolving;
    }

    public int getPatientCare() {
        return patientCare;
    }

    public void setPatientCare(int patientCare) {
        this.patientCare = patientCare;
    }

    public int getLabWork() {
        return labWork;
    }

    public void setLabWork(int labWork) {
        this.labWork = labWork;
    }

    public int getDataInterest() {
        return dataInterest;
    }

    public void setDataInterest(int dataInterest) {
        this.dataInterest = dataInterest;
    }

    public int getGovtJobInterest() {
        return govtJobInterest;
    }

    public void setGovtJobInterest(int govtJobInterest) {
        this.govtJobInterest = govtJobInterest;
    }

    public int getBusinessInterest() {
        return businessInterest;
    }

    public void setBusinessInterest(int businessInterest) {
        this.businessInterest = businessInterest;
    }
}
