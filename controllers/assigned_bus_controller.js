let AssignedBus = require('../models/assigned_bus_model');




const assignBus = async (req, res) => {
    try {
        const addedBus = AssignedBus({

            route: req.body.route,
            busNumber: req.body.busNumber,
            departureTime: req.body.departureTime,


        });

        await addedBus.save();

        res.status(201).json(addedBus);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getAssignedBusses = async (req, res) => {
    const departureTime = req.query.departureTime;


    try {
        const assignedBus = await AssignedBus.find({ departureTime: departureTime });
        res.status(200).json(assignedBus);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteAssignedBusses = async (req, res) => {
    try {
        await AssignedBus.deleteOne({ busNumber: req.query.busNumber });
        res.status(200).json({ message: "Removed" });

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { assignBus, getAssignedBusses, deleteAssignedBusses } 