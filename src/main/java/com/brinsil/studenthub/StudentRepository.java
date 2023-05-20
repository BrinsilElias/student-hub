package com.brinsil.studenthub;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository
        extends MongoRepository<Students, String> {
}
