const express = require("express");
const cookieParser = require("cookie-parser");
const categoryRouter = require("./router/CategoryRoute");
const userRouter = require("./router/userRouter");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/category", categoryRouter);
app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("server listen 300 port");
});
