const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = sequelize.define("user", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  userPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
});

module.exports = User;
