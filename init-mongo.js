db = db.getSiblingDB('StudentsDb');

// Check if the 'students' collection already exists
if (!db.getCollectionNames().includes('students')) {
    // If not, create the 'students' collection and insert some data
    db.createCollection('students');
}