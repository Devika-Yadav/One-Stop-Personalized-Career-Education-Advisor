package com.careeradvisor.backend.service;

import com.careeradvisor.backend.model.CareerDomain;
import com.careeradvisor.backend.repository.CareerDomainRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CareerDomainService {

    private final CareerDomainRepository repository;

    public CareerDomainService(CareerDomainRepository repository) {
        this.repository = repository;
    }

    public CareerDomain addDomain(CareerDomain domain) {
        return repository.save(domain);
    }

    public List<CareerDomain> getAllDomains() {
        return repository.findAll();
    }

    public CareerDomain getDomainById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Domain not found"));
    }

    public CareerDomain updateDomain(Long id, CareerDomain updated) {
        CareerDomain domain = getDomainById(id);

        domain.setDomainName(updated.getDomainName());
        domain.setDescription(updated.getDescription());
        domain.setEligibleStreams(updated.getEligibleStreams());
        domain.setMinAggregate(updated.getMinAggregate());

        return repository.save(domain);
    }

    public void deleteDomain(Long id) {
        repository.deleteById(id);
    }
}
