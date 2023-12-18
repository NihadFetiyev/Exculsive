const mongoose = require('mongoose');


// Products schema
const productSchema = new mongoose.Schema({
    image: String,
    name: String, // String is shorthand for {type: String}
    price: String,
    discount: String,
    discountPrice: String,
    comment: Number,
},{timestamps: true}
);

 const productModel = mongoose.model('Products', productSchema);

 module.exports = productModel