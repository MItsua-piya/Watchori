const mongoose = require("mongoose");
const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["completed", "ongoing", "plan to watch"],
    required: true,
  },
  rating: {
    type: Number,
    min:0,
    max:10,
    required: true,
  },
});
module.exports =mongoose.model("Anime",animeSchema);