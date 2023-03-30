const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
 id : {type:mongoose.Schema.Types.ObjectId,require:true},
title : {type:String,require:true},
description : {type:String,require:true},
user : {type:String,require:true},
price: {type:Number,require:true},
id : {type:String,require:true},
isDeleted:{type: String,
    default: 0},
},{timestamps:true})

module.exports = mongoose.model("product",productSchema)