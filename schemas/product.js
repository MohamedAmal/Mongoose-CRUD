const mongoose = require('mongoose')

// Defining product Schema
const productSchema = new mongoose.Schema({
    name: {type:String,required:true},
    price: {type:Number,required:true},
    brand: {type:String,required:true}
})

// Defining the product model from schema
const Product = mongoose.model('Product', productSchema)

module.exports = Product