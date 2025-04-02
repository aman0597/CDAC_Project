package com.example.dafodils_gateentry.model;

import jakarta.persistence.*;

@Entity
@Table(name = "visitor_requests")
public class VisitorRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "visitor_name", nullable = false)
    private String visitorName;

    @Column(name = "purpose", nullable = false)
    private String purpose;

    @ManyToOne
    @JoinColumn(name = "society_member_id", nullable = false)
    private SocietyMember societyMember;

    @Column(name = "room_number", nullable = false)
    private String roomNumber;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVisitorName() {
        return visitorName;
    }

    public void setVisitorName(String visitorName) {
        this.visitorName = visitorName;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public SocietyMember getSocietyMember() {
        return societyMember;
    }

    public void setSocietyMember(SocietyMember societyMember) {
        this.societyMember = societyMember;
    }

    public String getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }
}
