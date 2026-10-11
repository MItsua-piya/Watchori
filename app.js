const express = require('express');

const app = express();
const connectDB=require("./init/db");
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const Anime = require("./models/Anime");
const ejs =require('ejs');
app.use(express.static('public'));
mongoose.connect(process.env.MONGO_URI);
const port =3000;
app.use(express.json());
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.send("hello world");
});
app.get("/home",async(req,res)=>{
    try{
        const animeList =await Anime.find({});
        if(animeList.length>0){
res.render("homepage",{animeList});
        }else{
            res.send("YOur DB is empty");
        }
        
    }catch(err){
          console.error(err);
    res.status(500).send("Failed to load anime"); 
    }
})

app.listen(port,()=>{
    console.log(`example app listing on port ${port}`);
});