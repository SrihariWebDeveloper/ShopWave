import React, { useContext, useState } from "react";
import { ShopContext } from "../../Components/Context/Context.jsx";

import stripe_icon from '../../assets/stripe_logo.png'
import razorpay_icon from '../../assets/razorpay_logo.png'
import axios from "axios";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";



// cart info page
const Info = () => {
  const navigator = useNavigate();
  const { getTotalAmmount,addCart,currency, delivery_fee ,products,token,setAddCart} = useContext(ShopContext);

  const [payment,setPayment]= useState("cod");

  const [formData,setFormData]= useState({
    firstname:'',
    lastname:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:'',
  })

  const onchangeEventHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data=>({...data,[name]:value}));
  }

  const onSubmitHandle = async(e)=>{
    e.preventDefault();
    try {
      let orderItem = [];

      for(const items in addCart){
        for(const item in addCart[items]){
          if(addCart[items][item]>0){
            const itemInfo = structuredClone(products.find(product=>product._id===items));
            if(itemInfo){
              itemInfo.size = item;
              itemInfo.quantity = addCart[items][item];
              orderItem.push(itemInfo);
            }
          }
        }
      }
      
      let orderData = {
        address:formData,
        items:orderItem,
        amount:getTotalAmmount()+delivery_fee
      }

      switch(payment){
        case 'cod':
          const response = await axios.post("https://shopwave-97x5.onrender.com/api/order/place",orderData,{headers:{token}});
          if(response.data.success){
            toast.success(response.data.message);
            navigator("/orders");
            setAddCart({});
          }else{
            toast.error(response.data.message);
          }
          break;
        default:
          break;
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <div className="mx-10 my-28">
      <form onSubmit={onSubmitHandle} className="flex flex-col justify-center lg:flex-row gap-4 w-auto">
        {/* left */}
        <div className="mt-6 flex-1">
          <h2 className="my-6 text-2xl font-bold text-center md:text-left">Delivery Information</h2>
          <div className="flex flex-col md:flex-row gap-4 m-4">
            <input
              type="text"
              name="firstname"
              id=""
              placeholder="First Name" required 
              className="border p-2 rounded flex-1" onChange={onchangeEventHandler} value={formData.firstname}
            />
            <input
              type="text"
              name="lastname"
              id=""
              placeholder="Last Name" required
              className="border p-2 rounded flex-1" onChange={onchangeEventHandler} value={formData.lastname}
            />
          </div>
          <div className="flex flex-col gap-4 m-4">
            <input
              type="Email"
              name="email"
              id=""
              placeholder="Email" required
              className="border p-2 rounded"  onChange={onchangeEventHandler} value={formData.email}
            />
            <input
              type="text"
              name="street"
              id=""
              placeholder="Street" required
              className="border p-2 rounded"  onChange={onchangeEventHandler} value={formData.street}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 m-4">
            <input
              type="text"
              name="city"
              id=""
              placeholder="City" required
              className="border p-2 rounded flex-1"  onChange={onchangeEventHandler} value={formData.city}
            />
            <input
              type="text"
              name="state"
              id=""
              placeholder="State" required
              className="border p-2 rounded flex-1"  onChange={onchangeEventHandler} value={formData.state}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 m-4">
            <input
              type="text"
              name="zipcode"
              id=""
              placeholder="Zip Code" required 
              className="border p-2 rounded flex-1"  onChange={onchangeEventHandler} value={formData.zipcode}
            />
            <input
              type="text"
              name="country"
              id=""
              placeholder="Country" required
              className="border p-2 rounded flex-1" onChange={onchangeEventHandler} value={formData.country}
            />
          </div>
          <div className="m-4">
            <input
              type="text"
              name="phone"
              id=""
              placeholder="Phone" required
              className="border p-2 rounded w-full" onChange={onchangeEventHandler} value={formData.phone}
            />
          </div>
        </div>
        {/* right */}
        <div className="mt-6 flex-1 w-auto">
          <h2 className="text-2xl my-6 font-bold">Cart Total</h2>
          <div className="w-full">
            <span className="flex flex-row justify-between border-b font-normal  my-2">
              Subtotal
              <p>
                {currency}
                {getTotalAmmount()}.00
              </p>
            </span>
            <span className="flex flex-row justify-between border-b font-normal  my-2">
              Shipping Fee
              <p>
                {currency}
                {delivery_fee}
              </p>
            </span>
            <span className="flex flex-row justify-between my-2 font-bold text-xl">
              Total
              <p>
                {currency}
                {getTotalAmmount() === 0 ? 0 : getTotalAmmount() + delivery_fee}
              </p>
            </span>
          </div>
          <div className="mt-12 flex flex-col gap-4">
            <h2 className="text-2xl my-6 font-bold">Payment Method</h2>
            <div className="flex flex-col md:flex-row gap-4 text-center">
                <div className="border flex flex-row justify-center gap-2 rounded p-2" onClick={()=>setPayment("stripe")}>
                  <h2 className={`${payment==="stripe"?"w-4 h-4 rounded-full bg-green-300 mt-3":"w-4 h-4 rounded-full border mt-3"}`}></h2>
                    <img src={stripe_icon} alt="" className="w-22 h-10"/>
                </div>
                <div className="border flex flex-row justify-center gap-2 rounded p-2" onClick={()=>setPayment("razorpay")}>
                  <h2 className={`${payment==="razorpay"?"w-4 h-4 rounded-full bg-green-300 mt-3":"w-4 h-4 rounded-full border mt-3"}`}></h2>
                    <img src={razorpay_icon} alt="" className="w-22 h-10"/>
                </div>
                <div className="border flex flex-row justify-center gap-2 rounded p-2" onClick={()=>setPayment("cod")}>
                  <h2 className={`${payment==="cod"?"w-4 h-4 rounded-full bg-green-300 mt-3":"w-4 h-4 rounded-full border mt-3"}`}></h2>
                    <h2 className="mt-2 text-[15px]">Cash On Delivery</h2>
                </div>
            </div>
             <div className="w-full">
              <button
            type="submit"
            className="bg-black p-4 mt-2 text-white w-full md:w-fit"
          >
            Proceed To Checkout
          </button>
             </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Info;
