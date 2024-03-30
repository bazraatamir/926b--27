const express = require("express");
const router = express.Router();
const { CreateCategory } = require("../controller/categoryController");
router.post("/create", CreateCategory);

module.exports = router;
