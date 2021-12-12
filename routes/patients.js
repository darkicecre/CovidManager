const express = require('express');
const router = express.Router();

//set controller for router
const controller = require('../controllers/patient/patientController');
router.get('/',controller.list);
router.get('/addPatient',controller.addPatient);
router.get('/patientDetail',controller.PatientDetail);

module.exports = router;

