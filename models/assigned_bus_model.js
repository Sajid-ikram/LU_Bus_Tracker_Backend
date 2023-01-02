const mongoose = require("mongoose");

require("dotenv").config();

const assignedBusSchema = new mongoose.Schema({

    route: {
        type: String,
        require: true,
    },
    busNumber: {
        type: String,
        require: true,
    },
    departureTime: {
        type: String,
        require: true,
    },

    createdOn: {
        type: Date,
        default: Date.now,
    }



})



module.exports = mongoose.model("AssignedBus", assignedBusSchema);