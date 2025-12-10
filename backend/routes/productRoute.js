import express from 'express';
import {addProduct,removeProduct,singleProduct,listProduct} from '../controllers/productController.js'
import upload from './../middleware/multer';

const ProductRouter = express.Router();

ProductRouter.post('/add',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
ProductRouter.post('/remove',removeProduct);
ProductRouter.post('/single',singleProduct);
ProductRouter.get('/list',listProduct);

export default ProductRouter;
