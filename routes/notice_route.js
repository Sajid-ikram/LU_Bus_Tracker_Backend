const router = require('express').Router();
const { getAllNotice, createNotice, updateNotice, deleteNotice} = require('../controllers/notice_controller');


router.get("/", getAllNotice)
router.post("/", createNotice)
router.put("/:id", updateNotice)
router.delete("/:id", deleteNotice)


module.exports = router;