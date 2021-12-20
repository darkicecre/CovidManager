const express = require("express");
const router = express.Router();

//set controller for router
const controller = require("../controllers/product/productController");
router.get("/", controller.list);
router.get("/addProduct", controller.addProduct);
router.post('/addProduct', controller.add);
// //router.get("/patientDetail", controller.PatientDetail);
router.get("/:id", controller.productDetail);
// router.post('/addProduct', controller.add);

module.exports = router;
