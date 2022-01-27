const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  post: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("emp", employeeSchema);
