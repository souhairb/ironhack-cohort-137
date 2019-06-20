const mongoose = require("mongoose"); // import mongoose dependencie

const Schema = mongoose.Schema; // assign the Schema constructor to a constant

// ... instanciate the Schema with option (the blueprint)
const studentSchema = new Schema({
    age: Number,
    cohort: Number,
    email: String,
    firstname: String,
    lastname: String
});

const studentModel = mongoose.model("Student", studentSchema); 
// create a model using the schema
// "students" collection will be created when inserting the first student in database
module.exports = studentModel; // exporting the model to use it outside this file