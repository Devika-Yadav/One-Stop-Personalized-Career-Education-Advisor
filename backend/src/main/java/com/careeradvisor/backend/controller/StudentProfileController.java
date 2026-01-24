package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.StudentProfile;
import com.careeradvisor.backend.model.User;
import com.careeradvisor.backend.service.AuthService;
import com.careeradvisor.backend.service.StudentProfileService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student-profile")
public class StudentProfileController {

    private final StudentProfileService profileService;
    private final AuthService authService;

    public StudentProfileController(StudentProfileService profileService,
                                    AuthService authService) {
        this.profileService = profileService;
        this.authService = authService;
    }

    @PostMapping("/save")
    public StudentProfile saveProfile(@RequestParam String email,
                                      @RequestBody StudentProfile profile) {

        User user = authService.getUserByEmail(email);
        profile.setUser(user);

        return profileService.saveProfile(profile);
    }

    @GetMapping("/get")
    public StudentProfile getProfile(@RequestParam String email) {

        User user = authService.getUserByEmail(email);
        return profileService.getProfileByUser(user);
    }
    @PutMapping("/update")
    public StudentProfile updateProfile(@RequestParam String email,
                                        @RequestBody StudentProfile profile) {

        User user = authService.getUserByEmail(email);
        return profileService.updateProfile(user, profile);
    }
}
