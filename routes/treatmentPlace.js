const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

//set controller for router
const controller = require("../controllers/treatmentPlace/treatmentPlaceController");
router.get("/", controller.list);
router.get("/addTreatmentPlace", controller.addTreatmentPlace);
router.post('/addTreatmentPlace', controller.add);
// router.post('/deleteProduct',controller.deletePro)
// router.post('/toUpdateProduct',controller.toUpdateProduct);
// router.post('/updateProduct',controller.updateProduct);

module.exports = router;
