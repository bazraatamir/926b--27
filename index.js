const express = require("express");
const categoryRouter = require("./router/CategoryRoute");
const app = express();
app.use(express.json());
app.use("/api/category", categoryRouter);

app.listen(3000, () => {
  console.log("server listen 300 port");
});
