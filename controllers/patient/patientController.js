const list = (req,res) => {
    res.render('manager/patient',{
        title: "Covid Manager",
        tag: "Covid Patients"
    });
}

module.exports = { list };