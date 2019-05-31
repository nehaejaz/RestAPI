const express = require('express');
const router = express.Router()

router.get('/',(req,res,post) => {
    res.status(200).json({
        message:"Orders Fetched"
    })
})

router.post('/',(req,res,post) => {
    res.status(201).json({
        message:"Orders posted"
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