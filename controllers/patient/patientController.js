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
    pt[i].address = address.detail+', '+address.ward+', '+address.district+', '+address.city;
  }
  res.render("manager/patient", {
    sidebar: "manager",
    title: "Covid Manager",
    tag: "Covid Patients",
    patient: pt,
  });
};
const addPatient = async (req, res) => {
  const tp = await serviceTreatment_place.getListTreatmentPlace();
  const addressData = serviceAddress.getDataStringify();
  const obj = JSON.parse(addressData);
  for(var i=0;i<tp.length;i++){
    tp[i].count = await serviceTreatment_place.countPatientByTreatmentId(tp[i].id);
    if(tp[i].count<tp[i].capacity){
      tp[i].value = tp[i].id;
    }
    else{
      tp[i].style = "color:rgb(255,127,39);"
      tp[i].name = tp[i].name+" (đã đầy)"
    }
  }
  console.log(tp)
  res.render("manager/addPatient", {
    title: "Covid Manager",
    sidebar: "manager",
    tag: "Add Patient",
    address: obj,
    addressStringify:addressData,
    treatment_place: tp,
    message: req.flash('identityMes')
  });
};
const PatientDetail = async (req, res) => {
  try{
    const patient = await servicePatient.patientDetail(req.params.id);
   // const detailPatient = await servicePatient.patientDetail(req.params.id);
   for(var i=0;i<patient.length;i++){
    var address = JSON.parse(patient[i]['id_other_person_Patient.address']);
    patient[i]['id_other_person_Patient.address']=address.detail+', '+address.ward+', '+address.district+', '+address.city;
   }
  res.render("manager/patientDetail", {
    title: "Covid Manager",
    sidebar: "manager",
    tag: "Patient Detail",
    id: req.params.id,
    patient: patient,
  });
} catch(err) {  }
};

const add = async (req, res) => {
  const pt = req.body;
  pt.status = "F0";
  let user = await servicePatient.findPatientByIdentity(pt.CMND);
  if(user){
    req.flash("identityMes","Identity card already exists!");
    return res.redirect("/patient/addPatient");
  }
  var address = '{"city":"'+pt.city+'","ward":"'+pt.address_ward+'","district":"'+pt.address_district+'","detail":"'+pt.address_detail+'"}';
  console.log(address);
  
  servicePatient.addPatient(pt,address)
    .then(res.redirect("/patient"))
};

const changeInfoPage =async (req, res) => {
  const tp = await serviceTreatment_place.getListTreatmentPlace();
  for(var i=0;i<tp.length;i++){
    tp[i].count = await serviceTreatment_place.countPatientByTreatmentId(tp[i].id);
    if(tp[i].count<tp[i].capacity){
      tp[i].value = tp[i].id;
    }
    else{
      tp[i].style = "color:rgb(255,127,39);"
      tp[i].name = tp[i].name+" (đã đầy)"
    }
  }
  res.render("manager/updatePatient", {
    sidebar: "manager",
    treatment_place: tp,
    id: req.query.id,
  });
}
const changeInfo = async(req, res) =>{
    const pt = req.body;
    console.log(pt)
    
    servicePatient.updateSrcPatient(pt.id,pt.status);

    res.redirect("/patient");
}

const addContactPage = async (req, res) => {
  const tp = await serviceTreatment_place.getListTreatmentPlace();
  const addressData = serviceAddress.getDataStringify();
  const obj = JSON.parse(addressData);
  for(var i=0;i<tp.length;i++){
    tp[i].count = await serviceTreatment_place.countPatientByTreatmentId(tp[i].id);
    if(tp[i].count<tp[i].capacity){
      tp[i].value = tp[i].id;
    }
    else{
      tp[i].style = "color:rgb(255,127,39);"
      tp[i].name = tp[i].name+" (đã đầy)"
    }
  }
  res.render("manager/addContactPatient", {
    message: req.flash("identityMessage"),
    sidebar: "manager",
    title: "Covid Manager",
    tag: "Add Patient",
    treatment_place: tp,
    address: obj,
    addressStringify: addressData,
    id: req.query.id,
  });

}
const addContact = async (req, res) => {
  let pt = req.body;
  console.log(pt)
  //check identity_card
  let user = await servicePatient.findPatientByIdentity(pt.CMND);
  
  if (user) {
    const tp = await serviceTreatment_place.getListTreatmentPlace();
    const addressData = serviceAddress.getDataStringify();
    const obj = JSON.parse(addressData);
    for(var i=0;i<tp.length;i++){
      tp[i].count = await serviceTreatment_place.countPatientByTreatmentId(tp[i].id);
      if(tp[i].count<tp[i].capacity){
        tp[i].value = tp[i].id;
      }
      else{
        tp[i].style = "color:rgb(255,127,39);"
        tp[i].name = tp[i].name+" (đã đầy)"
      }
    }
    res.render("manager/addContactPatient", {
      message: "Identity card already exists!",
      sidebar: "manager",
      title: "Covid Manager",
      tag: "Add Patient",
      treatment_place: tp,
      address: obj,
      addressStringify: addressData,
      id: pt.id,
    });
    return;
    // return res.redirect("/patient/addContact");
  }
  
  let person =await servicePatient.findPatientById(pt.id);
  pt.status ='F' + (parseInt(person.status[1]) + 1).toString();
  var address = '{"city":"'+pt.city+'","ward":"'+pt.address_ward+'","district":"'+pt.address_district+'","detail":"'+pt.address_detail+'"}';
  console.log(pt)
  await servicePatient.addPatient(pt,address);
  let id_other_person = await servicePatient.findPatientByIdentity(pt.CMND);

  await servicePatient.addContactPatient(pt.id,id_other_person.id)
  res.redirect("/patient/"+pt.id);
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
