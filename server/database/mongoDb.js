const mongoose = require("mongoose");
require("dotenv").config();


function connect() {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log("there was some error", err);
    });
}

module.exports = connect;
