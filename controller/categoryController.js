const Category = require("../model/category");

exports.CreateCategory = async (req, res) => {
  try {
    const { CategoryName, CategoryDesc } = req.body;
    let data = await Category.create({ CategoryName, CategoryDesc });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
