var express = require("express");
var router = express.Router();
const controller = require('../controllers/login/login');
const passport = require('../controllers/login/passport-config');

router.get('/', (req, res) => {
    if (controller.isAuthenticated(req, res)) {
        res.redirect('/')
    }
    controller.login(req, res)

});

router.post('/', passport.authenticate("local", {

        failureFlash: true,
    }),
    function(req, res) {
        if (req.user) {
            id = req.user.id
            req.session.user = {
                manager: false,
                admin: false,
                id: id,
                identity_card: req.user.identity_card
            }
            if (req.user.role == "manager") {
                req.session.user = {
                    manager: true,
                    admin: false,
                    id: id,
                    identity_card: req.user.identity_card

                }
            }
            if (req.user.role == "admin") {
                req.session.user = {
                    manager: false,
                    admin: true,
                    id: id,
                    identity_card: req.user.identity_card
                }
            }

            res.redirect('/')
        } else {
            res.redirect('/login')

        }
    }

);


module.exports = router;