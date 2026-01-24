package com.careeradvisor.backend.service;

import com.careeradvisor.backend.model.UserActivity;
import com.careeradvisor.backend.repository.UserActivityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserActivityService {

    private final UserActivityRepository repo;

    public UserActivityService(UserActivityRepository repo) {
        this.repo = repo;
    }

    public UserActivity log(UserActivity activity) {
        return repo.save(activity);
    }

    public List<UserActivity> getByUser(Long userId) {
        return repo.findByUserId(userId);
    }
}
