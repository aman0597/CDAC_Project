package com.example.dafodils_gateentry.service;

import com.example.dafodils_gateentry.dto.VisitorLoginRequest;
import com.example.dafodils_gateentry.dto.VisitorRegistrationRequest;
import com.example.dafodils_gateentry.model.Visitor;
import com.example.dafodils_gateentry.repository.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VisitorService {

    @Autowired
    private VisitorRepository visitorRepository;

    public boolean registerVisitor(VisitorRegistrationRequest request) {
        if (visitorRepository.existsById(request.getEmail())) {
            return false; // Email already exists
        }

        Visitor visitor = new Visitor();
        visitor.setEmail(request.getEmail());
        visitor.setPassword(request.getPassword()); // Plain text password
        visitorRepository.save(visitor);
        return true;
    }

    public boolean authenticateVisitor(VisitorLoginRequest request) {
        Visitor visitor = visitorRepository.findById(request.getEmail()).orElse(null);
        if (visitor != null && request.getPassword().equals(visitor.getPassword())) {
            return true;
        }
        return false;
    }
}
