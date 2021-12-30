const { models } = require("..");
const { QueryTypes } = require("sequelize");
const sq = require("../../models/index");
const async = require("hbs/lib/async");
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

const deleteProduct = async(product)=>{
  try{
    await models.Product.destroy({
      where:{
        id: product.id
      }
    })
  }catch(err){
    console.log(err);
  }
}

const findById = async(product)=>{
  try{
    return await models.Product.findAll({
      where:{
        id:product.id
      }
    })
  }catch(err){
    console.log(err);
  }
}

const updateProduct = async(product)=>{
  try{
    await models.Product.update({
      name: product.name,
      image: product.image,
      note: product.note,
      price: product.price,
      quantity_unit: product.quantity_unit
    },{
      where:{
        id:product.id
      }
    })
  }
  catch(err){
    console.log(err);
  }
}
module.exports = { listProduct, addProduct, addProduct, deleteProduct,findById,updateProduct};
