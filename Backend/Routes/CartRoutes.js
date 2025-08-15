import express from 'express'
import { addCart, getCart, updateCart } from '../Controllers/CartControler.js';
import verifyUser from '../Middleware/UserMiddleware.js';

const CartRouter = express.Router();

CartRouter.post('/get',verifyUser,getCart);
CartRouter.post('/add',verifyUser,addCart);
CartRouter.post('/update',verifyUser,updateCart);

export default CartRouter;