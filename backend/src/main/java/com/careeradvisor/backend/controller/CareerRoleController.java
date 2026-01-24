package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.CareerDomain;
import com.careeradvisor.backend.model.CareerRole;
import com.careeradvisor.backend.service.CareerRoleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/career-role")
public class CareerRoleController {

    private final CareerRoleService service;

    public CareerRoleController(CareerRoleService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public CareerRole addRole(@RequestBody CareerRole role) {
        return service.addRole(role);
    }

    @GetMapping("/all")
    public List<CareerRole> getAllRoles() {
        return service.getAllRoles();
    }

    @GetMapping("/by-domain/{domainId}")
    public List<CareerRole> getRolesByDomain(@PathVariable Long domainId) {
        CareerDomain domain = new CareerDomain();
        domain.setDomainId(domainId);
        return service.getRolesByDomain(domain);
    }

    @GetMapping("/{id}")
    public CareerRole getRoleById(@PathVariable Long id) {
        return service.getRoleById(id);
    }

    @PutMapping("/update/{id}")
    public CareerRole updateRole(@PathVariable Long id, @RequestBody CareerRole role) {
        return service.updateRole(id, role);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteRole(@PathVariable Long id) {
        service.deleteRole(id);
        return "Career role deleted successfully";
    }
}
