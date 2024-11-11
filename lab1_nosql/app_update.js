const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const Employee = require('./employeeSchema-Model');

const uri =  "mongodb://localhost:27017";

mongoose.connect(uri,{'dbName':'employeeDB'})
    .then(() => {
        console.log("Connected to MongoDB");

        // Update one record in employee
        return Employee.updateOne({ emp_name: "John Doe" },
            { emp_email: "jdoe@some.com" });
    })
    .then((updateOneResult) => {
        console.log("Updated Docs for updateOne:", updateOneResult);
        console.log("One record updated");

        // Update many records in employees
        //The below function will look for employees with age graeter then 20 and update the location of all of these employees with NewYork
        return Employee.updateMany({ emp_age: { $gt: 20 } },
            { emp_location: "NewYork" });
    })
    .then((updateManyResult) => {
        console.log("Updated Docs for updateMany:", updateManyResult);
        console.log("Many records updated");

    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        mongoose.connection.close(); // Close the MongoDB connection
    });