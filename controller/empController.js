const res = require("express/lib/response");
const empSchema = require("../db/employeeSchema");

async function getdata() {
  return await empSchema.find({});
}

async function postdata(data) {
  let ins = await new empSchema(data);
  ins.save((err) => {
    if (err) throw err;
  });
}

async function deletedata(id) {
  await empSchema.deleteOne({ _id: id }, (err) => {
    if (err) throw err;
  });
}

async function putdata(id, data) {
  empSchema.updateOne({ _id: id }, { $set: data }, (err) => {
    if (err) throw err;
  });
}

module.exports = { getdata, postdata, putdata, deletedata };
