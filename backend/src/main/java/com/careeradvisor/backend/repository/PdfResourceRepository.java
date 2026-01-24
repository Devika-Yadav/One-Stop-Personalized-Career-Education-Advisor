package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.PdfResource;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PdfResourceRepository extends JpaRepository<PdfResource, Long> {

    List<PdfResource> findByDomain(String domain);

    List<PdfResource> findByDomainAndRole(String domain, String role);

    List<PdfResource> findBySkillsContainingIgnoreCase(String keyword);
}
