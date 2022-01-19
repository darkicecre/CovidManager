const { redirect } = require("express/lib/response");
const async = require("hbs/lib/async");
const { Json } = require("sequelize/dist/lib/utils");
const servicePackage = require("../../models/Services/packageService");
const serviceProduct = require("../../models/Services/productService");

const list = async (req, res) => {
    const pt = await servicePackage.listPackage();
    await Promise.all(pt.map(async (package)=>{
        package.list_product = eval(package.list_product);
        const productFirst = await serviceProduct.findById(package.list_product[0])
        package.imageMain = productFirst[0].image;
        if(package.list_product.length>1){
        const productSecond = await serviceProduct.findById(package.list_product[1]);
        package.imageSecond = productSecond[0].image;
        }
        else{
        package.imageSecond = "https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png";
        }
        if(package.list_product.length>2){
        const productThird = await serviceProduct.findById(package.list_product[2]);
        package.imageThird = productThird[0].image;
        }
        else{
        package.imageThird = "https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png";
        }
        package.price = 0;
        await Promise.all(package.list_product.map(async (product)=>{
        const item = await serviceProduct.findById(product);
        package.price = Number(package.price)+Number(product.count)*Number(item[0].dataValues.price);
        }))
        package.price=Intl.NumberFormat('vi-VN').format(package.price)+' đ'
        package.link="/package/detailPackage/"+package.id
    }))
    res.render('user/purchase',{
        tag: "Purchase",
        package:pt
    })
};

module.exports = { list };