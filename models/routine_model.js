const mongoose = require("mongoose");

require("dotenv").config();

const routineSchema = new mongoose.Schema({

    type: {
        type: String,
        require: true,
    },

    routineUrl: {
        type: String,
        require: true,
    },


})


module.exports = mongoose.model("Routine", routineSchema);