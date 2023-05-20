db = db.getSiblingDB('StudentsDb');

// Check if the 'students' collection already exists
if (!db.getCollectionNames().includes('students')) {
    // If not, create the 'students' collection and insert some data
    db.createCollection('students');
    db.students.insertMany([
        {"admission_no":"R-001","name":"Aravind Suresh","student_class":"X","division":"A","gender":"MALE","date_of_birth":ISODate("2000-06-24"),"_class":"com.brinsil.studenthub.Students"},
        {"admission_no":"R-002","name":"Hari Sankar","student_class":"XI","division":"B","gender":"MALE","date_of_birth":ISODate("1999-10-24"),"_class":"com.brinsil.studenthub.Students"},
        {"admission_no":"R-003","name":"Joydeep Raina","student_class":"X","division":"C","gender":"MALE","date_of_birth":ISODate("2000-06-18"),"_class":"com.brinsil.studenthub.Students"},
        {"admission_no":"R-004","name":"Shruthi Ramesh","student_class":"XII","division":"A","gender":"FEMALE","date_of_birth":ISODate("1998-05-06"),"_class":"com.brinsil.studenthub.Students"},
        {"admission_no":"R-005","name":"Sandra Sathish","student_class":"XII","division":"A","gender":"FEMALE","date_of_birth":ISODate("1999-04-30"),"_class":"com.brinsil.studenthub.Students"},
        {"admission_no":"R-006","name":"Akash Rathode","student_class":"XII","division":"B","gender":"MALE","date_of_birth":ISODate("1998-12-31"),"_class":"com.brinsil.studenthub.Students"},
        {"admission_no":"R-007","name":"Jenny Uday","student_class":"XI","division":"A","gender":"FEMALE","date_of_birth":ISODate("1998-07-24"),"_class":"com.brinsil.studenthub.Students"},
        {"admission_no":"R-008","name":"Kiran Naik","student_class":"X","division":"C","gender":"MALE","date_of_birth":ISODate("2001-09-22"),"_class":"com.brinsil.studenthub.Students"},
        {"admission_no":"R-009","name":"Gokul Yadav","student_class":"XI","division":"B","gender":"MALE","date_of_birth":ISODate("2000-08-12"),"_class":"com.brinsil.studenthub.Students"},
        {"admission_no":"R-010","name":"Harish Sharma","student_class":"XI","division":"A","gender":"MALE","date_of_birth":ISODate("2000-06-23"),"_class":"com.brinsil.studenthub.Students"},
        {"admission_no":"R-011","name":"Archana Babu","student_class":"XII","division":"C","gender":"FEMALE","date_of_birth":ISODate("1999-08-13"),"_class":"com.brinsil.studenthub.Students"},
        {"admission_no":"R-012","name":"Divya Nayak","student_class":"XII","division":"B","gender":"FEMALE","date_of_birth":ISODate("1999-07-15"),"_class":"com.brinsil.studenthub.Students"},
        {"admission_no":"R-013","name":"Damini Yadav","student_class":"XII","division":"C","gender":"FEMALE","date_of_birth":ISODate("1999-08-15"),"_class":"com.brinsil.studenthub.Students"}
    ]);
}