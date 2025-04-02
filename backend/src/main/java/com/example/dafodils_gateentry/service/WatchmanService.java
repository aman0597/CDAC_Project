package com.example.dafodils_gateentry.service;

import com.example.dafodils_gateentry.model.VisitorRequest;
import com.example.dafodils_gateentry.model.Watchman;
import com.example.dafodils_gateentry.repository.VisitorRequestRepository;
import com.example.dafodils_gateentry.repository.WatchmanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WatchmanService {

	@Autowired
	private WatchmanRepository watchmanRepository;

	@Autowired
	private VisitorRequestRepository visitorRequestRepository;

	public void registerWatchman(Watchman watchman) {
		watchmanRepository.save(watchman);
	}

	public Optional<Watchman> findByEmail(String email) {
		return watchmanRepository.findByEmail(email);
	}

	public boolean validatePassword(Watchman watchman, String password) {
		return watchman.getPassword().equals(password);
	}

	public Watchman getWatchmanById(Long watchmanId) {
		return watchmanRepository.findById(watchmanId).orElse(null);
	}

	public List<VisitorRequest> getVisitorRequestsByRoomNumber(String roomNumber) {
		return visitorRequestRepository.findByRoomNumber(roomNumber);
	}
}
