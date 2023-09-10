const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    googleId:{
        type:String,
        required: true,
        unique:true
    },
    accessKey: {
        type: String,
        unique: true,
    },
    email: {
        type: email
    },
    password:{
        type:String,
    }

},{timestamps:true},{collection:"Users"})

const User = mongoose.model("User",userSchema);
export default User;