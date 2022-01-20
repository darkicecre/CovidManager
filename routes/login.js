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

                req.session.user.manager = true;
            }
            else if (req.user.role == "admin") {
                req.session.user.admin = true;

            }
            if (req.user = 'user' && req.user.first_time) {
                controller.updateTime(id)
                res.redirect('/user/basicInfor/edit/' + id)
            } else {
                res.redirect('/')

            }
            //res.send(req.user)

        } else {
            res.redirect('/login')

        }
    }

);


module.exports = router;