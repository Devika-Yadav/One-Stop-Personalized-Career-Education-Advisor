package com.careeradvisor.backend.service;

import com.careeradvisor.backend.model.CareerDomain;
import com.careeradvisor.backend.model.CareerRole;
import com.careeradvisor.backend.repository.CareerRoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CareerRoleService {

    private final CareerRoleRepository repository;

    public CareerRoleService(CareerRoleRepository repository) {
        this.repository = repository;
    }

    public CareerRole addRole(CareerRole role) {
        return repository.save(role);
    }

    public List<CareerRole> getAllRoles() {
        return repository.findAll();
    }

    public List<CareerRole> getRolesByDomain(CareerDomain domain) {
        return repository.findByCareerDomain(domain);
    }

    public CareerRole getRoleById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Role not found"));
    }

    public CareerRole updateRole(Long id, CareerRole updated) {
        CareerRole role = getRoleById(id);

        role.setRoleName(updated.getRoleName());
        role.setDescription(updated.getDescription());
        role.setCareerDomain(updated.getCareerDomain());
        role.setMinScore(updated.getMinScore());

        return repository.save(role);
    }

    public void deleteRole(Long id) {
        repository.deleteById(id);
    }
}
