const router = require('express').Router();
const { getAllNotice, createNotice, updateNotice, deleteNotice} = require('../controllers/notice_controller');


router.get("/", getAllNotice)
router.post("/", createNotice)
router.put("/", updateNotice)
router.delete("/", deleteNotice)


module.exports = router;