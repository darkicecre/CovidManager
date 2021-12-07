const express = require('express');
const router = express.Router();

//set controller for router
const controller = require('../controllers/patient/patientController');
router.get('/',controller.list);

module.exports = router;

