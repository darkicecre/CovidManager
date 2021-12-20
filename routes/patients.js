const express = require("express");
const router = express.Router();

//set controller for router
const controller = require("../controllers/patient/patientController");
router.get("/", controller.list);
router.get("/addPatient", controller.addPatient);

router.get("/:id", controller.PatientDetail);
router.post('/addPatient', controller.add);

router.get("/changeInfo",controller.changeInfo);
module.exports = router;
