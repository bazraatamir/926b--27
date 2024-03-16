const { json } = require("express");

const fs = require("fs").promises;

class Todo {
  constructor(todo, id) {
    this.id = id;
    this.Todo = todo;
  }
  getTodo = async () => {
    let data = await fs.readFile("./todo.json", "utf-8");
    return data;
  };
  addTodo = async () => {
    let data = await fs.writeFile("./todo.json", JSON.stringify(this));
    return data;
  };
}

module.exports = Todo;
