package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.ChatbotLog;
import com.careeradvisor.backend.service.ChatbotLogService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chatbot")
public class ChatbotLogController {

    private final ChatbotLogService service;

    public ChatbotLogController(ChatbotLogService service) {
        this.service = service;
    }

    @PostMapping("/log")
    public ChatbotLog log(@RequestBody ChatbotLog log) {
        return service.save(log);
    }

    @GetMapping("/user/{userId}")
    public List<ChatbotLog> get(@PathVariable Long userId) {
        return service.getUserChats(userId);
    }
}
