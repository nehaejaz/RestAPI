const express = require('express')
const app = express(); //getiing the express function

//works as middleware
app.use((req,res,next) => {
    res.status(200).json({
        message:"it works"
    })
})

module.exports = app;