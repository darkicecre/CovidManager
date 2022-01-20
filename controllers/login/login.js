const service = require("../../models/Services/userAccount");
const isAuthenticated = (req, res) => {
    if (req.user) {
        return true;
    }
    return false;
};
const isManagers = (req, res) => {
    if (req.user) {
        if (req.user[0].role == "manager") {
            return true;
        }
    }
    return false;

};

const login = (req, res) => {

    res.render('login/login', {
        nav: 0,
        sidebar: 0,
        tag: "Login",
    });

}
const updateTime = (id) => {
    const acc = {
        id: id,
        first_time: false,
    };

    service.updateAccount(acc)

}
module.exports = {
    isAuthenticated,
    login,
    isManagers,
    updateTime,
}