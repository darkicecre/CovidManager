const service = require("../../models/Services/userAccount");

const list = async(req, res) => {
    const result = await service.listAccount();
    res.render("admin/account", {
        title: "Covid Manager",
        tag: "Account",
        account: result,
    });
};
const addAccount = (req, res) => {
    res.render("admin/addAccount", {
        tag: "Add Product",
    });
};
const detailUser = async(req, res) => {
    const id = req.params;
    const result = await service.findById(id);
    res.render("admin/accountDetail", {
        title: "Covid Manager",
        tag: "Account",
        id: result[0].id,
        user_name: result[0].user_name,
        password: result[0].password,
        name: result[0].name,
        identity_card: result[0].identity_card,

        role: result[0].role,
        active: result[0].active,
        is_alert: result[0].is_alert,
    });

}
const editAccount = async(req, res) => {
    const id = req.params;
    const result = await service.findById(id);
    res.render("admin/accountEdit", {
        title: "Covid Manager",
        tag: "Account",
        id: result[0].id,
        user_name: result[0].user_name,
        password: result[0].password,
        name: result[0].name,
        identity_card: result[0].identity_card,

        role: result[0].role,
        active: result[0].active,
        is_alert: result[0].is_alert,
    });

}
const edit = async(req, res) => {
    const acc = req.body;
    if (acc.active == undefined) {
        acc.active = false;
    } else {
        acc.active = true
    }
    if (acc.is_alert == undefined) {
        acc.is_alert = false;
    } else {
        acc.is_alert = true;
    }
    acc.id = req.params.id;
    service.updateAccount(acc).then(res.redirect('/user/' + acc.id))


};

const add = (req, res) => {
    const acc = req.body;
    if (acc.active == undefined) {
        acc.active = false;
    } else {
        acc.active = true
    }
    if (acc.is_alert == undefined) {
        acc.is_alert = false;
    } else {
        acc.is_alert = true;
    }
    acc.role = "manager";
    service.addAccount(acc).then(res.redirect("/user"))
};
const deleteAccount = (req, res) => {
    const id = req.params;
    service.deleteAccount(id).then(res.redirect("/user"));
}

const accountDetail = (req, res) => {
    res.render("manager/productDetail", {
        tag: "Account Detail"
    })
}

const updateAccount = (req, res) => {
    const acc = req.body;
    console.log(acc);
    //service.updateAccount(pt).then(res.redirect("/user"));
}
module.exports = { list, addAccount, add, accountDetail, updateAccount, detailUser, editAccount, edit, deleteAccount };