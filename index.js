const express = require("express");
const mongoose = require("mongoose");
const app = express()
const bodyParser = require("body-parser")
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',userRoutes)
app.use('/product',productRoutes)
mongoose.connect("mongodb+srv://shubh:jaishriram@cluster0.kkc8rbl.mongodb.net/converseai?retryWrites=true&w=majority")
.then(result=>{
    app.listen(3000)
    console.log("connected")
}).catch(error=>console.log(error))