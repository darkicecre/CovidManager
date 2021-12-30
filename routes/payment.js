const express = require("express");
const router = express.Router();

//set controller for router
const controller = require("../controllers/payment/paymentController");

router.get("/changeMinimum", controller.changeMinimumPage);
router.post("/changeMinimum", controller.changeMinimumPage);

module.exports = router;
