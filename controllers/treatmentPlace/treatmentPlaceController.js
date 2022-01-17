const service = require("../../models/Services/treatment_placeService");
const serviceAddress = require("../../models/Services/addressService");

const list = async (req, res) => {
  const pt = await service.getListTreatmentPlace();
  for(var i=0;i<pt.length;i++){
    pt[i].address=JSON.parse(pt[i].address);
    var address = pt[i].address.detail+", "+pt[i].address.ward+", "+pt[i].address.district+", "+pt[i].address.city;
    pt[i].address=address;
    pt[i].count = await service.countPatientByTreatmentId(pt[i].id);
  }
  res.render("admin/treatmentPlace", {
    title: "Covid Manager",
    tag: "TreatmentPlace",
    treatmentPlace: pt,
  });
};
const addTreatmentPlace = (req, res) => {
  const addressData = serviceAddress.getDataStringify();
  const obj = JSON.parse(addressData);
   res.render("admin/addTreatmentPlace", {
     tag: "Add Treatment Place",
     address: obj,
     addressStringify:addressData,
   });
};
const add = (req, res) => {
   const pt = req.body;
   var address = '{"city":"'+pt.city+'","district":"'+pt.address_district+'","ward":"'+pt.address_ward+'","detail":"'+pt.address_detail+'"}';
   
   console.log(pt);
   service.addTreatmentPlace(pt,address)
     .then(res.redirect("/treatmentPlace"))
};

const treatmentPlaceDetail = (req,res)=>{
  res.render("admin/treatmentPlaceDetail",{
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
