const { redirect } = require("express/lib/response");
const async = require("hbs/lib/async");
const { Json } = require("sequelize/dist/lib/utils");
const service = require("../../models/Services/packageService");
const serviceProduct = require("../../models/Services/productService");

const list = async (req, res) => {
  const pt = await service.listPackage();
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
      console.log(item)
      package.price = Number(package.price)+Number(product.count)*Number(item[0].dataValues.price);
    }))
    package.price=Intl.NumberFormat('vi-VN').format(package.price)+' đ'
  }))
  res.render('manager/package',{
    nav: "nav",
    sidebar: "sidebar",
    tag: "Package",
    package:pt
  })
};
const addPackage = async (req, res) => {
    const pt = await serviceProduct.listProduct();
    pt.forEach(element => {
      element.price=Intl.NumberFormat('vi-VN').format(element.price)
    });
   res.render("manager/addPackage", {
     nav: "nav",
     sidebar: "sidebar",
     tag: "Add Package",
     product:pt,

   });
};

const add = (req, res) => {
  const pt = req.body;
  var Jsonfy='[';
  for(var i = 0;i<pt.idProduct.length;i++){
    Jsonfy=Jsonfy+"{ id:'"+pt.idProduct[i]+"' , count:'"+pt.product_count[i]+"'},";
  }
  Jsonfy=Jsonfy+']';
  service.addPackage(pt,Jsonfy).then(res.redirect("/package"));
  console.log(Jsonfy);
};

module.exports = { list, addPackage,add};
