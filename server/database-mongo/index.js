const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost/mvp";

// connecting the database
mongoose.connect(
  mongoUri,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("db connected");
  }
);

const db = mongoose.connection;

module.exports = db;
