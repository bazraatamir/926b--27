const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
const Category = require("./category");
const Blog = sequelize.define("Blog", {
  BlogName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  BlogDesc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Blog.hasOne(Category);
Category.belongsTo(Blog);


module.exports = Blog;
