const { models } = require("..");
const { QueryTypes } = require("sequelize");
const sq = require("../../models/index");
const async = require("hbs/lib/async");

const listPackage = () => {
  return models.NeccessaryPackage.findAll({ raw: true });
};
// get all products
const listProduct = () => {
  return models.NeccessaryPackage.findAll({ raw: true });
};

const addPackage = async (package,jsonfy)=>{
  try {
    await models.NeccessaryPackage.create({
      name: package.name,
      list_product: jsonfy,
      limit_count_package_day: package.limit_day,
      limit_count_package_week: package.limit_week,
      limit_count_package_year: package.limit_year,
    });
  } catch (err) {
    console.log(err);
  }
}
module.exports = { listProduct,addPackage,listPackage};
