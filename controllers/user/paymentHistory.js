const service = require("../../models/Services/paymentHistoryService");

const PackageService = require("../../models/Services/packageService")
const list = async(req, res, user) => {
    const id = '' + user.id
    var payment = [];
    var i = 0;

    const result = await service.findByPayerId(id);
    for (r of result) {
        var packages = await PackageService.findById2(r.id_package);
        var p = {
            package_name: packages[0].name,
            count: r.count,
            time_start: r.time_start,
            price: r.price

        }
        payment.push(p)
    }
    res.render("user/paymentHistory", {
        sidebar: "user",
        title: "Covid Manager",
        tag: "Payment History",
        payment: payment,
    });
};



module.exports = { list };