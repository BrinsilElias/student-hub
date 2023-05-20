package com.brinsil.studenthub;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public Students addStudent(Students student) {
        String admissionNumber = generateUniqueAdmissionNumber();
        student.setAdmission_no(admissionNumber);
        return studentRepository.save(student);
    }

    private String generateUniqueAdmissionNumber() {
        long count = studentRepository.count();
        return String.format("R-%03d", count + 1);
    }

    public List<Students> getAllStudents() {
        Sort sort = Sort.by(Sort.Direction.ASC, "name");
        return studentRepository.findAll(sort);
    }


}
