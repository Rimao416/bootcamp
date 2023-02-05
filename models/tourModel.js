const mongoose = require("mongoose");
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Une tour se doit d'avoir un nom"],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, "A tour must be a duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A group must a group size"],
  },
  difficulty: {
    type: String,
    // required: [true, "A tour should have a difficulty"],
    enum: {
      values: ["easy", "medium", "difficult"],
      message: "Parmi ces 3 seulement",
    },
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must have above 1.0"],
    max: [5, "Rating must have  below 5.0"],
  },
  ratingsQuantity: { type: Number, default: 0 },
  price: {
    type: Number,
    required: [true, "Une tour doit avoir un prix"],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, "A tour should have a Summary"],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "A tour must have a images"],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select:false
  },
  startDates: [Date],
  secretTour: {
    type: Boolean,
    default: false,
  }
},{
  toJSON:{virtuals:true},
  toObject:{virtuals:true}
});

tourSchema.virtual('durationWeeks').get(function(){
  return this.duration/7
})

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
