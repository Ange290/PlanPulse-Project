const ErrorHandler =(err,req,res,next) => {
    console.log("Middleware Error Handling");
     const errStatus=err.statusCode || 500;
     const errMessage=err.message || "Internal Server Error";
     res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMessage,
        stack: Process.env.NODE_ENV === "development" ? err.stack:{}
     })
}
module.exports = ErrorHandler;