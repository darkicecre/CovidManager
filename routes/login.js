var express = require("express");
var router = express.Router();
const controller = require('../controllers/login/login');
const passport = require('../controllers/login/passport-config');
const axios = require('axios').default;

router.get('/', (req, res) => {
    if (controller.isAuthenticated(req, res)) {
        res.redirect('/')
    }
    controller.login(req, res)

});

router.post('/', passport.authenticate("local", {

        failureFlash: true,
    }),
    async function(req, res) {
        if (req.user) {
            id = req.user.id
            req.session.user = {
                manager: false,
                admin: false,
                id: id,
                identity_card: req.user.identity_card,
                access_token: '1',
            }
            var access_token = '1'
            if (req.user.role == "manager") {

                req.session.user.manager = true;
            }
            if (req.user.role == "admin") {
                req.session.user.manager = true;
            }
            if (req.user.role == 'user') {
                await axios.post('http://localhost:8000/login', {
                        id: id
                    })
                    .then(function(response) {
                        // handle success
                        access_token = response.data.accessToken;
                        console.log(access_token);
                        //req.session.user.access_token = response.data.accessToken
                        //res.send(req.session.user);

                    })
                    .catch(function(error) {
                        console.log(error);
                    })

            }

            req.session.user.access_token = access_token
            if (req.user.role == 'user' && req.user.first_time) {
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