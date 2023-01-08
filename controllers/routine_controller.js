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


// // update user
// const updateNotice = async (req, res) => {

//     try {
//         const notice = await Notice.findOne({ _id: req.params.id });
//         notice.name = req.body.name;
//         notice.description = req.body.description,
//             notice.imageUrl = req.body.imageUrl,
//             await notice.save();
//         res.status(200).json(notice);

//     } catch (error) {
//         req.status(500).send(error.message);
//     }
// };




// //delete user
// const deleteNotice = async (req, res) => {
//     try {
//         await Notice.deleteOne({ _id: req.params.id });
//         res.status(200).json({ message: "Notice is deleted" });

//     } catch (error) {
//         req.status(500).send(error.message);
//     }
// };

module.exports = { createRoutine, getRoutine } 