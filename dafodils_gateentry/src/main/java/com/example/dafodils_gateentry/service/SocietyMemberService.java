package com.example.dafodils_gateentry.service;

import com.example.dafodils_gateentry.model.SocietyMember;
import com.example.dafodils_gateentry.repository.SocietyMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SocietyMemberService {

    @Autowired
    private SocietyMemberRepository societyMemberRepository;

    public boolean registerSocietyMember(String email, String password, String confirmPassword, String name, String phoneNumber, String flatOrRoomNumber) {
        if (societyMemberRepository.existsById(email)) {
            return false; // Email already exists
        }

        if (!password.equals(confirmPassword)) {
            return false; // Passwords do not match
        }

        // Validation for password
        if (!isValidPassword(password)) {
            return false; // Invalid password format
        }

        SocietyMember member = new SocietyMember();
        member.setEmail(email);
        member.setPassword(password); // Plain text password
        member.setName(name);
        member.setPhoneNumber(phoneNumber);
        member.setFlatNumber(flatOrRoomNumber);
        societyMemberRepository.save(member);
        return true;
    }

    public boolean authenticate(String email, String password) {
        SocietyMember member = societyMemberRepository.findById(email).orElse(null);

        if (member != null && member.getPassword().equals(password)) {
            return true; // Authentication successful
        }
        return false; // Authentication failed
    }

    private boolean isValidPassword(String password) {
        final int minLength = 6;
        return password.length() >= minLength &&
               password.chars().anyMatch(Character::isUpperCase) &&
               password.chars().anyMatch(c -> "!@#$%^&*(),.?\":{}|<>".indexOf(c) >= 0);
    }
}
