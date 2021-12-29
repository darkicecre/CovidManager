const res = require("express/lib/response");
const service = require("../../models/Services/userService");

const userList = async (req, res) => {
    const account = await service.listUser();

    res.render('manager/user',{
        userAccount: account
    })
}

const addUserAccountPage = (req,res)=>{
    res.render('manager/addUserAccount',{message:req.flash('accountMessage')});
}
const addUserAccount = async (req,res)=>{
    let account = req.body;
    let user = await service.findAccount(account)
    console.log(user);
    if(user){
        console.log("dadasda")
        req.flash("accountMessage", "Account already exists!");
        return  res.redirect('/user/addUserAccount');
    }
    service.addUserAccount(account);
    res.redirect('/dashboard');   
}
module.exports ={
    addUserAccountPage,
    addUserAccount,
    userList
};