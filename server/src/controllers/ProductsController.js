// import productModel from "../Models/ProductModel";
// import productModel, { findById, findByIdAndDelete, findByIdAndUpdate } from '../Models/ProductModel.js';


export const GetProducts = async (req, res) => {
    try {

        const products = await find({});
        res.send(products)
    } catch (error) {
        res.status(500).json({ message: error })

    }
}

export const GetProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await findById(id)
        res.send(product)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const CreateProduct = async (req, res) => {
    try {
        const product = new productModel(req.body);
        await product.save()
        res.send(product)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const DeleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await findByIdAndUpdate(id, req.body)

        res.send(product)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const UpdateProduct = async (req, res) => {
    try {
        const product = await findByIdAndDelete(req.params.id)
        res.send(product)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}





