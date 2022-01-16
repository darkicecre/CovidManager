const { models } = require("..");
const { QueryTypes } = require("sequelize");
const sq = require("../../models/index");
const async = require("hbs/lib/async");
const TreatmentPlace = require("../TreatmentPlace");
const getListTreatmentPlace =  () => {
    return models.TreatmentPlace.findAll({raw: true});
};

const countPatientByTreatmentId = async (id)=>{
  try{
     var a = await models.Patient.findAll({
      where:{
        treatment_place_id:id
      }
    })
    return a.length;
  }catch(err){
    console.log(err);
  }
}
const addTreatmentPlace = async (treatmentPlace,address) => {
  try {
    const t = await models.TreatmentPlace.create({
      address: address,
      name: treatmentPlace.name,
      capacity: treatmentPlace.capacity
    });
  
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


  module.exports = { getListTreatmentPlace, addTreatmentPlace, findById,countPatientByTreatmentId};
  