const {models} = require("../../models");
//service
const servicePatient = require("../../models/Services/patientService");
const serviceTreatment_place = require("../../models/Services/treatment_placeService");
const serviceAddress = require("../../models/Services/addressService");

//controller
const list = async (req, res) => {
  const pt = await servicePatient.listPatient();
  for(var i=0;i<pt.length;i++){
    var address = JSON.parse(pt[i].address);
    pt[i].address = address.detail+', '+address.district+', '+address.city;
  }
  res.render("manager/patient", {
    title: "Covid Manager",
    tag: "Covid Patients",
    patient: pt,    
  });
};
const addPatient = async (req, res) => {
  const tp = await serviceTreatment_place.getListTreatmentPlace();
  const addressData = serviceAddress.getDataStringify();
  const obj = JSON.parse(addressData);

  res.render("manager/addPatient", {
    nav: "nav",
    sidebar: "sidebar",
    tag: "Add Patient",
    address: obj,
    addressStringify:addressData,
    treatment_place: tp,
  });
};
const PatientDetail = async (req, res) => {
  try{
  const detailPatient = await servicePatient.patientDetail(req.params.id);
  var address = JSON.parse(detailPatient.address);
  detailPatient.address = address.detail+', '+address.district+', '+address.city;
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
  var address = '{"city":"'+pt.city+'","district":"'+pt.address_district+'","detail":"'+pt.address_detail+'"}';
  console.log(address);
  
  servicePatient.addPatient(pt,address)
    .then(res.redirect("/patient"))
};

const changeInfoPage =async (req, res) => {
  const tp = await serviceTreatment_place.getListTreatmentPlace();
  console.log(req.query);
  res.render('manager/updatePatient',{
  treatment_place: tp,
  id: req.query.id
  })
}
const changeInfo = async(req, res) =>{
    const pt = req.body;
    console.log(pt);
    servicePatient.updatePatient(pt).then(res.redirect("/patient"));
}
module.exports = { list, addPatient, PatientDetail, add,changeInfoPage,changeInfo };
