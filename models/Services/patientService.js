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
    where: { identity_card },
    raw: true,
  });
}
const findPatientById = (_id) =>{
  return models.Patient.findOne({where: {id: _id},raw: true});
}

const addPatient = async (patient,address) => {
  try {

    await models.Patient.create({
      name: patient.name,
      address: address,
      identity_card: patient.CMND,
      birthdate:  '2016-06-22 19:10:25-07',
      status: patient.status,
      treatment_place_id: patient.treatment_place,
    });
  } catch (err) {
    
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
const updateStatus=async(_id,st)=>{
  try {
    await models.Patient.update(
      {
        status: st,
      },
      {
        where: {
          id: _id,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
}
const  updateSrcPatient = async (id,type)=>{
  if(type==="F4"){
    return;
  }
  const person = await models.Patient.findOne({where:{
    id:id
  },raw:true})
  if(parseInt(person.status[1])>parseInt(type[1])){
    updateStatus(id,type);
    const contact = await models.ContactHistory.findOne({where:{
      id_other_person:id
    },raw:true})
    updateSrcPatient(contact.id_person,'F'+(parseInt(type[1])+1).toString())
    const contactOther = await models.ContactHistory.findAll({where:{
      id_person:id
    },raw:true})
    for(var i=0;i<contactOther.length;i++){
      updateSrcPatient(contactOther[i].id_other_person,'F'+(parseInt(type[1])+1).toString())
    }
  }
  
}

module.exports = {
  listPatient,
  addPatient,
  addPatient,
  patientDetail,
  updateSrcPatient,
  addContactPatient,
  findPatientByIdentity,
  findPatientById
};
