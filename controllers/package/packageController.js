const { redirect } = require("express/lib/response");
const async = require("hbs/lib/async");
const { Json } = require("sequelize/dist/lib/utils");
const service = require("../../models/Services/packageService");
const serviceProduct = require("../../models/Services/productService");

const list = async (req, res) => {
  const pt = await service.listPackage();
  await Promise.all(pt.map(async (package) => {
    package.list_product = eval(package.list_product);
    const productFirst = await serviceProduct.findById(package.list_product[0])
    // package.imageMain = productFirst[0].image;
    if (package.list_product.length > 1) {
      const productSecond = await serviceProduct.findById(package.list_product[1]);
      //package.imageSecond = productSecond[0].image;
    }
    // else{
    //   package.imageSecond = "https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png";
    // }
    if (package.list_product.length > 2) {
      const productThird = await serviceProduct.findById(package.list_product[2]);
      //package.imageThird = productThird[0].image;
    }
    // else{
    //   package.imageThird = "https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png";
    // }
    package.price = 0;
    await Promise.all(package.list_product.map(async (product) => {
      const item = await serviceProduct.findById(product);
      package.price = Number(package.price) + Number(product.count) * Number(item[0].dataValues.price);
    }))
    package.price = Intl.NumberFormat('vi-VN').format(package.price) + ' đ'
    package.link = "/package/detailPackage/" + package.id

  }))
  res.render("manager/package", {
    sidebar: "manager",
    tag: "Package",
    package: pt,
    price: pt[0].price
  });
};
const addPackage = async (req, res) => {
  const pt = await serviceProduct.listProduct();
  pt.forEach(element => {
    element.price = Intl.NumberFormat('vi-VN').format(element.price)
  });
  res.render("manager/addPackage", {
    sidebar: "manager",
    tag: "Add Package",
    product: pt,
  });
};

const add = async (req, res) => {
  const pt = req.body;
  var Jsonfy = '[';
  for (var i = 0; i < pt.idProduct.length; i++) {
    Jsonfy = Jsonfy + '{ "id":"' + pt.idProduct[i] + '" , "count":"' + pt.product_count[i] + '"}';
    if (i != pt.idProduct.length - 1) {
      Jsonfy = Jsonfy + ","
    }
  }
  Jsonfy = Jsonfy + ']';
  await service.addPackage(pt, Jsonfy).then(res.redirect("/package"));

};
const updatePackage = async (req, res) => {
  const pt = req.body;
  var Jsonfy = '[';
  for (var i = 0; i < pt.idProduct.length; i++) {
    Jsonfy = Jsonfy + '{ "id":"' + pt.idProduct[i] + '" , "count":"' + pt.product_count[i] + '"}';
    if (i != pt.idProduct.length - 1) {
      Jsonfy = Jsonfy + ","
    }
  }
  Jsonfy = Jsonfy + ']';
  await service.update(pt, Jsonfy).then(res.redirect("/package"));
}
const deletePackage = async (req, res) => {
  const pt = req.body;
  await service.deletePackage(pt).then(res.redirect("/package"));
}
const toUpdatePackage = async (req, res) => {
  const pt = req.body;
  const obj = await service.findById(pt);
  const listProduct = JSON.parse(obj[0].list_product);
  const list = [];
  for (var i = 0; i < listProduct.length; i++) {
    const item = await serviceProduct.findById(listProduct[i]);
    item[0].dataValues.count = listProduct[i].count;
    list.push(item[0].dataValues)
  }
  const ph = await serviceProduct.listProduct();
  ph.forEach(element => {
    element.price = Intl.NumberFormat('vi-VN').format(element.price)
  });
  res.render("manager/updatePackage", {
    sidebar: "manager",
    tag: "Update Package",
    id: obj[0].id,
    name: obj[0].name,
    listProduct: JSON.stringify(list),
    limitDay: obj[0].limit_count_package_day,
    limitWeek: obj[0].limit_count_package_week,
    limitMonth: obj[0].limit_count_package_month,
    product: ph
  })

}
const packageDetail = async (req, res) => {
  try {
    const package = await service.findById2(req.params.id);
    const val = package[0].dataValues
    val.list_product = eval(val.list_product)
    val.products = []
    for (var i = 0; i < val.list_product.length; i++) {
      const product = await serviceProduct.findById(val.list_product[i]);
      product[0].dataValues.count = val.list_product[i].count
      val.products.push(product[0].dataValues)
    }
    console.log(val)
    res.render("manager/packageDetail", {
      sidebar: "manager",
      title: "Covid Manager",
      tag: "Package Detail",
      id: req.params.id,
      name: val.name,
      price: val.products.price,
      limit_day: val.limit_count_package_day,
      limit_week: val.limit_count_package_week,
      limit_month: val.limit_count_package_month,
      products: val.products,
    });
  } catch (err) { }
};

module.exports = { list, addPackage, add, deletePackage, toUpdatePackage, updatePackage, packageDetail };
