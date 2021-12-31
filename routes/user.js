const express = require("express");
const router = express.Router();

//set controller for router
const controller = require("../controllers/userAccount/userController");

router.get("/", (req, res) => {
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
});
router.get("/addAccount", controller.addAccount);
router.post('/addAccount', controller.add);
router.get('/edit/:id', controller.editAccount);
router.post('/edit/:id', controller.edit);
router.get('/delete/:id', controller.deleteAccount);

router.get('/:id', controller.detailUser);

module.exports = router;