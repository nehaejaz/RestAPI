//User Schema with a collection of "UserCollection"
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, require: true}
});

const User = mongoose.model("userCollection",userSchema)

module.exports = User