import express from 'express'
import { CreateProduct, DeleteProduct, GetProductById, GetProducts, UpdateProduct } from '../controllers/ProductsController.js';

export const ProductRouter = express.Router()

// CRUD for products
ProductRouter.get('/products', GetProducts)

ProductRouter.get('/:id', GetProductById)

ProductRouter.post('/', CreateProduct)

ProductRouter.put('/:id', DeleteProduct)

ProductRouter.delete('/:id', UpdateProduct)


