

const router = require('express').Router();
const { assignBus, getAssignedBusses, deleteAssignedBusses } = require('../controllers/assigned_bus_controller');


router.post("/", assignBus)
router.get("/", getAssignedBusses)
// router.put("/:id", updateNotice)
router.delete("/", deleteAssignedBusses)


module.exports = router;