const mongoose=require("mongoose")
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
  module.exports=Tour;
  