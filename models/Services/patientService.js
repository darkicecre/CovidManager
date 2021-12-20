const { models } = require("..");
const { QueryTypes } = require("sequelize");



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

//add patient raw query
// const addPatient = async (patient) => {
//   try {
//     await sq.sequelize.query(
//       'INSERT INTO "Patient"(id, name, identity_card, birthdate, address, status, treatment_place_id) VALUES (' +
//         99 +
//         ", '" +
//         patient.name +
//         "', " +
//         "null" +
//         ", " +
//         "null" +
//         ",'" +
//         patient.address +
//         "'," +
//         "null" +
//         "," +
//         "null" +
//         ");",
//       { type: QueryTypes.INSERT }
//     );
//   } catch (err) {}
// };
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
    console.log(err);
  }
};

//get detail patient
const patientDetail =  (_id) => {
  return models.Patient.findByPk( _id,{raw: true});
};


module.exports = { listPatient, addPatient, addPatient, patientDetail };
