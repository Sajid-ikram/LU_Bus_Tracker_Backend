const router = require('express').Router();
const { createLocation } = require('../controllers/location_controller');



router.post("/", createLocation)
// router.post("/", createNotice)
// router.put("/:id", updateNotice)
// router.delete("/:id", deleteNotice)


module.exports = router;