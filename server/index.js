const express = require('express')
const app = express()
const mongoose = require("mongoose")
const authRouter = require("./routes/auth")
const youtubeRouter = require("./routes/youtube")
const dotenv = require('dotenv')
const cors = require('cors')


app.use(express.json());
dotenv.config();
app.use(cors());
app.use("/auth",authRouter);
app.use("data",youtubeRouter);

mongoose.connect(process.env.MONGO_URL).then(
    console.log("connected to db")
)
const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("server is running on 8080")
})