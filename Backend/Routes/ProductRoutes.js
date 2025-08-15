import express from 'express'
import { addProduct, getProductInfo, listProducts, removeProduct } from '../Controllers/ProductCrontroller.js';
import upload from '../Middleware/multer.js';
import adminAuth from '../Middleware/AdminMiddleWare.js';

const productRoute = express.Router();

productRoute.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
productRoute.get('/list',listProducts);
productRoute.post('/remove',adminAuth,removeProduct);
productRoute.get('/single',getProductInfo);

export default productRoute;
