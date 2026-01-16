package com.example.careeradvisor.controller;

import com.example.careeradvisor.dto.CareerRequestDTO;
import com.example.careeradvisor.service.MLService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/career")
@CrossOrigin
public class CareerController {

    private final MLService mlService;

    public CareerController(MLService mlService) {
        this.mlService = mlService;
    }

    @PostMapping("/predict")
    public Map<String, Object> predict(@RequestBody CareerRequestDTO dto) {
        return mlService.getPrediction(dto);
    }
}
