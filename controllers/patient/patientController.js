const {models} = require("../../models");
//service
const servicePatient = require("../../models/Services/patientService");
const serviceTreatment_place = require("../../models/Services/treatment_placeService");

//controller
const list = async (req, res) => {
  const pt = await servicePatient.listPatient();
  console.log(pt);
  res.render("manager/patient", {
    title: "Covid Manager",
    tag: "Covid Patients",
    patient: pt,
    
  });
};
const addPatient = async (req, res) => {
  const tp = await serviceTreatment_place.getListTreatmentPlace();
  console.log(tp);

  res.render("manager/addPatient", {
    nav: "nav",
    sidebar: "sidebar",
    tag: "Add Patient",
    treatment_place: tp,
  });
};
const PatientDetail = async (req, res) => {
  try{
  const detailPatient = await servicePatient.patientDetail(req.params.id);
  console.log(detailPatient);
  res.render("manager/patientDetail", {
    title: "Covid Manager",
    tag: "Patient Detail",
    id: req.params.id,
    name: detailPatient.name,
    identity_card: detailPatient.identity_card,
    address: detailPatient.address,
  });
} catch(err) {  }
};

const add = async (req, res) => {
  const pt = req.body;
  
  console.log(pt);
  
  servicePatient.addPatient(pt)
    .then(res.redirect("/patient"))
};

const changeInfo =async (req, res) => {
  const tp = await serviceTreatment_place.getListTreatmentPlace();
  console.log(tp);
  res.render("/manager/updatePatient",{
  treatment_place: tp,
  })
}
module.exports = { list, addPatient, PatientDetail, add,changeInfo };
