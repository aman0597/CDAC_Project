package com.example.dafodils_gateentry.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dafodils_gateentry.model.SocietyMember;
import com.example.dafodils_gateentry.model.VisitorLog;
import com.example.dafodils_gateentry.repository.VisitorLogRepository;

@Service
public class VisitorLogService {

    @Autowired
    private VisitorLogRepository visitorLogRepository;

    public void logVisitorEntry(SocietyMember societyMember, String vehicleNumber, String entryTime, String visitDate) {
        VisitorLog visitorLog = new VisitorLog();
        visitorLog.setSocietyMember(societyMember);
        visitorLog.setVehicleNumber(vehicleNumber);
        visitorLog.setEntryTime(entryTime);
        visitorLog.setVisitDate(visitDate);

        visitorLogRepository.save(visitorLog);
    }
}
