require('dotenv').config()
const express= require('express');
const app= express();
const cors=require('cors');
const product = require('./Routes/product');


app.use(cors());

app.use("/",product);
console.log(process.env.PORT)

const server=app.listen(process.env.PORT,()=>{
    console.log("app is running on 5001")
})