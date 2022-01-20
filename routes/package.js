const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

//set controller for router
const controller = require("../controllers/package/packageController");
router.get("/", controller.list);
router.get("/addPackage", controller.addPackage);
router.post("/addPackage",controller.add);
router.post("/deletePackage",controller.deletePackage);
router.post("/updatePackage",controller.toUpdatePackage);
router.post("/update",controller.updatePackage);
router.get("/detailPackage/:id",controller.packageDetail);

module.exports = router;
