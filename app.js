const express = require('express');

const app = express();
const connectDB=require("./init/db");
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const ejs =require('ejs');
app.use(express.static('public'));
mongoose.connect(process.env.MONGO_URI);
const port =3000;
app.use(express.json());
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.send("hello world");
});
app.get('/home',(req,res)=>{
    res.render('homepage.ejs');
});
app.listen(port,()=>{
    console.log(`example app listing on port ${port}`);
});