const express = require('express');
const mongoose = require('mongoose');

const router = express.Router() //Router is the function from express to handle the routes 
const Product = require('../models/product') //Importing the product model

router.get('/',(req,res,next)=>{
    // res.status(200).json({
    //     message:"Handling GET requests for products"
    // })
    Product.find()
    .exec()
    .then(doc =>{
        console.log(doc)
        res.status(200).json({
            message:"handling get req for products",
            doc
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message:"Error in handling get req",
            err
        })

    })
})

router.post('/',(req,res,next)=>{
    //Using Product Schema and parsing it
    const product = new Product ({
        // id:new mongoose.Types.ObjectId(),
        name: req.body.name,
        price:req.body.price
    });
    product.save().then(data => 
        {console.log("added in the DB",data);
        res.status(200).json({
            message:"Handling POST req for products",
            createdProducts: data 
            })
    
    })
        .catch(err => 
        {console.log("There's some error",err)
        res.status(500).json({
            err,
            message:"There is some error"
        })
    })
})

router.get('/:productId',(req,res,next)=>{
    const id= req.params.productId
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log("From Database",doc)
        if (doc){
            res.status(200).json({
                doc,
                message:"Handling get request for product"
            })
        } else{
            res.status(404).json({
                message:"No valid entry found for provided ID"
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            err,
            message:"There is some error"
        })
    })
})

router.patch('/:productId',(req,res,next) => {
    const id=req.params.productId
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Product.update({_id:id},{$set: updateOps})
    .exec()
    .then(result => {
        console.log("Updated",result)
        res.status(200).json({
            result,
            message:"Hnadling update req for products"
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            err,
            message:"Handling err in update req for products"
        })
    })
})

router.delete('/:productId',(req,res,next) => {
    const id= req.params.productId
   Product.remove({_id: id})
   .exec()
   .then(doc => {
       console.log("Deleted id",doc)
       res.status(200).json({
           doc,
           message: "handling del request for products"
       })
   })
   .catch(err => {
       console.log(err)
       res.status(500).json({
           err,
           message: "Handling error for del request for products"
       })
   })
})
module.exports= router


