
const list = (req,res) => {
    res.render('manager/patient',{
        title: "Covid Manager",
        tag: "Covid Patients"
    });
}
const addPatient = (req,res) => {
    res.render('manager/addPatient',{
        nav: 'nav',
        sidebar: 'sidebar',
        tag: "Add Patient"
    })
}
const PatientDetail = (req,res) => {
    res.render('manager/patientDetail',{
        nav: 'nav',
        sidebar: 'sidebar',
        tag: "Patient Detail"
    })
}
module.exports = { list,addPatient,PatientDetail };