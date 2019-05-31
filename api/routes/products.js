const express = require('express');

const router = express.Router() //Router is the function from express to handle the routes 

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling GET requests for products"
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling POST req for products"
    })
})

module.exports= router


