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

exports.getAllCategory = async (req, res) => {
  try {
    let data = await Category.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getOneCategory = async (req, res) => {
  const id = req.params.id;
  try {
    let data = await Category.findOne({ where: { id: id } });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.UpdateCategory = async (req, res) => {
  const id = req.params.id;
  const { CategoryName, CategoryDesc } = req.body;

  try {
    let data = await Category.update(
      { CategoryName, CategoryDesc },
      { where: { id: id } }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.DeleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    let data = await Category.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
