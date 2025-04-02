package com.example.dafodils_gateentry.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dafodils_gateentry.model.VisitorRequest;
import com.example.dafodils_gateentry.repository.VisitorRequestRepository;

@Service
public class VisitorRequestService {

    @Autowired
    private VisitorRequestRepository visitorRequestRepository;

    public VisitorRequest saveOrUpdateRequest(VisitorRequest visitorRequest) {
        return visitorRequestRepository.save(visitorRequest);
    }

    public List<VisitorRequest> findByRoomNumber(String roomNumber) {
        return visitorRequestRepository.findByRoomNumber(roomNumber);
    }

    public Optional<VisitorRequest> findById(Long id) {
        return visitorRequestRepository.findById(id);
    }

    public void deleteRequestById(Long id) {
        visitorRequestRepository.deleteById(id);
    }
}
