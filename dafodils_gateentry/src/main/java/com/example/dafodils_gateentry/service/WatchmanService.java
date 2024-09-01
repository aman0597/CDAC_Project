package com.example.dafodils_gateentry.service;

import com.example.dafodils_gateentry.model.Watchman;
import com.example.dafodils_gateentry.repository.WatchmanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class WatchmanService {

    @Autowired
    private WatchmanRepository watchmanRepository;

    private static final String PASSWORD_PATTERN = "^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[0-9]).{8,}$";
    private static final String EMAIL_PATTERN = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";

    public boolean registerWatchman(String email, String password) {
        if (watchmanRepository.existsById(email) || !isValidEmail(email) || !isValidPassword(password)) {
            return false; // Email already exists or invalid email/password
        }

        Watchman watchman = new Watchman();
        watchman.setEmail(email);
        watchman.setPassword(password); // Store password as plain text
        watchmanRepository.save(watchman);
        return true;
    }

    public boolean authenticate(String email, String password) {
        return watchmanRepository.findById(email)
                .map(watchman -> watchman.getPassword().equals(password))
                .orElse(false);
    }

    private boolean isValidPassword(String password) {
        return Pattern.compile(PASSWORD_PATTERN).matcher(password).matches();
    }

    private boolean isValidEmail(String email) {
        return Pattern.compile(EMAIL_PATTERN).matcher(email).matches();
    }
}
