const express = require('express')
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0.v5hrfic.mongodb.net/?retryWrites=true&w=majority").then(
    console.log("connected to db")
)

app.listen(8080,()=>{
    console.log("server is running on 8080")
})