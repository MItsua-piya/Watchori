
const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env")
});

const mongoose = require("mongoose");

console.log("MONGO_URI loaded:", Boolean(process.env.MONGO_URI));


// const mongoose = require("mongoose");
const Anime = require("../models/Anime.js");
const animeData = require("./db");
async function initDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
        await Anime.deleteMany({});
        await Anime.insertMany(animeData);

        console.log("Sample anime data inserted sucessfully");
    }catch(error){
        console.log("database init failed",error);
    }finally{
        await mongoose.disconnect();
    }
}

initDB();