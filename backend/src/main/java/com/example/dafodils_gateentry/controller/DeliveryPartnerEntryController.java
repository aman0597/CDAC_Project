package com.example.dafodils_gateentry.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.dafodils_gateentry.model.DeliveryPartnerEntry;
import com.example.dafodils_gateentry.service.DeliveryPartnerEntryService;

@RestController
@RequestMapping("/api/delivery-partners")
@CrossOrigin(origins = "http://localhost:3000")
public class DeliveryPartnerEntryController {

    @Autowired
    private DeliveryPartnerEntryService service;

    @PostMapping
    public ResponseEntity<String> createEntry(@RequestBody DeliveryPartnerEntry entry) {
        service.saveEntry(entry);
        return ResponseEntity.ok("Entry successfully added!");
    }
}
