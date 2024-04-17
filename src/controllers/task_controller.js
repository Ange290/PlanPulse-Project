const TaskSchema = require('../models/task_model.js');


/**
 * Calculates the duration between two dates.
 * @param {Date} startDate - The start date.
 * @param {Date} endDate - The end date.
 * @returns {Object} An object containing the duration and duration type.
 */


const TaskControl = {
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