package com.careeradvisor.backend.service;

import com.careeradvisor.backend.model.ChatbotLog;
import com.careeradvisor.backend.repository.ChatbotLogRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatbotLogService {

    private final ChatbotLogRepository repo;

    public ChatbotLogService(ChatbotLogRepository repo) {
        this.repo = repo;
    }

    public ChatbotLog save(ChatbotLog log) {
        return repo.save(log);
    }

    public List<ChatbotLog> getUserChats(Long userId) {
        return repo.findByUserId(userId);
    }
}
