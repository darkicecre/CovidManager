const { models } = require("..");
const { QueryTypes } = require("sequelize");
const sequelize = require("sequelize");
const Op = sequelize.Op;


// get all patients
const listPatient = () => {
  return models.Patient.findAll({ 
    raw: true,
    include: [{
      model: models.TreatmentPlace,
      as: 'treatment_place',
      attributes: ['name'],
    }]
   });
};
//find patient by identity_card
const findPatientByIdentity = (identity_card) => {
  return models.Patient.findOne({
    where: {identity_card},
    raw: true,
  })
}
const findPatientById = (_id) =>{
  return models.Patient.findOne({id: _id});
}

const addPatient = async (patient) => {
  try {
    await models.Patient.create({
      name: patient.name,
      address: patient.address,
      identity_card: patient.CMND,
      birthdate:  '2016-06-22 19:10:25-07',
      status: patient.status,
      treatment_place_id: patient.treatment_place,
    });
  } catch (err) {
    
    if(err){
      console.log(err.parent.code);
    }
  }
};
const  addContactPatient = async (id_person,id_other_person) => {
  try {
    await models.ContactHistory.create({
      id_person,
      id_other_person
    });
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
}
//get detail patient
const patientDetail = async  (_id) => {
  let patient;
  try{
    patient = await models.ContactHistory.findAll({
      include: [
        {
          model: models.Patient,
          as:'id_other_person_Patient',
          attribute: ["name", "identity_card", "address", "status","id"],
        },
      ],
      where: {
        [Op.and]: [
          {
            id_person: _id
          },

        ],
      },raw:true,
    });
  } catch (err) {console.log(err);}
  return patient;
}
const  updatePatient =async (pt)=>{
  try {
    await models.Patient.update(
      {
        status: pt.status,
        treatment_place_id: pt.treatment_place,
      },
      {
        where: {
          id: pt.id,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  listPatient,
  addPatient,
  addPatient,
  patientDetail,
  updatePatient,
  addContactPatient,
  findPatientByIdentity,
  findPatientById
};
