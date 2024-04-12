const TaskSchema = require('../models/task_model.js');
const moment = require('moment');
const TaskControl = {

    setTime: async(req, res, next) => {
        try {
            console.log(req.body.dueDate);
        var startTime = "";
        var endTime = "";
        var duration = 0;
        var durationInSeconds = 0;
        var durationInMinutes = 0;
        var durationInHours=0;
      
          if(req.body.dueDate.startDate && req.body.dueDate.endDate){
          
            startTime = moment(req.body.dueDate.startDate).format('HH:mm:ss');
            endTime = moment(req.body.dueDate.endDate).format('HH:mm:ss');

            duration = moment(req.body.dueDate.endDate).diff(moment(req.body.dueDate.startDate));
            durationInSeconds = Math.floor(duration / 1000);
            durationInMinutes = Math.floor(durationInSeconds / 60);
            durationInHours = Math.floor(durationInMinutes / 60);
            durationInDays = Math.floor(durationInHours / 24);
            durationInWeeks = Math.floor(durationInDays / 7);
            durationInMonths = Math.floor(durationInWeeks / 4);
        }

        req.body.dueDate.startTime = startTime;
        req.body.dueDate.endTime = endTime;
     if (durationInSeconds < 60){
        req.body.dueDate.duration = durationInSeconds;
        req.body.dueDate.durationType = 'Seconds';
     }else
        if (durationInMinutes < 60){
            req.body.dueDate.duration = durationInMinutes;
            req.body.dueDate.durationType ='Minutes';
        }
        else
        if(durationInHours < 24){
            req.body.dueDate.duration = durationInHours;
            req.body.dueDate.durationType = 'Hours';
        }
     else
     if(durationInWeeks < 7){
    req.body.dueDate.duration = durationInWeeks;
    req.body.dueDate.durationType = 'Weeks'; 
    }
    else{
        req.body.dueDate.duration = durationInMonths;
        req.body.dueDate.durationType = 'Months';
    }
     
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