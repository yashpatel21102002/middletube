const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    accessToken: {
        type: String,
        unique: true
    },
    refreshToken: {
        type: String,
        unique: true
    },
    editor: [
        {
            id: {
                type:String,
            },

            name: {
                type:String
            }
        }
    ],
    accessKey: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique:true,
    }

},{timestamps:true},{collection:"Users"})

const User = mongoose.model("User",userSchema);

module.exports = User;