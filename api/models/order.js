//Order Schema 
const mongoose = require("mongoose")
const schema = mongoose.Schema

//Creating a schema

const OrderSchema = new schema({
    productId: String,
    quantity: Number
})

const Order = mongoose.model("OrdersCollection",OrderSchema)

module.exports = Order