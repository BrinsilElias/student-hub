package com.brinsil.studenthub;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document
public class Students {
    @Id
    private String id;
    private String admission_no;
    private String name;
    private String student_class;
    private String division;
    private Gender gender;
    private LocalDate date_of_birth;

    public Students(String admission_no, String name, String student_class, String division, Gender gender, LocalDate date_of_birth) {
        this.admission_no = admission_no;
        this.name = name;
        this.student_class = student_class;
        this.division = division;
        this.gender = gender;
        this.date_of_birth = date_of_birth;
    }
}
