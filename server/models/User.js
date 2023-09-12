const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    accessToken:{
        type:String,
        required: true,
        unique:true
    },
    refreshToken: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique:true,
    },
   

},{timestamps:true},{collection:"Users"})

const User = mongoose.model("User",userSchema);
module.exports = User;