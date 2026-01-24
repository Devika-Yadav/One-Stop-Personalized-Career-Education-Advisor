package com.careeradvisor.backend.controller;

import com.careeradvisor.backend.model.AssessmentAttempt;
import com.careeradvisor.backend.model.AssessmentQuestion;
import com.careeradvisor.backend.repository.AssessmentQuestionRepository;
import com.careeradvisor.backend.service.AssessmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/assessment")
public class AssessmentController {

    private final AssessmentService service;
    private final AssessmentQuestionRepository questionRepo;

    public AssessmentController(AssessmentService service,
                                AssessmentQuestionRepository questionRepo) {
        this.service = service;
        this.questionRepo = questionRepo;
    }

    // Start test
    @PostMapping("/start/{userId}")
    public AssessmentAttempt start(@PathVariable Long userId) {
        return service.startAssessment(userId);
    }

    // Get questions
    @GetMapping("/questions/{category}")
    public List<AssessmentQuestion> getQuestions(@PathVariable String category) {
        return questionRepo.findByCategory(category);
    }

    // Submit answer
    @PostMapping("/submit")
    public String submit(@RequestBody Map<String, String> req) {
        service.submitResponse(
                Long.parseLong(req.get("attemptId")),
                Long.parseLong(req.get("questionId")),
                req.get("selectedOption")
        );
        return "Answer saved";
    }

    // Finish test
    @PostMapping("/finish/{attemptId}")
    public String finish(@PathVariable Long attemptId) {
        service.calculateScores(attemptId);
        return "Assessment completed";
    }
}
