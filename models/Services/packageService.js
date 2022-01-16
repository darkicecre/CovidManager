const { models } = require("..");
const { QueryTypes } = require("sequelize");
const sq = require("../../models/index");
const async = require("hbs/lib/async");

const listPackage = () => {
    return models.NeccessaryPackage.findAll({ raw: true });
};

const addPackage = async(package, jsonfy) => {
    try {
        await models.NeccessaryPackage.create({
            name: package.name,
            list_product: jsonfy,
            limit_count_package_day: package.limit_day,
            limit_count_package_week: package.limit_week,
            limit_count_package_month: package.limit_month,
        });
    } catch (err) {
        console.log(err);
    }
}

const update = async(package, jsonfy) => {
    try {
        await models.NeccessaryPackage.update({
            name: package.name,
            list_product: jsonfy,
            limit_count_package_day: package.limit_day,
            limit_count_package_week: package.limit_week,
            limit_count_package_month: package.limit_month,
        }, {
            where: {
                id: package.id
            }
        });
    } catch (err) {
        console.log(err);
    }
}

const deletePackage = async(package) => {
    try {
        await models.NeccessaryPackage.destroy({
            where: {
                id: package.id
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const findById = async(package) => {
    try {
        return await models.NeccessaryPackage.findAll({
            where: {
                id: package.id
            }
        })
    } catch (err) {
        console.log(err);
    }
}
const findById2 = async(id) => {
    try {
        return await models.NeccessaryPackage.findAll({
            where: {
                id: id
            }
        })
    } catch (err) {
        console.log(err);
    }
}
module.exports = { listPackage, addPackage, listPackage, deletePackage, findById, update, findById2 };