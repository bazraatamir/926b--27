const jwt = require("jsonwebtoken");
exports.verifyToken = (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return res.status(400).json({ message: "ta newternuu" });
  }
  const verifyToken = jwt.verify(token, "bazraa");
  if (!verifyToken) {
    res
      .status(400)
      .json({ message: "tanii erh duusan bna ta dahin  newternuu" });
  }
  next();
};
