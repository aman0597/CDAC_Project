package com.example.dafodils_gateentry.controller;

import com.example.dafodils_gateentry.dto.SocietyMemberLoginRequest;
import com.example.dafodils_gateentry.dto.SocietyMemberRegistrationRequest;
import com.example.dafodils_gateentry.service.SocietyMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/society-members")
@CrossOrigin(origins = "http://localhost:3000") // Allow CORS for this controller
public class SocietyMemberController {

    @Autowired
    private SocietyMemberService societyMemberService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody SocietyMemberLoginRequest request) {
        boolean isAuthenticated = societyMemberService.authenticate(request.getEmail(), request.getPassword());

        if (isAuthenticated) {
            return ResponseEntity.ok().body("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody SocietyMemberRegistrationRequest request) {
        boolean success = societyMemberService.registerSocietyMember(
            request.getEmail(),
            request.getPassword(),
            request.getConfirmPassword(),
            request.getName(),
            request.getPhoneNumber(),
            request.getFlatRoomNumber()
        );

        if (success) {
            return ResponseEntity.ok().body("Registration successful");
        } else {
            return ResponseEntity.status(400).body("Registration failed: Invalid data or email already exists");
        }
    }
}
