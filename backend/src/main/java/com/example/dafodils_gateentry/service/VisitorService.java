package com.example.dafodils_gateentry.service;

import com.example.dafodils_gateentry.model.Visitor;
import com.example.dafodils_gateentry.repository.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VisitorService {

    @Autowired
    private VisitorRepository visitorRepository;
    
    public Visitor save(Visitor visitor) {
        return visitorRepository.save(visitor);
    }

    public Optional<Visitor> findByEmail(String email) {
        return visitorRepository.findByEmail(email);
    }

    public void registerVisitor(Visitor visitor) {
        // Directly save the visitor without encoding the password
        save(visitor);
    }

    public boolean authenticateVisitor(String email, String password) {
        Optional<Visitor> visitorOptional = visitorRepository.findByEmail(email);
        if (visitorOptional.isPresent()) {
            Visitor visitor = visitorOptional.get();
            return password.equals(visitor.getPassword());
        }
        return false;
    }

    public Visitor getVisitorById(Long visitorId) {
        return visitorRepository.findById(visitorId).orElse(null);
    }
}
