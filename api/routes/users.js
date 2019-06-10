const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt') //library for hashing passwords


router.get('/',(req,res,next)=>{
    // res.status(200).json({
    //     message:"Handling GET requests for products"
    // })
    User.find()
    .exec()
    .then(doc =>{
        console.log(doc)
        res.status(200).json({
            message:"handling get req for users",
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

router.post('/signup',(req,res,next) => {
    User.find({email: req.body.email}).exec()
    .then(user => {
        if(user.length >=1 ){
            res.status(409).json({
                message:"User already exist with this email"
            })
        }
        else{
            bcrypt.hash(req.body.password,10,(err,hash) => {
                if(err){
                    console.log(err)
                    return res.status(500).json({
                        err,
                    })
                }else {
                    const user = new User({
                        email:req.body.email,
                        password: hash
                    })
                    user.save()
                    .then(result => {
                        console.log("User added",result)
                         res.status(201).json({
                            message: "User SignUp",
                            result
                        })
                    })
                    .catch(err => {
                        console.log(err);
                         res.status(500).json({
                            message:'error in signup user',
                            err
                        })
                    })
                }
            })
        }
    })
    
})

router.delete('/:userId',(req,res,next) => {
    const id= req.params.userId
    User.deleteOne({_id:id})
    .exec()
    .then(doc => {
        console.log("user deleted", doc)
        res.status(200).json({
            message: "user deleted"
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message:"Error in deleting the user",
            err
        })
    })
})

module.exports = router