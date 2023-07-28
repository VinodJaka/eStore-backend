require('dotenv').config()
const express= require('express');
const product= express.Router();
const mysql= require('mysql');

const pool= mysql.createPool({
    host:"127.0.0.1",
    user:"root",
   database:"estore1",
    password:process.env.DB_PASSWORD,
    port:3306,
    multipleStatments: true
})



product.get("/productCategories",(req,res)=>{
  let categorydata;
  

      pool.query("select * from categories",(err,categories)=>{
        if(err){
          categorydata=err;
          res.status(500).send(categorydata);
        }else{  categorydata=categories;
          res.status(200).send(categorydata); }
        
      })
    
  })

  product.get("/getProducts",(req,res)=>{
    let productData;

    pool.query("select * from products",(err,rows)=>{
      if(err){
        productData=err;
        res.status(500).send(productData);
      }else{ productData=rows ;
        res.status(200).send(productData); }
      
    })

  })

  module.exports = product;
