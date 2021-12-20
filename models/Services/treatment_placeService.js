const { models } = require("..");
const { QueryTypes } = require("sequelize");

const getListTreatmentPlace =  () => {
    return models.TreatmentPlace.findAll({raw: true});
  };
  
  
  module.exports = { getListTreatmentPlace };
  