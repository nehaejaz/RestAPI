//User Schema with a collection of "UserCollection"
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
    email:{type:String,
        required:true,
        unique:true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password:{type:String, require: true}
});

const User = mongoose.model("userCollection",userSchema)

module.exports = User