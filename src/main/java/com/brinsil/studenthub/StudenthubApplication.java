package com.brinsil.studenthub;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class StudenthubApplication {
	public static void main(String[] args) {
		SpringApplication.run(StudenthubApplication.class, args);
	}
}
