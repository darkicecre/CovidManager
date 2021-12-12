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

//database
const { QueryTypes } = require('sequelize');
const sq = require('./models/index');
sq.sequelize.authenticate()
    .then(()=> console.log('Database connected'))
    .catch(err =>console.log(err));





//set routes for server
app.use('/patient',patient);
app.use('/patient/',patient);

app.use('/',(req,res)=>{
    res.render('manager/managerDashboard',{
        nav: 'nav',
        sidebar: 'sidebar',
        tag: "Patient"
    })
})
app.use('/patient/addPatient',patient);
//do not change
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("Server listening on port "+ port));