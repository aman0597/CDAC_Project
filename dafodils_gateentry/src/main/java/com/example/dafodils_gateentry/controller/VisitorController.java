package com.example.dafodils_gateentry.controller;

import com.example.dafodils_gateentry.dto.VisitorLoginRequest;
import com.example.dafodils_gateentry.dto.VisitorRegistrationRequest;
import com.example.dafodils_gateentry.service.VisitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/visitors")
public class VisitorController {

    @Autowired
    private VisitorService visitorService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody VisitorRegistrationRequest request) {
        boolean isRegistered = visitorService.registerVisitor(request);
        if (isRegistered) {
            return ResponseEntity.ok("Registration successful");
        } else {
            return ResponseEntity.status(400).body("Registration failed");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody VisitorLoginRequest request) {
        boolean isAuthenticated = visitorService.authenticateVisitor(request);
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }
}
