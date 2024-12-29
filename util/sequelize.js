const sequelize = require("./database");
const Customer = require("../models/customer");
const Order = require("../models/order");

// Sync models with the database
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to MSSQL established successfully.");
    await sequelize.sync({ alter: true }); // Sync models to reflect database schema
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = { sequelize, Customer, Order };