const { models } = require("..");
const { QueryTypes } = require("sequelize");
const sq = require("../../models/index");
const async = require("hbs/lib/async");
async function test() {
    const t = await models.UserAccount.findAll({ raw: true });
    console.log(t);
    return t;
}

// get all account
const listAccount = () => {
    return models.UserAccount.findAll({ raw: true });
};
const findListUser = async() => {
    try {
        return await models.UserAccount.findAll({
            where: {
                role: 'user',
            }
        })
    } catch (err) {
        console.log(err);
    }
}
const findListManagers = async() => {
    try {
        return await models.UserAccount.findAll({
            where: {
                role: 'manager',
            }
        })
    } catch (err) {
        console.log(err);
    }
}
const addAccount = async(account) => {
    try {
        await models.UserAccount.create({
            user_name: account.user_name,
            password: account.password,
            name: account.name,
            identity_card: account.identity_card,
            role: account.role,
            active: account.active,
            is_alert: account.is_alert,
            first_time: account.first_time

        });
    } catch (err) {
        console.log(err);
    }
};

const deleteAccount = async(account) => {
    try {
        await models.UserAccount.destroy({
            where: {
                id: account.id
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const findById = async(account) => {
    try {
        return await models.UserAccount.findAll({
            where: {
                id: account.id
            }
        })
    } catch (err) {
        console.log(err);
    }
}
const findByUserName = async(user_name) => {
    try {
        const user = await models.UserAccount.findAll({
            where: {
                user_name: user_name
            }
        })
        return user[0]
    } catch (err) {
        console.log(err);
    }
}

const updateAccount = async(account) => {
    try {
        await models.UserAccount.update({
            user_name: account.user_name,
            password: account.password,
            name: account.name,
            identity_card: account.identity_card,
            active: account.active,
            is_alert: account.is_alert,
            first_time: account.first_time,

        }, {
            where: {
                id: account.id
            }
        })
    } catch (err) {
        console.log(err);
    }
}
module.exports = { listAccount, addAccount, deleteAccount, findById, updateAccount, findByUserName, findListUser, findListManagers };