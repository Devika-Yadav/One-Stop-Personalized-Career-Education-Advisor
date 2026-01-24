package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.CareerDomain;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CareerDomainRepository extends JpaRepository<CareerDomain, Long> {

    Optional<CareerDomain> findByDomainName(String domainName);
}
