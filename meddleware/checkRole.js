const jwt = require("jsonwebtoken");
exports.RoleCheck = (req, res, next) => {
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
  if (verifyToken.role !== "admin") {
    res.status(400).json({ message: "tanii erh hurehgui bna" });
  }
  next();
};
