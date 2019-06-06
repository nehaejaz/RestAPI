const express = require('express');
const router = express.Router()
const Order = require("../models/order")//Importing Order Schema 

router.get('/',(req,res,post) => {
    res.status(200).json({
        message:"Orders Fetched"
    })
})

router.post('/',(req,res,post) => {
    const order = new Order({
        productId:req.body.productId,
        quantity: req.body.quantity
    })
    order.save()
    .then(doc => {
        console.log("order created as",doc)
        res.status(201).json({
            message:"Success Handling post request",
            CreatedOrder: doc
        })
    })
    .catch(err => {
        console.log(err)
        res.status(201).json({
            message:"Orders posted",
            Order:order
        })
    })
})

router.post('/:ordersId',(req,res,post) => {
    const id=req.params.ordersId
    res.status(201).json({
        message:"Orders posted",
        id
    })
})

router.delete('/:ordersId',(req,res,post) => {
    const id=req.params.ordersId
    res.status(200).json({
        message:"Orders deleted",
        id
    })
})

module.exports=router