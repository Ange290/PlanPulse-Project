const durationCalculator = require('../utils/helperFunctions.js');

const setTime= async(req, res, next) => {
     var startTime = "";
    var endTime = "";

      if(req.body.dueDate.startDate ){
       startTime = new Date(req.body.dueDate.startDate.slice(0,-1)).toLocaleTimeString();

      }
        if(req.body.dueDate.endDate){
        endTime = new Date(req.body.dueDate.endDate.slice(0,-1)).toLocaleTimeString();
        
    }
req.body.dueDate.startTime= startTime;
req.body.dueDate.endTime= endTime;
const durations = durationCalculator(req.body.dueDate.startDate, req.body.dueDate.endDate)
req.body.dueDate.duration= durations.duration;
req.body.dueDate.durationType= durations.durationType;

    next();
}
module.exports = setTime;