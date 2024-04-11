const mongoose = require("mongoose");

const Task_Model = new mongoose.Schema({
    tittle:{
        type:String,
        required: true,
        unique:[true, "Tittle must be unique"]
    },
   description: String,

   status:{
    type: String,
    enum:['TODO','IN PROGRESS','COMPLETED','LATE','OVERDUE'],
    default:'TODO'
   },
   dueDate:{
   startDate:{
     type:Date,
    required: false,
      },
   endDate:Date,

   startTime:{
    type: String,
  required:false
   },
   endTime:{
    type:String,
    required:false
   },
   duration:{
    type:Number,
    required:false
   },
durationType:{
    type:String,
    required:false,
    enum:{
        values:["Minutes","Hours","Days","Weeks","Months"],
        message:"{VALUE} is not  a valid duration type"
    }
}}
});
const TaskSchema= mongoose.model('Tasks', Task_Model)
module.exports= TaskSchema;