const { models } = require("..");
const { QueryTypes } = require("sequelize");
const sq = require("../../models/index");
const async = require("hbs/lib/async");
const TreatmentPlace = require("../TreatmentPlace");
const getListTreatmentPlace =  () => {
    return models.TreatmentPlace.findAll({raw: true});
};
// async function test() {
//   const t = await models.TreatmentPlace.findAll({raw:true});
//   console.log(t);
//   return t;
// }
const addTreatmentPlace = async (treatmentPlace,address) => {
  try {
    const t = await models.TreatmentPlace.create({
      address: address,
      name: treatmentPlace.name,
      capacity: treatmentPlace.capacity
    });
    // const a = await models.TreatmentPlace.findAll({where:{id:1}});
    // console.log(a);
    // console.log("Hello");
    // console.log(treatmentPlace);
    
  
  } catch (err) {
    console.log(err);
  }
};
const findById = async(treatmentPlace)=>{
  try{
    return await models.TreatmentPlace.findAll({
      where:{
        id:treatmentPlace.id
      }
      
    })
  }catch(err){
    console.log(err);
  }
}
// Vehicle.findAll({
//   attributes: [
//      sequelize.fn('MAX', sequelize.col('id'))
//   ],
//   where: {
//     { 'vsr_id': 342 }
//   }
// });
// id:TreatmentPlace.max('id')
// .success(function(){
//    return await models.TreatmentPlace.
// })
// .error(function(err){
//   console.log(err);
// });
// const findTheMaxId = async(treatmentPlace)=>{
//   try{
//     return await models.TreatmentPlace.findAll({
//       where:{
//         id:treatmentPlace.id
//       }
      
//     })
//   }catch(err){
//     console.log(err);
//   }
// }


  module.exports = { getListTreatmentPlace, addTreatmentPlace, findById};
  