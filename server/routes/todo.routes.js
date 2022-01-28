const router = require('express').Router();
const todoController = require("../controllers/todo.controller");

router.get("/", todoController.readTodos);

router.post("/todos", todoController.createTodos);

router.put("/todos:update", todoController.editTodo);

router.delete("/todos:del", todoController.deleteTodo);

module.exports = router;
