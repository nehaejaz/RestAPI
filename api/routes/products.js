const express = require('express');
const mongoose = require('mongoose');

const router = express.Router() //Router is the function from express to handle the routes 
const Product = require('../models/product') //Importing the product model

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling GET requests for products"
    })
})

router.post('/',(req,res,next)=>{
    //Using Product Schema and parsing it
    const product = new Product ({
        // id:new mongoose.Types.ObjectId(),
        name: req.body.name,
        price:req.body.price
    });
    product.save().then(res => 
        {console.log("added in the DB",res)})
        .catch(err => {console.log("There's some error",err)})
    res.status(201).json({
        message:"Handling POST req for products",
        createdProducts: product ,
    })
})

router.get('/:productId',(req,res,next)=>{
    const id= req.params.productId
    if(id === 'special'){
        res.status(200).json({
            message:"You discovered Special ID :D",
            id
        })
    } else {
        res.status(200).json({
            message:"you passed an ID",
            id
        })
    }
})

router.patch('/:productId',(req,res,next) => {
    const id=req.params.productId
    res.status(200).json({
        message:'Updated products',
        id
    })
})

router.delete('/:productId',(req,res,next) => {
    const id= req.params.productId
    res.status(200).json({
        message:"deleted product",
        id
    })
})
module.exports= router


