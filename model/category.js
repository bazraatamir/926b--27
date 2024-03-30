const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
const Category = sequelize.define("category", {
  CategoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CategoryDesc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Category;
