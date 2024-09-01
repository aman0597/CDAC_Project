package com.example.dafodils_gateentry.repository;

import com.example.dafodils_gateentry.model.Visitor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitorRepository extends JpaRepository<Visitor, String> {
}
