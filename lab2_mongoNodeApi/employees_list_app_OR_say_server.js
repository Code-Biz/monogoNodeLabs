const mongoose = require('mongoose');
const Employees = require('./employee');
const express= require('express');
const bodyParser= require('body-parser');
const cors = require('cors')

const app = express();
const port = 3000;
const url='mongodb://localhost:27017/';
mongoose.connect(url,{'dbName':'employeeDB1'});

app.use('*',bodyParser.json());
app.use(cors()); //for any external application to connect, it needs to be allowed to do cross origin referencing.

app.get('/api/employees', async (req,res)=>{

    const data= await Employees.find();
    res.json(data);
})

app.post('/api/add_employee', async (req,res)=>{

    console.log('---------------------\n'+req+'\n------------------------');
    const data= req.body;

    const emp= new Employees({
        'name':data['name'],
        'age':data['age'],
        'loc':data['loc'],
        'email':data['email'],
    })

    await emp.save();
    res.json({message: `Employee details added...`})
});




app.listen(port,()=>{console.log(`server listening at port: localhost//${port}`)})