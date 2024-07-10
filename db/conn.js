const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();
const DB = process.env.DATABASE;


mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("DATABASE CONNECTED")).catch((err)=>{
    console.log(err)
})