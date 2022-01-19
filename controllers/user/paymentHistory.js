const service = require("../../models/Services/paymentHistoryService");

const PackageService = require("../../models/Services/packageService")
const list = async(req, res, user) => {
    const id = '' + user.id
    var payment = [];
    var i = 0;

    const result = await service.findByPayerId(id);
    for (r of result) {
        var packages = await PackageService.findById2(r.id_package);
        payment[i].package_name = packages[0].name;
        payment[i].count = r.count;
        payment[i].time_start = r.time_start;
        payment[i].price = r.price;
        payment[i].list_product = r.list_product;
        i++;
    }
    res.render("user/paymentHistory", {
      sidebar: "user",
      title: "Covid Manager",
      tag: "Payment History",
      payment: payment,
    });
};



module.exports = { list };