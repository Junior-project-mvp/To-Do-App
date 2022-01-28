const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000

const todoRoutes = require('./routes/todo.routes')

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('./database-mysql');
var todos = require('./database-mongo');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/items", todoRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
