package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.Notification;
import com.careeradvisor.backend.service.NotificationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notification")
public class NotificationController {

    private final NotificationService service;

    public NotificationController(NotificationService service) {
        this.service = service;
    }

    @PostMapping("/send")
    public Notification send(@RequestBody Notification n) {
        return service.send(n);
    }

    @GetMapping("/user/{userId}")
    public List<Notification> get(@PathVariable Long userId) {
        return service.getUserNotifications(userId);
    }

    @PutMapping("/read/{id}")
    public Notification markRead(@PathVariable Long id) {
        return service.markRead(id);
    }
}
