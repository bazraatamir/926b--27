const express = require("express");
const Todo = require("./model/todoModel");
const app = express();

app.use(express.json());

app.get("/api/todo", async (req, res) => {
  const todo = new Todo();
  let data = await todo.getTodo();

  res.status(200).json({
    data,
    message: "GET хүсэлт амилтай элгээгдлээ",
  });
});

app.post("/api/todo/create", async (req, res) => {
  const todo = new Todo(req.body.todo);
  let data = await todo.addTodo();

  res.status(200).json({
    todo,
    message: "POST хүсэлт амилтай элгээгдлээ",
  });
});

app.put("/api/todo/update/:id", (req, res) => {
  res.status(200).json({
    message: "PUT хүсэлт амилтай элгээгдлээ",
  });
});

app.delete("/api/todo/create", (req, res) => {
  res.status(200).json({
    message: "DELETE хүсэлт амилтай элгээгдлээ",
  });
});

app.listen(3000, () => {
  console.log("sever listen 3000 port");
});
