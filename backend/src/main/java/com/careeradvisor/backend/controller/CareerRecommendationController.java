package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.*;
import com.careeradvisor.backend.service.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/recommendation")
public class CareerRecommendationController {

    private final CareerRecommendationService recommendationService;
    private final AuthService authService;
    private final CareerDomainService domainService;
    private final CareerRoleService roleService;

    public CareerRecommendationController(
            CareerRecommendationService recommendationService,
            AuthService authService,
            CareerDomainService domainService,
            CareerRoleService roleService) {

        this.recommendationService = recommendationService;
        this.authService = authService;
        this.domainService = domainService;
        this.roleService = roleService;
    }

    // Save recommendation (called after prediction logic)
    @PostMapping("/save")
    public CareerRecommendation save(@RequestBody Map<String, String> req) {

        User user = authService.getUserByEmail(req.get("email"));
        CareerDomain domain = domainService.getDomainById(
                Long.parseLong(req.get("domainId"))
        );

        CareerRole role = null;
        if (req.get("roleId") != null) {
            role = roleService.getRoleById(
                    Long.parseLong(req.get("roleId"))
            );
        }

        Double score = Double.parseDouble(req.get("finalScore"));
        String source = req.get("source");

        return recommendationService.saveRecommendation(
                user, domain, role, score, source
        );
    }

    // Get recommendation history of student
    @GetMapping("/user")
    public List<CareerRecommendation> getUserRecommendations(
            @RequestParam String email) {

        User user = authService.getUserByEmail(email);
        return recommendationService.getUserRecommendations(user);
    }
}
