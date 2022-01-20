const { redirect } = require("express/lib/response");
const async = require("hbs/lib/async");
const { Json } = require("sequelize/dist/lib/utils");
const service = require("../../models/Services/paymentHistoryService");
const ProductService = require("../../models/Services/productService");
const PackageService = require("../../models/Services/packageService")


const list = async(req, res, user) => {
    const id = '' + user.id
    var payment = [];

    var result = await service.findByPayerId(id);
    for (r of result) {
        var pt = await PackageService.findById2(r.id_package);
        pt = pt[0]
        await Promise.all(pt.map(async(package) => {
            package.list_product = eval(package.list_product);
            const productFirst = await ProductService.findById(package.list_product[0])
            // package.imageMain = productFirst[0].image;
            // if (package.list_product.length > 1) {
            //     const productSecond = await ProductService.findById(package.list_product[1]);
            //     package.imageSecond = productSecond[0].image;
            // } else {
            //     package.imageSecond = "https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png";
            // }
            // if (package.list_product.length > 2) {
            //     const productThird = await ProductService.findById(package.list_product[2]);
            //     package.imageThird = productThird[0].image;
            // } else {
            //     package.imageThird = "https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png";
            // }
            package.price = 0;
            await Promise.all(package.list_product.map(async(product) => {
                const item = await ProductService.findById(product);
                console.log(item)
                package.price = Number(package.price) + Number(product.count) * Number(item[0].dataValues.price);
            }))
            package.price = Intl.NumberFormat('vi-VN').format(package.price) + ' đ'
        }))
        payment.push(pt)
    }
    res.render("user/packageHistory", {
      sidebar: "user",
      title: "Covid Manager",
      tag: "Package History",
      payment: payment,
    });
};


module.exports = { list };