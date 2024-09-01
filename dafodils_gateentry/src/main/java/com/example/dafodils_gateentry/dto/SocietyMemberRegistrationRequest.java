package com.example.dafodils_gateentry.dto;

public class SocietyMemberRegistrationRequest {
    
    private String email;
    private String password;
    private String confirmPassword;
    private String name;
    private String phoneNumber;
    private String flatRoomNumber;

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getFlatRoomNumber() {
        return flatRoomNumber;
    }

    public void setFlatRoomNumber(String flatRoomNumber) {
        this.flatRoomNumber = flatRoomNumber;
    }
}
