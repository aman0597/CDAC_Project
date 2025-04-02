package com.example.dafodils_gateentry.service;

import com.example.dafodils_gateentry.model.SocietyMember;
import com.example.dafodils_gateentry.repository.SocietyMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SocietyMemberService {

    @Autowired
    private SocietyMemberRepository societyMemberRepository;

    public SocietyMember save(SocietyMember member) {
        return societyMemberRepository.save(member);
    }

    public Optional<SocietyMember> findByEmail(String email) {
        return societyMemberRepository.findByEmail(email);
    }

    public Optional<SocietyMember> findByRoomNumber(String roomNo) {
        return societyMemberRepository.findByRoomNumber(roomNo);
    }

    public boolean isRoomNumberValid(String roomNo) {
        return societyMemberRepository.existsByRoomNumber(roomNo);
    }
}
