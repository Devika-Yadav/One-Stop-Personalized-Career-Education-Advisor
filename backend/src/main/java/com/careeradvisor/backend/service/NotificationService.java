package com.careeradvisor.backend.service;

import com.careeradvisor.backend.model.Notification;
import com.careeradvisor.backend.repository.NotificationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    private final NotificationRepository repo;

    public NotificationService(NotificationRepository repo) {
        this.repo = repo;
    }

    public Notification send(Notification n) {
        return repo.save(n);
    }

    public List<Notification> getUserNotifications(Long userId) {
        return repo.findByUserId(userId);
    }

    public Notification markRead(Long id) {
        Notification n = repo.findById(id).orElseThrow();
        n.setReadStatus(true);
        return repo.save(n);
    }
}
