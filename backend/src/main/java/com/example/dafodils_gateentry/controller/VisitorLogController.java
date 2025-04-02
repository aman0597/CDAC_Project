package com.example.dafodils_gateentry.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dafodils_gateentry.model.SocietyMember;
import com.example.dafodils_gateentry.service.SocietyMemberService;
import com.example.dafodils_gateentry.service.VisitorLogService;

@RestController
@RequestMapping("/api/visitor-entries")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class VisitorLogController {

    @Autowired
    private VisitorLogService visitorLogService;

    @Autowired
    private SocietyMemberService societyMemberService;

    @PostMapping("/record")
    public ResponseEntity<String> logVisitorEntry(
        @RequestParam String roomNumber,
        @RequestParam(required = false) String vehicleNumber,
        @RequestParam String entryTime,
        @RequestParam String entryDate 
    ) {
        Optional<SocietyMember> memberOpt = societyMemberService.findByRoomNumber(roomNumber);
        if (memberOpt.isPresent()) {
            SocietyMember member = memberOpt.get();

            visitorLogService.logVisitorEntry(member, vehicleNumber, entryTime, entryDate);

            return ResponseEntity.ok("Visitor entry logged successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Society member not found");
        }
    }
}
