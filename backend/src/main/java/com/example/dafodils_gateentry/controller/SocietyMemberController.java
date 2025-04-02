package com.example.dafodils_gateentry.controller;

import com.example.dafodils_gateentry.model.SocietyMember;
import com.example.dafodils_gateentry.model.VisitorRequest;
import com.example.dafodils_gateentry.service.SocietyMemberService;
import com.example.dafodils_gateentry.service.VisitorRequestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/society-members")
@CrossOrigin(origins = "http://localhost:3000")
public class SocietyMemberController {

    @Autowired
    private SocietyMemberService societyMemberService;

    @Autowired
    private VisitorRequestService visitorRequestService;
    
    @Autowired
    private PasswordEncoder encoder;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody SocietyMember loginRequest) {
        Optional<SocietyMember> member = societyMemberService.findByEmail(loginRequest.getEmail());
   
        if (member.isPresent()) {
            SocietyMember existingMember = member.get();
            if (encoder.matches(loginRequest.getPassword(), existingMember.getPassword())) {
                return ResponseEntity.ok("Login successful");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody SocietyMember newMember) {
        Optional<SocietyMember> existingMember = societyMemberService.findByEmail(newMember.getEmail());
        if (existingMember.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already in use");
        }
        SocietyMember member = new SocietyMember();
        member.setName(newMember.getName());
        member.setPhoneNumber(newMember.getPhoneNumber());
        member.setRoomNumber(newMember.getRoomNumber());
        member.setEmail(newMember.getEmail());
        member.setPassword(encoder.encode(newMember.getPassword()));
        societyMemberService.save(member);
        return ResponseEntity.ok("Registration successful");
    }

    @PostMapping("/visitor-request")
    public ResponseEntity<String> createVisitorRequest(@RequestBody VisitorRequest request) {
        try {
            if (request.getSocietyMember() == null || request.getSocietyMember().getRoomNumber().isEmpty()) {
                return ResponseEntity.badRequest().body("Invalid room number.");
            }

            Optional<SocietyMember> member = societyMemberService.findByRoomNumber(request.getSocietyMember().getRoomNumber());
            if (member.isPresent()) {
                request.setSocietyMember(member.get());
                visitorRequestService.saveOrUpdateRequest(request);
                return ResponseEntity.ok("Visitor request created successfully.");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Room number does not exist.");
            }
        } catch (Exception e) {
            e.printStackTrace();  
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while creating the request.");
        }
    }


}
