import orderModel from "../models/OrdersModel.js";
import userModel from "../models/UserModel.js";

//ordering using COD
const placeOrder = async(req,res)=>{

    try {
        const {userId,items,amount,address} = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}});

        res.json({success:true,message:"Order Placed!!"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

}

//ordering using Stripe
const placeOrderStripe = async(req,res)=>{

}

//ordering using Razorpay
const placeOrderRazorpay = async(req,res)=>{

}


//get orders for Admin panel
const listOrders = async(req,res)=>{
    try {   
        const Orders = await orderModel.find({});
        res.json({success:true,Orders});
    } catch (error) {
        res.json({success:false,message:error.message});
    }

}

//get orders for Frontend
const userOrders = async(req,res)=>{
    try {   
        const {userId} = req.body;
        const Orders = await orderModel.find({userId});
        res.json({success:true,Orders});
    } catch (error) {
        res.json({success:false,message:error.message});
    }

}


//Updating Order status
const updateOrderStatus = async(req,res)=>{
    try {
        const {orderId,status} = req.body;

        await orderModel.findByIdAndUpdate(orderId,{status});

        res.json({success:true,message:"Updated status!!"});
    } catch (error) {
        res.json({success:false,message:error.message});
    }

}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,listOrders,userOrders,updateOrderStatus};

