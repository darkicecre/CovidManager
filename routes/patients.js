const express = require("express");
const router = express.Router();

//set controller for router
const controller = require("../controllers/patient/patientController");
router.get("/", controller.list);
router.get("/addPatient", controller.addPatient);


router.post('/addPatient', controller.add);
router.get('/addContact',controller.addContactPage);
router.post('/addContact',controller.addContact);
router.get("/changeInfo",controller.changeInfoPage);
router.post("/changeInfo",controller.changeInfo);
router.get("/:id", controller.PatientDetail);
module.exports = router;
