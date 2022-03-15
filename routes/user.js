const express = require("express");
const router = express.Router();

//set controller for router
const controller = require("../controllers/user/userController");
const payment = require("../controllers/user/paymentHistory");
const package = require("../controllers/user/packageHistory");
const account = require("../controllers/userAccount/userController");

/*router.get("/", (req, res) => {
    if (req.session.user) {
        user = req.session.user;

        if (user.manager == true) {
            controller.list(req, res)
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect('/login')
    }
});*/
/*router.get("/addAccount", controller.addAccount);
router.post('/addAccount', controller.add);

router.get('/delete/:id', controller.deleteAccount);

router.get('/:id', controller.detailUser);
*/
router.get("/", (req, res) => {
    if (req.session.user) {
        user = req.session.user;
        res.render("user/viewInfor", {
            sidebar: "user",
        });
    } else {
        res.redirect('/login')
    }

});
router.get('/basicInfor/edit/:id', controller.editUser);
router.post('/basicInfor/edit/:id', controller.edit);

router.get("/basicInfor", (req, res) => {
    if (req.session.user) {
        user = req.session.user;
        controller.basicInfor(req, res, user);
    } else {
        res.redirect('/login')
    }
});
router.get("/paymentHistory", (req, res) => {
    if (req.session.user) {
        user = req.session.user;
        payment.list(req, res, user)
    } else {
        res.redirect('/login')
    }

});
router.get("/packageHistory", (req, res) => {
    if (req.session.user) {
        user = req.session.user;
        package.list(req, res, user)
    } else {
        res.redirect('/login')
    }

});
router.get("/debt", (req, res) => {
    if (req.session.user) {
        user = req.session.user;
        account.totalMoney(req, res, user)
    } else {
        res.redirect('/login')
    }

});
module.exports = router;