const { models } = require("..");
const { QueryTypes } = require("sequelize");

const listUser =  () => {
    return models.UserAccount.findAll({ raw: true });
}

const findAccount = async (account)=>{
    let check = false;
    try{
        let user = await models.UserAccount.findOne({where: {
            user_name: account.username
        }});

        if(user)
        {
          check=true;
        }
        else{
          check = false;
        }
    }catch (err) {
        console.log(err);
    }
    return check;
} 

const addUserAccount = async (account)=>{
    try {
      await models.UserAccount.create({
        name: account.name,
        user_name: account.username,
        password: '123456',
        identity_card: account.CMND,
        role: 0,
        active: true,
        alert: false
      });
    } catch (err) {
      if (err) {
        console.log(err.parent.code);
      }
    }
}

module.exports = {
    addUserAccount,findAccount,listUser
}