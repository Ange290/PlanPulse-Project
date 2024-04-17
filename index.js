const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require('./src/router/task_route.js');
const ErrorHandler = require('./src/middlewares/errorHandler.js');
const config = require('./src/configs/index.js');
app.use(express.json())
app.use("/api",router);

//app.use(ErrorHandler);

const db = process.env.MONGOOSE_URL;
mongoose.connect(db)
.then(()=>{
  console.log("DB connection established")
})
.catch((err)=>{
   console.error(err);
})
app.listen(config.PORT,()=>{
    console.log(`Server is live on port ${config.PORT}!!`);
})
app.use(ErrorHandler);