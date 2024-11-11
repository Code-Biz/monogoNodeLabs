const Employee = require('./employeeSchema-Model');
const mongoose = require('mongoose');


const uri =  "mongodb://localhost:27017/";
mongoose.connect(uri, {'dbName':'employeeDB'})
    .then(() => {
        console.log("Connected to MongoDB");
        // insertMany records into employee
        return Employee.insertMany([
                     { "emp_name": "Ray Renolds", "emp_age": 32, "emp_location": "Austin", "emp_email": "rayr@somewhere.com" },
                    { "emp_name": "Matt Aniston", "emp_age": 25, "emp_location": "Houston", "emp_email": "matta@somewhere.com" },
                    { "emp_name": "Monica Perry", "emp_age": 23, "emp_location": "New Jersey", "emp_email": "monicap@somewhere.com" },
                    { "emp_name": "Rachel Tribbiani", "emp_age": 28, "emp_location": "Boston", "emp_email": "rachelt@somewhere.com" },
                ]);
    })
    .then(() => {
        console.log("Records inserted successfully");
        // Find all documents in employees collection after insertMany
        return Employee.find();
    })
    .then((data) => {
        console.log("\nDocuments in employees collection after insertMany:");
        console.log(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        mongoose.connection.close(); // Close the MongoDB connection
    });

                                //CAN ALSO BE WRITTEN AS

//     mongoose.connect(uri,{'dbName':'employeeDB'}).then(()=>{
//     console.log("Database named empoyeeDB creaated and connected...");

//     return Employee.insertMany([   { "emp_name": "Ray Renolds", "emp_age": 32, "emp_location": "Austin", "emp_email": "rayr@somewhere.com" },
//         { "emp_name": "Matt Aniston", "emp_age": 25, "emp_location": "Houston", "emp_email": "matta@somewhere.com" },
//         { "emp_name": "Monica Perry", "emp_age": 23, "emp_location": "New Jersey", "emp_email": "monicap@somewhere.com" },
//         { "emp_name": "Rachel Tribbiani", "emp_age": 28, "emp_location": "Boston", "emp_email": "rachelt@somewhere.com" },
//   ]);
// }).then((data)=>{
//     console.log("Records inserted successfully");
//     Employee.find().then((data)=>{console.log(data);}).catch(error=>console.log("inner catch error: "+ error)).finally(()=>mongoose.connection.close);
// })
// .catch(error=>(console.log("outter catch error: "+error)));