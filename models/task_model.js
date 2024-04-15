const mongoose = require("mongoose");

const Task_Model = new mongoose.Schema({
    tittle:{
        type:String,
        required: true,
        unique:[true, "Tittle must be unique"],
        minLength:[5, "Tittle must be at least 5 long" ],
        mixLength:[50, "Tittle can't exceed 50 characters"]
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
        values:["Seconds","Minutes","Hours","Days","Weeks","Months"],
        message:"{VALUE} is not  a valid duration type"
    }
}}
});
Task_Model.pre('save', function(next){
    if(this.dueDate.startDate && this.dueDate.endDate){
        if(this.dueDate.endDate < this.dueDate.startDate){
            return next(new Error("End Date must be greater than Start Date"));
        }
    }
    if(this.dueDate.startTime && this.dueDate.endTime){
const startDate = new Date(this.dueDate.startDate);
const startTime = new Date(startDate.toDateString() + ' ' + this.dueDate.startTime);
const endTime = new Date(endDate.toDateString() + ' ' + this.dueDate.endTime);
if(endTime < startTime){
     return next(new Error("End Time must be greater than Start Time"));
    }
}
});
Task_Model.path("tittle").validate({
    validator:(value)=>{
        return value.length;
    },
    message:"Title must be less than or equal to 50 characters"
});
const TaskSchema= mongoose.model('Tasks', Task_Model)
module.exports= TaskSchema;