const mongoose = require("mongoose");
const mongoUri = 'mongodb+srv://Tahar-BRAHAM:Password123@mvp-project.jwq2t.travel.net/test';

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});

const db = mongoose.connection;

module.exports = db