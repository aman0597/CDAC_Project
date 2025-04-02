package com.example.dafodils_gateentry;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
public class DatabaseInitializer {

    @Bean
    public CommandLineRunner initializeDatabase(JdbcTemplate jdbcTemplate) {
        return args -> {
            jdbcTemplate.execute("CREATE DATABASE IF NOT EXISTS daffodils_db");
            jdbcTemplate.execute("USE daffodils_db");
        };
    }
}
