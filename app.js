const express = require('express');

const app = express();

const ejs =require('ejs');
app.use(express.static('public'));
const port =3000;

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