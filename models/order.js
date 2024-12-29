const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");
const Customer = require("./customer");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Order.belongsTo(Customer, { onDelete: "CASCADE" }); // Associate orders with customers
Customer.hasMany(Order);

module.exports = Order;
