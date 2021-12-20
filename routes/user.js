const express = require("express");
const router = express.Router();

//set controller for router
const controller = require("../controllers/userAccount/userController");

router.get("/", (req,res)=>{
    res.render("manager/addUserAccount");
});

module.exports = router;
