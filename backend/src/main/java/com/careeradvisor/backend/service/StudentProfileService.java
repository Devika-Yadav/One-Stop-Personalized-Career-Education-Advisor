package com.careeradvisor.backend.service;

import com.careeradvisor.backend.model.StudentProfile;
import com.careeradvisor.backend.model.User;
import com.careeradvisor.backend.repository.StudentProfileRepository;
import org.springframework.stereotype.Service;

@Service
public class StudentProfileService {

    private final StudentProfileRepository repo;

    public StudentProfileService(StudentProfileRepository repo) {
        this.repo = repo;
    }

    public StudentProfile saveProfile(StudentProfile profile) {
        validateStream(profile);
        calculateAggregate(profile);
        return repo.save(profile);
    }

    public StudentProfile getProfileByUser(com.careeradvisor.backend.model.User user) {
        return repo.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Profile not found"));
    }

    private void validateStream(StudentProfile p) {
        switch (p.getStream()) {
            case "MPC" -> {
                require(p.getMathsMarks(), "Maths");
                require(p.getPhysicsMarks(), "Physics");
                require(p.getChemistryMarks(), "Chemistry");
            }
            case "BiPC" -> {
                require(p.getBiologyMarks(), "Biology");
                require(p.getPhysicsMarks(), "Physics");
                require(p.getChemistryMarks(), "Chemistry");
            }
            case "CEC" -> {
                require(p.getCivicsMarks(), "Civics");
                require(p.getEconomicsMarks(), "Economics");
                require(p.getCommerceMarks(), "Commerce");
            }
            case "MEC" -> {
                require(p.getMathsMarks(), "Maths");
                require(p.getEconomicsMarks(), "Economics");
                require(p.getCommerceMarks(), "Commerce");
            }
            case "HEC" -> {
                require(p.getHistoryMarks(), "History");
                require(p.getEconomicsMarks(), "Economics");
                require(p.getCivicsMarks(), "Civics");
            }
            default -> throw new RuntimeException("Invalid stream");
        }
    }

    private void require(Integer value, String subject) {
        if (value == null)
            throw new RuntimeException(subject + " marks required");
    }

    private void calculateAggregate(StudentProfile p) {
        int total = 0, count = 0;

        Integer[] marks = {
                p.getMathsMarks(), p.getPhysicsMarks(), p.getChemistryMarks(),
                p.getBiologyMarks(), p.getEconomicsMarks(),
                p.getCommerceMarks(), p.getCivicsMarks(), p.getHistoryMarks()
        };

        for (Integer m : marks) {
            if (m != null) {
                total += m;
                count++;
            }
        }

        p.setTotalMarks(total);
        p.setPercentage(count == 0 ? 0 : (double) total / count);
    }
    public StudentProfile updateProfile(User user, StudentProfile updated) {

        StudentProfile existing = repo.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        // keep same profileId & user
        updated.setProfileId(existing.getProfileId());
        updated.setUser(user);

        // increment version
        updated.setProfileVersion(existing.getProfileVersion() + 1);

        validateStream(updated);
        calculateAggregate(updated);

        return repo.save(updated);
    }

}
