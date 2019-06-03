const mongoose = require('mongoose');
const schema = mongoose.Schema;

//creating a schema

const ProductSchema = new schema( {
    name: String,
    price: Number,
})

const Product = mongoose.model("ProductsCollection",ProductSchema)

module.exports = Product