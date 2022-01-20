const express = require("express");
const router = express.Router();

//set controller for router
const controller = require("../controllers/userAccount/userController");

router.get("/", (req, res) => {
    controller.list(req, res)
});
router.get("/addAccount", controller.addAccount);
router.post('/addAccount', (req, res) => {
    if (req.session.user) {
        user = req.session.user;
        controller.add(req, res, user);
    } else {
        res.redirect('/login')
    }

});
router.get('/history', controller.listHistory);
router.get('/edit/:id', controller.editAccount);
router.post('/edit/:id', controller.edit);
router.get('/delete/:id', controller.deleteAccount);

router.get('/:id', controller.detailUser);

module.exports = router;