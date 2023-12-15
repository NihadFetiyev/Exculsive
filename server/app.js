const express = require('express')
const app = express()
import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const { Schema } = mongoose;
const blogSchema = new Schema({
    image:  {type: String},
    title:  String, // String is shorthand for {type: String}
    price: {type: String},
    rating: {type: String},
  });

  const Products = mongoose.model('Product', productSchema);


app.get('/products', (req, res) => {
    try {
        const products = 
        res.send(products)
    } catch (error) {
        res.status(500).send({message: error})
    }
})
app.get('/products/:id', (req, res) => {
    try {
        const products = 
        res.send(products)
    } catch (error) {
        res.status(500).send({message: error})
    }
})
app.post('/', (req, res) => {
    res.send('Got a POST request')
})
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})