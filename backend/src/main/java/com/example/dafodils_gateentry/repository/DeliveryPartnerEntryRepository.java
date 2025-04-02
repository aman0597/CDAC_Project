package com.example.dafodils_gateentry.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dafodils_gateentry.model.DeliveryPartnerEntry;

@Repository
public interface DeliveryPartnerEntryRepository extends JpaRepository<DeliveryPartnerEntry, Long> {
}
