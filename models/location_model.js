const mongoose = require("mongoose");

require("dotenv").config();

const locationSchema = new mongoose.Schema({

    id: {
        type: String,
        require: true,
    },
    latitude: {
        type: String,
        require: true,
    },
    longitude: {
        type: String,
        require: true,
    },

})



module.exports = mongoose.model("Location", locationSchema);