const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

//set controller for router
const controller = require("../controllers/purchase/purchaseController");
router.get("/", controller.list);
// router.get("/addProduct", controller.addProduct);
// router.post('/addProduct', controller.add);
// router.post('/deleteProduct',controller.deletePro)
// router.post('/toUpdateProduct',controller.toUpdateProduct);
// router.post('/updateProduct',controller.updateProduct);
router.post("/buy",controller.buy);
module.exports = router;
