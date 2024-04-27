const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ROWLOCK } = require("sequelize/lib/table-hints");

exports.Register = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(userPassword, salt);

    const user = await userModel.create({
      userName,
      userEmail,
      userPassword: hashPassword,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ where: { UserEmail: email } });

    if (!user) {
      res.status(400).json({ message: "email buruu bna" });
    }
    const checkPass = bcrypt.compare(password, user.userPassword);
    if (!checkPass) {
      res.status(400).json({ message: "password buruu bna" });
    }
    const token = jwt.sign({ name: user.userName, role: user.role }, "bazraa", {
      expiresIn: "1h",
    });

    res
      .cookie("token", token)
      .status(200)
      .json({ message: "amjiltai nevterlee", token: token });
  } catch (error) {
    res.status(400).json(error);
  }
};
