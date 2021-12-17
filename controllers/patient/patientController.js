const service = require("../../models/Services/patientService");

const list = async (req, res) => {
  const pt = await service.listPatient();

  res.render("manager/patient", {
    title: "Covid Manager",
    tag: "Covid Patients",
    patient: pt,
  });
};
const addPatient = (req, res) => {
  res.render("manager/addPatient", {
    nav: "nav",
    sidebar: "sidebar",
    tag: "Add Patient",
  });
};
const PatientDetail = (req, res) => {
  res.render("manager/patientDetail", {
    nav: "nav",
    sidebar: "sidebar",
    tag: "Patient Detail",
  });
};

const add = (req, res) => {
  const pt = req.body;
  console.log(pt);
  service.addPatient(pt)
    .then(res.redirect("/patient"))
};
module.exports = { list, addPatient, PatientDetail, add };
