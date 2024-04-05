const mongoose = require("mongoose");

const Task_Model = new mongoose.Schema({
    TaskName:{
        type:String,
        required: true
    },
   description: String,

   status:{
    type: String,
    enum:['TODO','IN PROGRESS','COMPLETED','LATE','OVERDUE'],
    default:'TODO'
   },
   startDate:{
    type:Date,
    required: true
   },
   endDate:Date,

   startTime:{
    type: String,
    default:'12:00 AM'
   },
   endTime:{
    type:String,
    default:'12:00 AM'
   },
   duration:{
    type:Number,
    default:0
   }
});
const TaskSchema= mongoose.model('Tasks', Task_Model)
module.exports= TaskSchema;