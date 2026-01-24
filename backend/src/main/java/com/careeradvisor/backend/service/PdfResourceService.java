package com.careeradvisor.backend.service;

import com.careeradvisor.backend.model.PdfResource;
import com.careeradvisor.backend.repository.PdfResourceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PdfResourceService {

    private final PdfResourceRepository repo;

    public PdfResourceService(PdfResourceRepository repo) {
        this.repo = repo;
    }

    // Admin
    public PdfResource addPdf(PdfResource pdf) {
        return repo.save(pdf);
    }

    public PdfResource updatePdf(Long id, PdfResource updated) {
        PdfResource pdf = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("PDF not found"));

        pdf.setTitle(updated.getTitle());
        pdf.setDomain(updated.getDomain());
        pdf.setRole(updated.getRole());
        pdf.setSkills(updated.getSkills());
        pdf.setAuthor(updated.getAuthor());
        pdf.setPlatform(updated.getPlatform());
        pdf.setPdfUrl(updated.getPdfUrl());

        return repo.save(pdf);
    }

    public void deletePdf(Long id) {
        repo.deleteById(id);
    }

    // Student
    public List<PdfResource> getAllPdfs() {
        return repo.findAll();
    }

    public List<PdfResource> getByDomain(String domain) {
        return repo.findByDomain(domain);
    }

    public List<PdfResource> getByDomainAndRole(String domain, String role) {
        return repo.findByDomainAndRole(domain, role);
    }

    public List<PdfResource> searchBySkill(String keyword) {
        return repo.findBySkillsContainingIgnoreCase(keyword);
    }
}
