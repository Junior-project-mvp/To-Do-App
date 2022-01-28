const mongoose = require("mongoose");
const db = require("./index.js");

const todoSchema = new mongoose.Schema({
  content: {
  type: String,
  required: {
    type:Boolean,
    default:false
  }
  },
  date: {
  type: Date,
  default: Date.now
  }
  })

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;