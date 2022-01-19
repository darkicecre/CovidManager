const service = require("../../models/Services/productService");
const serviceManagerHistory = require("../../models/Services/managerHistoryService");

const list = async (req, res) => {
  const pt = await service.listProduct();
  pt.forEach(element => {
      element.price=Intl.NumberFormat('vi-VN').format(element.price)
  });
  res.render("manager/product", {
    sidebar: "manager",
    title: "Covid Manager",
    tag: "Products",
    product: pt,
  });
};
const addProduct = (req, res) => {
   res.render("manager/addProduct", {
     sidebar: "manager",
     tag: "Add Product",
   });
};
const toUpdateProduct = async (req,res)=>{
  const pt = req.body;
  const obj = await service.findById(pt);
  res.render("manager/updateProduct", {
    sidebar: "manager",
    tag: "Update Product",
    id: obj[0].id,
    name: obj[0].name,
    price: obj[0].price,
    formatPrice: Intl.NumberFormat("vi-VN").format(obj[0].price) + " đ",
    image: obj[0].image,
    note: obj[0].note,
  });
}

const add = (req, res) => {
  const pt = req.body;
  
  service.addProduct(pt);
  const date = Date.now();
   serviceManagerHistory.addManagerProductLog(
     req.session.user.id,
     "add",
     date,
     pt.name
  );
  res.redirect("/product")
};
const deletePro=(req,res)=>{
  const pt = req.body;
  const date = Date.now();
  serviceManagerHistory.addManagerProductLog(
    req.session.user.id,
    "delete",
    date,
    pt.name
  );
  service.deleteProduct(pt).then(res.redirect("/product"));
}

const productDetail = (req,res)=>{
  res.render("manager/productDetail", {
    sidebar: "manager",
    tag: "Product Detail",
  });
}

const updateProduct=(req,res)=>{
  const pt = req.body;
  
  const date = Date.now();
  serviceManagerHistory.addManagerProductLog(
    req.session.user.id,
    "update",
    date,
    pt.name
  );
  service.updateProduct(pt).then(res.redirect("/product"));
}
module.exports = { list, addProduct,add,productDetail, deletePro,toUpdateProduct, updateProduct };
