const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require('./router/task_route.js');
app.use(express.json())
app.use("/api",router)
const port = process.env.PORT
const db = process.env.MONGOOSE_URL;
mongoose.connect(db)
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is live on port ${port}!!`);
    })
})
.catch((err)=>{
   console.error(err);
})