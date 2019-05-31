const express = require('express')
const app = express(); //getiing the express function
const morgan = require('morgan')

const ProductRoutes = require('./api/routes/products')
const OrderRoutes = require('./api/routes/orders')

app.use(morgan('dev'))
//works as middleware
//Our Routes which are handling the responses  
app.use('/products',ProductRoutes)
app.use('/orders',OrderRoutes)

module.exports = app;