import express from 'express'
import { listOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateOrderStatus, userOrders } from '../Controllers/OrderControllers.js';
import adminAuth from '../Middleware/AdminMiddleWare.js';
import verifyUser from '../Middleware/UserMiddleware.js';

const orderRoute = express.Router();

//admin routes
orderRoute.post('/list',adminAuth,listOrders);
orderRoute.post('/status',adminAuth,updateOrderStatus);


//payment features
orderRoute.post('/place',verifyUser,placeOrder);
orderRoute.post('/stripe',verifyUser,placeOrderStripe);
orderRoute.post('/razorpay',verifyUser,placeOrderRazorpay);

//user orders
orderRoute.post('/userorders',verifyUser,userOrders);

export default orderRoute;