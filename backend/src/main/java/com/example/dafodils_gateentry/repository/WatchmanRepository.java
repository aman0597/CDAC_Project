package com.example.dafodils_gateentry.repository;

import com.example.dafodils_gateentry.model.Watchman;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WatchmanRepository extends JpaRepository<Watchman, Long> {
	Optional<Watchman> findByEmail(String email);
}
