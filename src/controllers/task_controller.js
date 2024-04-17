const TaskSchema = require('../src/models/task_model.js');

// const durationCalculator = (startTime, endTime) => {

//     const durations = {
//         duration: 0,
//         durationType: ''
//       };
      
//       var startDateAsNumber = new Date(startTime).getTime();
//       var endDateAsNumber = new Date(endTime).getTime();
//       var oneHour = 1000*60*60;
//       var difference = endDateAsNumber - startDateAsNumber;
//       var numberOfHours = difference/oneHour;
    
      
//       if (numberOfHours < 1) {
//         let numberOfMinutes = Math.floor(difference/(1000*60));
//         durations.duration = numberOfMinutes;
//         durations.durationType = "Minutes"; 
//       } else if (numberOfHours >= 1 && numberOfHours < 24) {
//         durations.duration = numberOfHours;
//         durations.durationType = "Hours"
//       } else if (numberOfHours >= 24 && numberOfHours < 168) {
//         durations.duration = numberOfHours/24;
//         durations.durationType = "Days"
//       }
//       return durations;
//     }
function durationCalculator(startDate, endDate) {
    const durations = {
        duration: 0,
        durationType: ''
    };

    var startDateAsNumber = new Date(startDate).getTime();
    var endDateAsNumber = new Date(endDate).getTime();
    var difference = endDateAsNumber - startDateAsNumber;
    var oneHour = 1000 * 60 * 60;
    var numberOfHours = difference / oneHour;

    if (numberOfHours < 1) {
        let numberOfMinutes = Math.floor(difference / (1000 * 60));
        durations.duration = numberOfMinutes;
        durations.durationType = "Minutes";
    } else if (numberOfHours >= 1 && numberOfHours < 24) {
        durations.duration = Math.floor(numberOfHours);
        durations.durationType = "Hours";
    } else if (numberOfHours >= 24 && numberOfHours < 168) {
        durations.duration = Math.floor(numberOfHours / 24);
        durations.durationType = "Days";
    }

    return durations;
}

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