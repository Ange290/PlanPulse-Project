const express = require('express');
const router = express.Router();
const TaskControl = require('../controllers/task_controller.js');
const setTime = require('../middlewares/time.js');

router.post("/create", setTime,TaskControl.create);
router.get("/get", TaskControl.getTask);
router.get("/id/:id", TaskControl.getById);
router.patch("/update/:id", TaskControl.updateTask);
router.delete("/delete/:id", TaskControl.deleteTask);

module.exports = router;