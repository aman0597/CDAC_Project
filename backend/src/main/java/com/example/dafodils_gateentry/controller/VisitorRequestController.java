package com.example.dafodils_gateentry.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.dafodils_gateentry.model.VisitorRequest;
import com.example.dafodils_gateentry.service.VisitorRequestService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class VisitorRequestController {

	@Autowired
	private VisitorRequestService visitorRequestService;

	@GetMapping("/pending-requests")
	public ResponseEntity<List<VisitorRequest>> getPendingRequests(@RequestParam String roomNumber) {
		try {
			List<VisitorRequest> requests = visitorRequestService.findByRoomNumber(roomNumber);
			return ResponseEntity.ok(requests);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@PostMapping("/visitor-request")
	public ResponseEntity<VisitorRequest> createVisitorRequest(@RequestBody VisitorRequest visitorRequest) {
		try {
			VisitorRequest savedRequest = visitorRequestService.saveOrUpdateRequest(visitorRequest);
			return ResponseEntity.status(HttpStatus.CREATED).body(savedRequest);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.badRequest().body(null);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

}
