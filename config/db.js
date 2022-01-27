const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/mongocruds";
async function connectionDB() {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log("connected");
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = connectionDB;
