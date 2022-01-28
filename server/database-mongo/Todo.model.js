const mongoose = require("mongoose");
const db = require("./index.js");

const todoSchema = new mongoose.Schema({
  todo:{
    type:String,
    required:true
  },
  content:String,
  completed:{
    type:Boolean,
    default:false
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;