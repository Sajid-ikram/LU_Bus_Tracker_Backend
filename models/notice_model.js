const mongoose = require("mongoose");

require("dotenv").config();

const userSchema = new mongoose.Schema({
 
  name: {
    type: String,
    require: true, 
  },
  description: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  }

})



module.exports = mongoose.model("Notice", userSchema);