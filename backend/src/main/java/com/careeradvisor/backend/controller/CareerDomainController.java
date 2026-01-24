package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.CareerDomain;
import com.careeradvisor.backend.service.CareerDomainService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/career-domain")
public class CareerDomainController {

    private final CareerDomainService service;

    public CareerDomainController(CareerDomainService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public CareerDomain add(@RequestBody CareerDomain domain) {
        return service.addDomain(domain);
    }

    @GetMapping("/all")
    public List<CareerDomain> getAll() {
        return service.getAllDomains();
    }

    @GetMapping("/{id}")
    public CareerDomain getById(@PathVariable Long id) {
        return service.getDomainById(id);
    }

    @PutMapping("/update/{id}")
    public CareerDomain update(@PathVariable Long id,
                               @RequestBody CareerDomain domain) {
        return service.updateDomain(id, domain);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        service.deleteDomain(id);
        return "Career domain deleted successfully";
    }
}
