package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.UserActivity;
import com.careeradvisor.backend.service.UserActivityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activity")
public class UserActivityController {

    private final UserActivityService service;

    public UserActivityController(UserActivityService service) {
        this.service = service;
    }

    @PostMapping("/log")
    public UserActivity log(@RequestBody UserActivity activity) {
        return service.log(activity);
    }

    @GetMapping("/user/{userId}")
    public List<UserActivity> get(@PathVariable Long userId) {
        return service.getByUser(userId);
    }
}
