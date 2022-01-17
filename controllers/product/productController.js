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
     tag: "Add Product",
   });
};
const toUpdateProduct = async (req,res)=>{
  const pt = req.body;
  const obj = await service.findById(pt);
  res.render("manager/updateProduct",{
    tag: "Update Product",
    id:obj[0].id,
    name:obj[0].name,
    price:obj[0].price,
    formatPrice:Intl.NumberFormat('vi-VN').format(obj[0].price) + ' đ',
    image:obj[0].image,
    note:obj[0].note,
  })
}

const add = (req, res) => {
   const pt = req.body;
   console.log(pt);
   service.addProduct(pt)
     .then(res.redirect("/product"))
};
const deletePro=(req,res)=>{
  const pt = req.body;
  console.log(pt);
  service.deleteProduct(pt).then(res.redirect("/product"));
}

const productDetail = (req,res)=>{
  res.render("manager/productDetail",{
    tag:"Product Detail"
  })
}

const updateProduct=(req,res)=>{
  const pt = req.body;
  console.log(pt);
  service.updateProduct(pt).then(res.redirect("/product"));
}
module.exports = { list, addProduct,add,productDetail, deletePro,toUpdateProduct, updateProduct };
