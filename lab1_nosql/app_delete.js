const mongoose = require('mongoose');
const Employee = require('./employeeSchema-Model');

const uri= 'mongodb://localhost:27017';

mongoose.connect(uri, {'dbname':'employeeDB'})
//The below .then function is utilizign the concept of promises.
.then(()=>{
    console.log("employeeDb connected ...");

    return Employee.deleteOne({age: { $lt: 31 }, location: "New York"});
})
// also the comma in console.log plays role in displaying the result on console because if use + it will be convert the object after comman into a string using .toString() and concatenate it
.then((deletedOne_ka_Result)=>{console.log('one employee location deleted',deletedOne_ka_Result); 
    return Employee.deleteMany({emp_name: {$regex:'R'}});})
.then((deleteMany_ka_Result)=>{console.log("all employees contain r in name deleted: ",deleteMany_ka_Result)})
.catch(error=>console.log("---E---R---R---O---R--- : "+error))
.finally(()=>mongoose.connection.close());



//$regex: "R": This is a regular expression query that will match any document where the emp_name field
//contains the letter "R" (case-sensitive by default).

//The method returns a promise, so the return keyword is used here to return that promise.