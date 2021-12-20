const { models } = require("..");
const { QueryTypes } = require("sequelize");
const sq = require("../../models/index");
async function test() {
  const t = await models.Patient.findAll({ raw: true });
  console.log(t);
  return t;
}

// get all products
const listProduct = () => {
  return models.Product.findAll({ raw: true });
};

const addProduct = async (product) => {
  try {
    await models.Product.create({
      name: product.name,
      image: product.image,
      note: product.note,
      price: product.price,
      quantity_unit: product.quantity_unit
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { listProduct, addProduct, addProduct };
