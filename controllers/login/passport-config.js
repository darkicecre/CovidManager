const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const service = require("../../models/Services/userAccount");

passport.use(
    new LocalStrategy(async function(username, password, done) {
        try {
            const user = await service.findByUserName(username)

            console.log(user)
            if (!user) {
                return done(null, false, { message: "Incorrect username." });
            }
            if (!validPassword(user, password)) {

                return done(null, false, { message: "Incorrect password." });
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })
);

const validPassword = (user, password) => {
    return password == user.password;
};

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {

    service
        .findById(user)
        .then((res) => done(null, res))
        .catch((err) => done(err));
});

module.exports = passport;