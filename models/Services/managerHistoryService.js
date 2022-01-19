const { models } = require("..");
const { QueryTypes } = require("sequelize");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const addManagerPatientLog = async (id,type,date,describe) =>{
  const manager = await models.UserAccount.findOne({ 
    where: {id},
    raw: true,
  });

  console.log(manager);
  let log;
  if(type == "add"){
    log = "date: " + date + " manager " + manager.user_name + " add patient "+ describe;
  }
  else if(type == "change"){
    log = "date: " + date + " manager " + manager.user_name + " update patient " + describe;
  }
    try {
      await models.ManagerHistory.create({
      id_manager: id,
      type: "add",
      describe: log,
      });
    } catch (err) {}
}

const addManagerProductLog = async (id, type, date, describe) => {
  const manager = await models.UserAccount.findOne({
    where: { id },
    raw: true,
  });

  console.log(manager);
  let log;
  if (type == "add") {
    log =
      "date: " +
      date +
      " manager " +
      manager.user_name +
      " add product " +
      describe;
  } else if (type == "update") {
    log =
      "date: " +
      date +
      " manager " +
      manager.user_name +
      " update product " +
      describe;
  }
  else if(type == "delete") {
    log =
      "date: " +
      date +
      " manager " +
      manager.user_name +
      " delete product " +
      describe;
  }
  try {
    await models.ManagerHistory.create({
      id_manager: id,
      type: "add",
      describe: log,
    });
  } catch (err) {}
};

const addManagerPackageLog = async (id, type, date, describe) => {
  const manager = await models.UserAccount.findOne({
    where: { id },
    raw: true,
  });

  console.log(manager);
  let log;
  if (type == "add") {
    log =
      "date: " +
      date +
      " manager " +
      manager.user_name +
      " add package " +
      describe;
  } else if (type == "update") {
    log =
      "date: " +
      date +
      " manager " +
      manager.user_name +
      " update package " +
      describe;
  } else if (type == "delete") {
    log =
      "date: " +
      date +
      " manager " +
      manager.user_name +
      " delete package " +
      describe;
  }
  try {
    await models.ManagerHistory.create({
      id_manager: id,
      type: "add",
      describe: log,
    });
  } catch (err) {}
};

const logList = ()=>{
  return models.ManagerHistory.findAll({
    raw: true,
  });
}
module.exports = {
  addManagerPatientLog,
  addManagerProductLog,
  addManagerPackageLog,
  logList
};
