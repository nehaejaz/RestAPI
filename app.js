const express = require('express')
const app = express(); //getiing the express function

const ProductRoutes = require('./api/routes/products')

//works as middleware
app.use('/products',ProductRoutes)

module.exports = app;