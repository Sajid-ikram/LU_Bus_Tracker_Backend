let Routine = require('../models/routine_model');


const getRoutine = async (req, res) => {

    try {
        const type = req.query.type ? req.query.type : "0";
 
        if(type != "0"){
            const routine = await Routine.find({type : type});
            res.status(200).json(routine);
        }else{
            res.status(200).json("please provide type");
        }
        

    } catch (error) {
        res.status(500).send(error.message);
    }
}



const createRoutine = async (req, res) => {
    try {
        const newRoutine = Routine({

            type: req.body.type,
            routineUrl: req.body.routineUrl,
 
        });

        await newRoutine.save();
        res.status(201).json(newRoutine);

    } catch (error) {
        req.status(500).send(error.message);
    }
};



module.exports = { createRoutine, getRoutine } 