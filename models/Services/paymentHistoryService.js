const { models } = require("..");
const { QueryTypes } = require("sequelize");
const sq = require("../index");
const async = require("hbs/lib/async");


const findByPayerId = async(id) => {
    try {
        return await models.PaymentHistory.findAll({
            where: {
                id_payer: id
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = { findByPayerId };