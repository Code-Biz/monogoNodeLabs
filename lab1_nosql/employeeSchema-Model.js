const mongoose = require('mongoose');

const schema = mongoose.Schema;

const employees = new schema({

    emp_name:{
        type: String,
        required: true,
    },
    emp_age:{
        type: Number,
        required: true,
    },
    emp_location:{
        type: String,
        required: true,
    },
    emp_email:{
        type: String,
        required: true,
    }
});


//these modules and their export concept maybe resembles that what you learnt somewhat about in c++ and python TMS project!
//the line below means that a mongoose model/collection of employees schema we designed above will be build with name employees and exported. 
//The name we are giving to this model/collection is 'employees' that is build based on the schema named employees we designed above.

//--------->   module.exports = mongoose.model('employees', employees);

//We can write the above as given below as well, bcz after schema is designed a model is build. This is this model that we are just exporting after
//building it. So the model function i part of building database not the export function. so we just builded and exported the model in one line:


const emps = mongoose.model('employees', employees);
module. exports = emps;

