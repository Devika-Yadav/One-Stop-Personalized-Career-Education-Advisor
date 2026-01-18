package com.example.careeradvisor.controller;

import com.example.careeradvisor.dto.CareerRequestDTO;
import com.example.careeradvisor.dto.CareerResponseDTO;
import com.example.careeradvisor.service.MLService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/career")
@CrossOrigin(origins = "*")
public class CareerController {

    @Autowired
    private MLService mlService;

    @PostMapping("/predict")
    public CareerResponseDTO predict(@RequestBody CareerRequestDTO request) {
        return mlService.getPrediction(request);
    }
}
