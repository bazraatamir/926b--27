const express = require("express");
const router = express.Router();
const { Register, Login } = require("../controller/userController")

router.post('/resgister', Register).post('/login', Login)

module.exports = router