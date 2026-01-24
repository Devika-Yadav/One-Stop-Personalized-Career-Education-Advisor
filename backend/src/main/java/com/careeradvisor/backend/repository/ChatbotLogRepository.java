package com.careeradvisor.backend.repository;

import com.careeradvisor.backend.model.ChatbotLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatbotLogRepository extends JpaRepository<ChatbotLog, Long> {
    List<ChatbotLog> findByUserId(Long userId);
}
