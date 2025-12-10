import express from 'express';
import {addProduct,removeProduct,singleProduct,listProduct} from '../controllers/productController.js'
 

const ProductRouter = express.Router();

ProductRouter.post('/add',addProduct);
ProductRouter.post('/remove',removeProduct);
ProductRouter.post('/singe',singleProduct);
ProductRouter.get('/list',listProduct);

export default ProductRouter;