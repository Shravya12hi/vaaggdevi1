const express=require("express");
const MongoClient=require('mongoose');
const dotEnv=require('dotenv')
const app=express();

dotEnv.config();
const PORT=process.env.PORT || 5500;

MongoClient.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDb connected successfully")
})
.catch((err)=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log(`my port is running on ${PORT} number`);
})