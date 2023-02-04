const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./index");
dotenv.config({ path: "./config.env" });
// console.log(process.env)

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.set('strictQuery',true)
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connections);
    // console.log(con);
    console.log("Connexion réussie");
  });

const tourSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Une tour se doit d'avoir un nom"],
    unique:true
  },
  rating:{
    type:Number,
    default:4.5,
  },
  price:{
    type:Number,
    required:[true, "Une tour doit avoir un prix"]
  }
})
const Tour=mongoose.model('Tour',tourSchema)

const testTour=new Tour({
  name:"The Park Camper",
  rating:4.7,
  price: 497
})
testTour.save().then(doc=>{console.log(testTour)}).catch(err=>console.log(err))

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
