let Notice = require('../Models/notice_model');


const getAllNotice = async (req, res) => {
    const LIMIT = 8;
    const skip = req.query.skip ? Number(req.query.skip) : 0;
    try {
        const notice = await Notice.find().sort({ createdOn: -1 }).skip(skip).limit(LIMIT);
        res.status(200).json(notice);

    } catch (error) {
        res.status(500).send(error.message);
    }
}



const createNotice = async (req, res) => {
    try {
        const newNotice = Notice({

            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl, 


        });

        await newNotice.save();
        res.status(201).json(newNotice);

    } catch (error) {
        res.status(500).send(error.message);
    }
};


// update user
const updateNotice = async (req, res) => {

    try {
        const notice = await Notice.findOne({ _id: req.params.id });
        notice.name = req.body.name;
        notice.description = req.body.description,
            notice.imageUrl = req.body.imageUrl,
            await notice.save();
        res.status(200).json(notice);

    } catch (error) {
        res.status(500).send(error.message);
    }
};




//delete user
const deleteNotice = async (req, res) => {
    try {
        await Notice.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Notice is deleted" });

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getAllNotice, createNotice, updateNotice, deleteNotice } 