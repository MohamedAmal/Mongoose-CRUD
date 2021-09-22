require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productsRouter = require('./routes/products')


console.log(process.env.CONNECTION_STRING)
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log('connected to mongodb') })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products', productsRouter)
app.listen(3000, () => { console.log('server is up and running at port 3000') })


// H8XptEhSANkmb7FT
// mongodb+srv://first-mongo:H8XptEhSANkmb7FT@cluster0.6thy3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority