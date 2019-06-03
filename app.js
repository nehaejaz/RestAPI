const express = require('express')
const app = express(); //getiing the express function
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const ProductRoutes = require('./api/routes/products')
const OrderRoutes = require('./api/routes/orders')
const UserRoutes = require('./api/routes/users')

//connection for MongoDB

// ES6 Promises
mongoose.Promise = global.Promise;

    // Connect to mongodb
    mongoose.connect('mongodb://localhost:/RestApiDB', {useNewUrlParser: true});
    mongoose.connection.once('open', function(){
        console.log('Connection has been made');
    }).on('error', function(error){
        console.log('Connection error:', error);
    });


//consoles the changes in any file(middleware)
app.use(morgan('dev'))

//body parsers
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// app.use((req,res,next) => {
//     res.header("Acess-Control-Allow-Origin","*") //* means all files/pages are granted access 
//     res.header("Acess-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization")
//     if(req.method === "OPTIONS") {
//         res.header("Acess-Control-Allow-Methods","PUT,POST,GET,DELETE,PATCH")
//     }
// })

//works as middleware
//Our Routes which are handling the responses  
app.use('/products',ProductRoutes)
app.use('/orders',OrderRoutes)
app.use('/user',UserRoutes)

//Route for error handling
app.use((req,res,next) => {
    const error = new Error ('Not Found')
    error.status=404;
    next(error)
})

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    })
})

module.exports = app;
