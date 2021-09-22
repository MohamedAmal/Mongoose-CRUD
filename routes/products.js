const express = require('express')
const Product = require('../schemas/product')
const router = express.Router()

router.get('/list', async (req, res) => {
    const response = await Product.find({})
    res.send(response)
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const response = await Product.find({ _id: id })
    res.send(response);
});

router.post("/add", async (req, res) => {
    const body = req.body;
    if (body.name.length > 0 && body.price > 0 && body.brand.length > 0) {
        const newProduct = new Product({
            name: body.name,
            price: body.price,
            brand: body.brand
        })
        const errors = newProduct.validateSync()
        if (errors) {
            res.send(errors)
        } else {
            const response = await newProduct.save().catch((e) => { console.log(e) })
            res.send(response);
        }
    }
    else {
        res.send("Input Error!!");
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updateQuery = await Product.updateOne({ _id: id, "name": body.name, "price": body.price, "brand": body.brand })
    res.send(updateQuery);
});


router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const deleteQuery = await Product.deleteOne({})
    res.send(deleteQuery);
});

module.exports = router