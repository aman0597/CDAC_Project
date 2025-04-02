package com.example.dafodils_gateentry.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dafodils_gateentry.model.DeliveryPartnerEntry;
import com.example.dafodils_gateentry.repository.DeliveryPartnerEntryRepository;

@Service
public class DeliveryPartnerEntryService {

    @Autowired
    private DeliveryPartnerEntryRepository repository;

    public DeliveryPartnerEntry saveEntry(DeliveryPartnerEntry entry) {
        return repository.save(entry);
    }
}
