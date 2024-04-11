const express = require('express');
const router = express.Router();
const TaskControl = require('../controllers/task_controller.js');

router.post("/create", TaskControl.setTime,TaskControl.create);
router.get("/get", TaskControl.getTask);

module.exports = router;