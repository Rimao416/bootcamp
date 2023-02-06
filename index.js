const express = require("express"); //Faire appel au Package d'expressJs
const morgan = require("morgan");
const tourRouter=require('./routes/tourRoutes')
const userRouter=require("./routes/userRoutes")
const app = express();


 
// 1) MIDDLEWARE
if(process.env.NODE_ENV==='development'){
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});


// 2) ROUTE HANDLERS


// 3) ROUTES



app.use((req, res, next) => {
  console.log("Hello from middleware");
  next();
});


app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.all('*',(req,res,next)=>{
  res.status(404).json({
    status:'fail',
    message:`Can't find ${req.originalUrl} on this server`
  })
})
// 4) SERVER

module.exports=app;