const express = require("express");
const router = express.Router();

//set controller for router
const controller = require("../controllers/manageUser/manageUserController");

router.get("/", controller.userList);
router.get("/addUserAccount", controller.addUserAccountPage);
router.post("/addUserAccount", controller.addUserAccount);
module.exports = router;
