const mongoose=require("mongoose");
const uri=process.env.MONGO_URI;
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected sucessfully");
    }catch(error){
        console.error("connection failed",error.message);
        process.exist(1);
    }
}
module.exports=connectDB;