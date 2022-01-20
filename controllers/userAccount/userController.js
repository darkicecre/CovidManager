
const service = require("../../models/Services/userAccount");

const list = async (req, res) => {
  if (req.session.user.manager) {
    const result = await service.findListUser();
    res.render("admin/account", {
      sidebar: "manager",
      title: "Covid Manager",
      tag: "Account",
      account: result,
    });
  } else {
    const result = await service.findListManagers();
    res.render("admin/account", {
      sidebar: "admin",
      title: "Covid Manager",
      tag: "Account",
      account: result,
    });
  }
};

const addAccount = (req, res) => {
  if (req.session.user.manager) {
    res.render("admin/addAccount", {
      sidebar: "manager",
      tag: "Add Product",
    });
  } else {
    res.render("admin/addAccount", {
      sidebar: "admin",
      tag: "Add Product",
    });
  }
};

const detailUser = async (req, res) => {
  const id = req.params;
  const result = await service.findById(id);
  res.render("admin/accountDetail", {
    title: "Covid Manager",
    tag: "Account",
    sidebar: "admin",

    id: result[0].id,
    user_name: result[0].user_name,
    password: result[0].password,
    name: result[0].name,
    identity_card: result[0].identity_card,
    role: result[0].role,
    active: result[0].active,
    is_alert: result[0].is_alert,
    first_time: result[0].first_time,
  });
};
const editAccount = async (req, res) => {
  const id = req.params;
  const result = await service.findById(id);
  res.render("admin/accountEdit", {
    title: "Covid Manager",
    tag: "Account",
    sidebar: "admin",
    id: result[0].id,
    user_name: result[0].user_name,
    password: result[0].password,
    name: result[0].name,
    identity_card: result[0].identity_card,

    role: result[0].role,
    active: result[0].active,
    is_alert: result[0].is_alert,
  });
};
const edit = async (req, res) => {
  const acc = req.body;
  if (acc.active == undefined) {
    acc.active = false;
  } else {
    acc.active = true;
  }
  if (acc.is_alert == undefined) {
    acc.is_alert = false;
  } else {
    acc.is_alert = true;
  }
  acc.id = req.params.id;
  service.updateAccount(acc).then(res.redirect("/account/" + acc.id));
};

const add = (req, res, user) => {
  const acc = req.body;
  if (acc.active == undefined) {
    acc.active = false;
  } else {
    acc.active = true;
  }
  if (acc.is_alert == undefined) {
    acc.is_alert = false;
  } else {
    acc.is_alert = true;
  }
  if (user.manager) {
    acc.role = "user";
  }
  if (user.admin) {
    acc.role = "manager";
  }
  acc.first_time = true;
  service.addAccount(acc).then(res.redirect("/account"));
};
const deleteAccount = (req, res) => {
  const id = req.params;
  service.deleteAccount(id).then(res.redirect("/account"));
};

const accountDetail = (req, res) => {
  res.render("manager/productDetail", {
    sidebar: "admin",

    tag: "Account Detail",
  });
};

const updateAccount = (req, res) => {
  const acc = req.body;
  console.log(acc);
  //service.updateAccount(pt).then(res.redirect("/user"));
};
// const addUserAccount = async (req,res)=>{
//     let account = req.body;
//     let user = await service.findAccount(account)
//     console.log(user);
//     if(user){
//         req.flash("accountMessage", "Account already exists!");
//         return  res.redirect('/user/addUserAccount');
//     }
//     service.addUserAccount(account);
//     res.redirect('/dashboard');
// }
const addMoneyPage = (req, res) => {
  res.render("user/addMoney", {
    sidebar: "user",
    tag: "Add Money",
    id: req.session.id,
  });
};
const paymentDetail = (req, res) => {
  //axios
  res.render("user/paymentDetail", {
    sidebar: "user",
    money: "",
    minimum: "",
  });
};
module.exports = {
  paymentDetail,
  addMoneyPage,
  list,
  addAccount,
  add,
  accountDetail,
  updateAccount,
  detailUser,
  editAccount,
  edit,
  deleteAccount,
};
