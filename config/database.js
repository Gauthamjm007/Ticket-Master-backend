const mongoose = require("mongoose");
const startDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/ticket-master")
    .then(() => {
      console.log("connected to the database");
    })
    .catch(() => {
      console.log("error connecting to the database");
    });
};

module.exports = startDB;
