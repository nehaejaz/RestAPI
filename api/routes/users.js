const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt') //library for hashing passwords

router.post('/signup',(req,res,next) => {
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
})

module.exports = router