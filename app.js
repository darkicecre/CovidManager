const express = require('express');
const cors = require('cors');
const pool = require('./config/db.config');
const hbs = require('hbs');
const path = require('path');
const app = express();

//routes
const patient = require('./routes/patients');

//hbs
app.set('view engine', 'hbs');
app.set('views',  path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded(
    {extended:true
}));
app.use(express.static(path.join(__dirname, 'public')));

//connect to database
pool.connect()
.then(()=>{console.log("db connected")});   

//Models

//set routes for server
app.use('/patient',patient);

app.use('/',(req,res)=>{
    res.render('manager/patient',{
        nav: 'nav',
        sidebar: 'sidebar',
        tag: "Patient"
    })
})

//do not change
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("Server listening on port "+ port));