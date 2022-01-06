const service = require("../../models/Services/treatment_placeService");

const list = async (req, res) => {
  const pt = await service.getListTreatmentPlace();
  
  res.render("manager/treatmentPlace", {
    title: "Covid Manager",
    tag: "TreatmentPlace",
    treatmentPlace: pt,
  });
};
const addTreatmentPlace = (req, res) => {
   res.render("manager/addTreatmentPlace", {
     nav: "nav",
     sidebar: "sidebar",
     tag: "Add Treatment Place",
   });
};
// const toUpdateProduct = async (req,res)=>{
//   const pt = req.body;
//   const obj = await service.findById(pt);
//   res.render("manager/updateProduct",{
//     nav:"nav",
//     sidebar: "sidebar",
//     tag: "Update Product",
//     id:obj[0].id,
//     name:obj[0].name,
//     price:obj[0].price,
//     formatPrice:Intl.NumberFormat('vi-VN').format(obj[0].price) + ' đ',
//     image:obj[0].image,
//     note:obj[0].note,
//   })
//}

const add = (req, res) => {
   const pt = req.body;
   console.log(pt);
   service.addTreatmentPlace(pt)
     .then(res.redirect("/treatmentPlace"))
};
// const deletePro=(req,res)=>{
//   const pt = req.body;
//   console.log(pt);
//   service.deleteProduct(pt).then(res.redirect("/product"));
// }

const treatmentPlaceDetail = (req,res)=>{
  res.render("manager/treatmentPlaceDetail",{
    nax:"nav",
    sidebar:"sidebar",
    tag:"Treatment Place Detail"
  })
}


// const toUpdateProduct = async (req,res)=>{
//   const pt = req.body;
//   const obj = await service.findById(pt);
//   res.render("manager/updateProduct",{
//     nav:"nav",
//     sidebar: "sidebar",
//     tag: "Update Product",
//     id:obj[0].id,
//     name:obj[0].name,
//     price:obj[0].price,
//     formatPrice:Intl.NumberFormat('vi-VN').format(obj[0].price) + ' đ',
//     image:obj[0].image,
//     note:obj[0].note,
//   })
// }
// const updateProduct=(req,res)=>{
//   const pt = req.body;
//   console.log(pt);
//   service.updateProduct(pt).then(res.redirect("/product"));
// }
module.exports = { list, addTreatmentPlace,add };
