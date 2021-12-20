const service = require("../../models/Services/productService");

const list = async (req, res) => {
  const pt = await service.listProduct();
  pt.forEach(element => {
      element.price=Intl.NumberFormat('vi-VN').format(element.price)
  });
  res.render("manager/product", {
    title: "Covid Manager",
    tag: "Products",
    product: pt,
  });
};
const addProduct = (req, res) => {
   res.render("manager/addProduct", {
     nav: "nav",
     sidebar: "sidebar",
     tag: "Add Product",
   });
};
const PatientDetail = (req, res) => {
//   res.render("manager/patientDetail", {
//     nav: "nav",
//     sidebar: "sidebar",
//     tag: "Patient Detail",
//   });
};

const add = (req, res) => {
   const pt = req.body;
   console.log(pt);
   service.addProduct(pt)
     .then(res.redirect("/product"))
};

const productDetail = (req,res)=>{
  res.render("manager/productDetail",{
    nax:"nav",
    sidebar:"sidebar",
    tag:"Product Detail"
  })
}
module.exports = { list, addProduct,add,productDetail };
