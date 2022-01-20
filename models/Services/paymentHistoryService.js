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
const addPayment = async (bill) =>{
    await models.PaymentHistory.create({
        id_package: bill.id_package,
        id_payer: bill.id_payer,
        count: bill.count,
        time_start: bill.time_start,
        price: bill.price,
        list_product: bill.list_product,
    });
}
module.exports = { findByPayerId,addPayment };