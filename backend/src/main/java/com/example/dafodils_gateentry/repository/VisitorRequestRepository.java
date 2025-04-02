package com.example.dafodils_gateentry.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dafodils_gateentry.model.VisitorRequest;

@Repository
public interface VisitorRequestRepository extends JpaRepository<VisitorRequest, Long> {

	List<VisitorRequest> findByRoomNumber(String roomNumber);

}
