const express = require("express");
const cors = require("cors");
const pool = require("./config/db.config");
const hbs = require("hbs");
const path = require("path");
const flash = require("connect-flash");
const session = require('express-session');
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.use(flash());
app.use(session({
  secret: 'secret',
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: false
}));
//routes
const patient = require("./routes/patients");
const product = require("./routes/products");
const userAccount = require("./routes/user");
const package = require("./routes/package");
const payment = require("./routes/payment");

//hbs
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

//cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//database
const { QueryTypes } = require("sequelize");
const { models } = require("./models");
const sq = require("./models/index");
sq.sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

//set routes for server
app.use("/patient", patient);
app.use("/product", product);
app.use("/user", userAccount);
app.use("/addUserAccount", userAccount);
app.use("/package", package);
app.use("/payment", payment);

app.use("/", (req, res) => {
  res.render("manager/managerDashboard", {
    tag: "Patient",

  });
});

//do not change
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server listening on port " + port));
