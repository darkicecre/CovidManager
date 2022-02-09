const { redirect } = require("express/lib/response");
const async = require("hbs/lib/async");
const { Json } = require("sequelize/dist/lib/utils");
const servicePackage = require("../../models/Services/packageService");
const serviceProduct = require("../../models/Services/productService");
const list = async (req, res) => {
    const pt = await serviceProduct.listProduct();
    pt.forEach(element => {
        element.price = Intl.NumberFormat('vi-VN').format(element.price)
    });

    res.render('user/purchase', {
        tag: "Purchase",
        sidebar: "user",
        product: pt,
    });

};


module.exports = { list };
