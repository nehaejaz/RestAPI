const express = require('express');

const router = express.Router() //Router is the function from express to handle the routes 

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Handling GET requests for products"
    })
})

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:"Handling POST req for products"
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


