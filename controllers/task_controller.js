const TaskSchema = require('../models/task_model.js');

TaskControl={
 createTask: async(req,res)=>{
        try {
            const newTask = await TaskSchema.create(req.body);
            res.status(201).json(newTask)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports= TaskControl;