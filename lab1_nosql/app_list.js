const mongoose = require('mongoose');
const Employee = require('./employeeSchema-Model');
//the above line is importing the the employees collection/model from employee.js file
//Open the file app_list.js in the editor and paste the following content. This will connect to the MongoDB server that is running from the Node program and display all the records in the employees collection, when run.

const uri =  "mongodb://localhost:27017";


mongoose.connect(uri, {'dbName':'employeeDB'});

Employee.find().then(data=>{console.log(data); });
