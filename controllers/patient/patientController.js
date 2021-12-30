const {models} = require("../../models");
//service
const servicePatient = require("../../models/Services/patientService");
const serviceTreatment_place = require("../../models/Services/treatment_placeService");

//controller
const list = async (req, res) => {
  const pt = await servicePatient.listPatient();
  
  res.render("manager/patient", {
    title: "Covid Manager",
    tag: "Covid Patients",
    patient: pt,
    
  });
};
const addPatient = async (req, res) => {
  const tp = await serviceTreatment_place.getListTreatmentPlace();

  res.render("manager/addPatient", {
    title: "Covid Manager",
    tag: "Add Patient",
    treatment_place: tp,
    message: req.flash('identityMes')
  });
};
const PatientDetail = async (req, res) => {
  try{
  const patient = await servicePatient.patientDetail(req.params.id);

  res.render("manager/patientDetail", {
    title: "Covid Manager",
    tag: "Patient Detail",
    id: req.params.id,
    patient: patient,
  });
} catch(err) {  }
};

const add = async (req, res) => {
  let pt = req.body;
  pt.status = "F0";
  //check identity_card
  let account = req.body;
  let user = await servicePatient.findPatientByIdentity(account.CMND);
  console.log(user);
  if (user) {
    req.flash("identityMes", "Identity card already exists!");
    return res.redirect("/patient/addPatient");
  }
  servicePatient.addPatient(pt).then(res.redirect("/patient"));
};

const changeInfoPage =async (req, res) => {
  const tp = await serviceTreatment_place.getListTreatmentPlace();

  res.render('manager/updatePatient',{
  treatment_place: tp,
  id: req.query.id
  })
}
const changeInfo = async(req, res) =>{
    const pt = req.body;
    console.log(pt);
    //update patient status
    
    servicePatient.updatePatient(pt).then(res.redirect("/patient"));
}

const addContactPage = async (req, res) => {
  const tp = await serviceTreatment_place.getListTreatmentPlace();
  
  res.render("manager/addContactPatient", {
    message: req.flash("identityMessage"),
    title: "Covid Manager",
    tag: "Add Patient",
    treatment_place: tp,
    id: req.query.id,
  });
}
const addContact = async (req, res) => {
  let pt = req.body;
  //check identity_card
  let account = req.body;
  let user = await servicePatient.findPatientByIdentity(account.CMND);
  console.log(user);
  if (user) {
    req.flash("identityMessage", "Identity card already exists!");
    return res.redirect("/patient/addContact");
  }
  let person =await servicePatient.findPatientById(pt.id);

  pt.status ='F' + (parseInt(person.status[1]) + 1).toString();
  console.log(pt.status);
  await servicePatient.addPatient(pt);
  let id_other_person = await servicePatient.findPatientByIdentity(pt.CMND);

  await servicePatient.addContactPatient(pt.id,id_other_person.id).then(res.redirect("/patient/"+pt.id))
}
module.exports = {
  list,
  addPatient,
  PatientDetail,
  add,
  changeInfoPage,
  changeInfo,
  addContactPage,
  addContact,
};
