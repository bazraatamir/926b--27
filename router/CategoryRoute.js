const express = require("express");
const router = express.Router();
const {
  CreateCategory,
  getAllCategory,
  getOneCategory,
  UpdateCategory,
  DeleteCategory,
} = require("../controller/categoryController");
const { verifyToken } = require("../meddleware/protect");
const { RoleCheck } = require("../meddleware/checkRole");
router
  .post("/create", verifyToken, CreateCategory)
  .get("/getAllCategory", getAllCategory)
  .get("/getOneCategory/:id", getOneCategory)
  .put("/updateCategory/:id", UpdateCategory)
  .delete("deleteCategory/:id", DeleteCategory);

module.exports = router;
