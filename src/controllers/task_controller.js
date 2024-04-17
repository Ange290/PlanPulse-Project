const TaskSchema = require('../models/task_model.js');


/**
 * Calculates the duration between two dates.
 * @param {Date} startDate - The start date.
 * @param {Date} endDate - The end date.
 * @returns {Object} An object containing the duration and duration type.
 */


const TaskControl = {

    setTime: async(req, res, next) => {
        try {
            console.log(req.body.dueDate);
        var startTime = "";
        var endTime = "";

          if(req.body.dueDate.startDate ){
           startTime = new Date(req.body.dueDate.startDate.slice(0,-1)).toLocaleTimeString();
           //startTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          }
            if(req.body.dueDate.endDate){
            endTime = new Date(req.body.dueDate.endDate.slice(0,-1)).toLocaleTimeString();
            //endTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
req.body.dueDate.startTime= startTime;
req.body.dueDate.endTime= endTime;
 const durations = durationCalculator(req.body.dueDate.startDate, req.body.dueDate.endDate)
 req.body.dueDate.duration= durations.duration;
 req.body.dueDate.durationType= durations.durationType;
   
     
        console.log(req.body.dueDate);
        next();
    } catch (error) {
       next(error);
    }
    },

    create: async(req, res,next) => {
        try {
            const newTask = await TaskSchema.create(req.body);
            res.status(201).json(newTask);
        } catch (error) {
          next(error);
        }
    },
    getTask: async(req, res,next) => {
        try {
            const get = await TaskSchema.find();
            res.status(200).json(get);
        } catch (error) {
          next(error);
        }
    },
    getById: async(req, res,next) => {
        try {
            const id= req.params.id;
             const get = await TaskSchema.findById(id);
            res.status(200).json(get);
        } catch (error) {
          
            next(error);
        }
    },
    updateTask: async(req,res, next) => {
        try {
            const id= req.params.id;
            const update = await TaskSchema.findByIdAndUpdate(id, req.body);
            res.status(200).json(update);
        } catch (error) {
            next(error);
        }
    }, 
    deleteTask: async(req,res, next) => {
        try {
            const id= req.params.id;
            const deleteTask = await TaskSchema.findByIdAndDelete(id);
            res.status(200).json(deleteTask);
        } catch (error) {
          next(error);
        }
    }

};

module.exports = TaskControl;