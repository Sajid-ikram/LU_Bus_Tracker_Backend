const router = require('express').Router();
const { createRoutine, getRoutine } = require('../controllers/routine_controller');



router.post("/", createRoutine)
// router.post("/", createNotice)
router.get("/", getRoutine)
// router.delete("/:id", deleteNotice)


module.exports = router;