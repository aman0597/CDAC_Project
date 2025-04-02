package com.example.dafodils_gateentry.repository;

import com.example.dafodils_gateentry.model.SocietyMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SocietyMemberRepository extends JpaRepository<SocietyMember, Long> {
    Optional<SocietyMember> findByEmail(String email);
    boolean existsByRoomNumber(String roomNumber);
    Optional<SocietyMember> findByRoomNumber(String roomNumber);
}
