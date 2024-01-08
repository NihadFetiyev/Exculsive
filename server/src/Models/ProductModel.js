import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    image: String,
    name: String, 
    price: Number,
    discount: Number,
    discountPrice: Number,
    comment: Number,
},{timestamps: true}
);

 const productModel = model('Products', productSchema);

 export default productModel