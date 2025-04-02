package com.example.dafodils_gateentry.controller;

import com.example.dafodils_gateentry.model.SocietyMember;
import com.example.dafodils_gateentry.model.VisitorRequest;
import com.example.dafodils_gateentry.model.Watchman;
import com.example.dafodils_gateentry.repository.SocietyMemberRepository;
import com.example.dafodils_gateentry.service.SocietyMemberService;
import com.example.dafodils_gateentry.service.VisitorRequestService;
import com.example.dafodils_gateentry.service.WatchmanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/watchman")
@CrossOrigin(origins = "http://localhost:3000")
public class WatchmanController {

	@Autowired
	private WatchmanService watchmanService;

	@Autowired
	private VisitorRequestService visitorRequestService;

	@Autowired
	private SocietyMemberService societyMemberService;

	@Autowired
	private PasswordEncoder encoder;

	@PostMapping("/register")
	public ResponseEntity<String> registerWatchman(@RequestBody Watchman watchman) {
		try {
			if (watchman.getEmail() == null || watchman.getPassword() == null) {
				return ResponseEntity.badRequest().body("Email and password are required.");
			}

			if (watchmanService.findByEmail(watchman.getEmail()).isPresent()) {
				return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already in use.");
			}

			watchman.setPassword(encoder.encode(watchman.getPassword()));
			watchmanService.registerWatchman(watchman);
			return ResponseEntity.ok("Watchman registered successfully.");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("An error occurred while registering the watchman.");
		}
	}

	@PostMapping("/login")
	public ResponseEntity<String> loginWatchman(@RequestBody Map<String, String> requestBody) {
		String email = requestBody.get("email");
		String password = requestBody.get("password");

		if (email == null || password == null) {
			return ResponseEntity.badRequest().body("Email and password are required.");
		}

		Optional<Watchman> watchmanOpt = watchmanService.findByEmail(email);
		if (watchmanOpt.isPresent()) {
			Watchman watchman = watchmanOpt.get();
			if (encoder.matches(password, watchman.getPassword())) {
				return ResponseEntity.ok("Login successful.");
			}
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
	}

	@Autowired
	private SocietyMemberRepository societyMemberRepository;

	@PostMapping("/visitor-request")
	public ResponseEntity<String> createVisitorRequest(@RequestBody VisitorRequest request) {
		try {
			if (request.getSocietyMember() == null || request.getSocietyMember().getRoomNumber() == null) {
				return ResponseEntity.badRequest().body("Invalid room number.");
			}

			Optional<SocietyMember> member = societyMemberRepository
					.findByRoomNumber(request.getSocietyMember().getRoomNumber());
			if (member.isPresent()) {
				request.setSocietyMember(member.get());
				visitorRequestService.saveOrUpdateRequest(request);
				return ResponseEntity.ok("Visitor request created successfully.");
			} else {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Room number does not exist.");
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("An error occurred while creating the request.");
		}
	}

}