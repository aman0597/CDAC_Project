package com.example.dafodils_gateentry.controller;

import com.example.dafodils_gateentry.dto.WatchmanLoginRequest;
import com.example.dafodils_gateentry.service.WatchmanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/watchman")
@CrossOrigin(origins = "http://localhost:3000")
public class WatchmanController {

    @Autowired
    private WatchmanService watchmanService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody WatchmanLoginRequest request) {
        boolean isAuthenticated = watchmanService.authenticate(request.getEmail(), request.getPassword());
        if (isAuthenticated) {
            return ResponseEntity.ok().body("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody WatchmanLoginRequest request) {
        boolean success = watchmanService.registerWatchman(request.getEmail(), request.getPassword());

        if (success) {
            return ResponseEntity.ok().body("Registration successful");
        } else {
            return ResponseEntity.status(400).body("Registration failed: Invalid email or password, or email already exists");
        }
    }
}
