const express = require('express');
const cors = require('cors');
const pool = require('./config/db.config');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded(
    {extended:true
}));

//connect to database
pool.connect()
.then(()=>{console.log("db connected")});   

//Models
var Patient = require('./models/Patient.js');
const obj ={
    "id":  "3"
}
var tmp = new Patient(obj);
console.log(tmp.id)

//do not change
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log("Server listening on port "+ port));