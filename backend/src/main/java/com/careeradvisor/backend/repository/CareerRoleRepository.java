package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.CareerRole;
import com.careeradvisor.backend.model.CareerDomain;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CareerRoleRepository extends JpaRepository<CareerRole, Long> {

    List<CareerRole> findByCareerDomain(CareerDomain domain);

    Optional<CareerRole> findByRoleName(String roleName);
}
