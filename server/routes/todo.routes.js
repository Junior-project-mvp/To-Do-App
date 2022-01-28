const router = require('express').Router();
const todoController = require("../controllers/todo.controller");

router.get("/", todoController.readTodos);

router.post("/user", todoController.createTodos);



module.exports = router;
