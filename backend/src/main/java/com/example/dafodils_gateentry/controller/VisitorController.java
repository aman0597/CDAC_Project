package com.example.dafodils_gateentry.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.example.dafodils_gateentry.model.Visitor;
import com.example.dafodils_gateentry.service.VisitorService;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/visitors")
@CrossOrigin(origins = "http://localhost:3000")
public class VisitorController {

    @Autowired
    private VisitorService visitorService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> registerVisitor(@RequestBody Visitor visitor) {
        if (visitorService.findByEmail(visitor.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already in use");
        }

        visitor.setPassword(passwordEncoder.encode(visitor.getPassword()));
        visitorService.registerVisitor(visitor);

        return ResponseEntity.ok("Visitor registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginVisitor(@RequestBody Map<String, String> requestBody) {
        String email = requestBody.get("email");
        String password = requestBody.get("password");

        if (email == null || password == null) {
            return ResponseEntity.badRequest().body("Email and password are required");
        }

        Optional<Visitor> visitorOpt = visitorService.findByEmail(email);
        if (visitorOpt.isPresent()) {
            Visitor visitor = visitorOpt.get();
            if (passwordEncoder.matches(password, visitor.getPassword())) {
                return ResponseEntity.ok("Login successful");
            } else {
                System.out.println("Password does not match");
            }
        } else {
            System.out.println("Email not found");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }

}
