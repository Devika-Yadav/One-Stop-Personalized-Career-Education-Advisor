package com.careeradvisor.backend.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> handleResourceNotFound(ResourceNotFoundException ex) {
        // Just return the message as plain text
        return ResponseEntity.ok(ex.getMessage());
//        return ResponseEntity.ok(Map.of("message", ex.getMessage()));

    }
}
