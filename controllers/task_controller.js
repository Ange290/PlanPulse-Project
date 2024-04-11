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
        else{
            req.body.dueDate.duration = durationInHours;
            req.body.dueDate.durationType = 'Hours';
        }
     
      
     
        console.log(req.body.dueDate);
        next();
    } catch (error) {
        res.status(500).json(error.message);
    }
    },

    create: async(req, res) => {
        try {
            const newTask = await TaskSchema.create(req.body);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    getTask: async(req, res) => {
        try {
            const get = await TaskSchema.find();
            res.status(200).json(get);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
};

module.exports = TaskControl;