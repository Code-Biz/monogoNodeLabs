const mongoose = require("mongoose");
const Employee = require('./employeeSchema-Model');


const uri =  "mongodb://localhost:27017/";


mongoose.connect(uri, {'dbName':'employeeDB'});

let newEmployee= new Employee({
    emp_name: 'John Doe',
    emp_age: 37,
    emp_location: "Illinois",
    emp_email: "jdoe@somewhere.com"
})

newEmployee.save().then(function(){
    Employee.find().then(data=>{console.log("\n\nDocuments in employee collection after insertOne: ");
        console.log(data);
        mongoose.connection.close();
    })
}).catch(function(error){console.log(error);});