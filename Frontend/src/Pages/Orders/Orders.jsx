import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Components/Context/Context.jsx'
import { toast } from 'react-toastify';
import axios from 'axios';

const Orders = () => {
  const {token,currency} = useContext(ShopContext);
  const [Orders,setOrders] = useState([]);

  const getUserOrders = async()=>{

        try {
          if(!token){
            toast.error("Please Login!!");
            return null;
          }
            const response = await axios.post('http://localhost:3000/api/order/userorders',{},{headers:{token}});
            if(response.data.success){
                let allOrders = [];
                response.data.Orders.map((order)=>{
                  order.items.map((item)=>{
                    item["status"]=order.status
                    item["payment"]=order.payment
                    item["paymentMethod"]=order.paymentMethod
                    item["date"]=order.date
                    allOrders.push(item);
                  })
                })
                setOrders(allOrders.reverse());
            }else{
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }

    }
  useEffect(()=>{
    getUserOrders()
  },[token])
  return (
    <div className='mx-10 my-26'>
      <div className="my-4">
        <h2 className='text-xl font-bold'>My Orders</h2>
      </div>
      <hr />
      <div className="">
          {Orders.map((iteam,index)=>{
            return(
              <div className="grid grid-cols-[1.5fr_2fr_1fr] items-center gap-2 px-2 py-2 mt-2 bg-slate-100" key={index}>
                <div className="flex flex-row gap-2">
                  <img src={iteam.image[0]} className='max-w-14' alt="" />
                  <div className="hidden md:block">
                    <h2 className='font-bold'>{iteam.name}</h2>
                    <div className="flex flex-row gap-2 my-2">
                      <h2>{currency}{iteam.price}</h2>
                      <h2>Quantity:{iteam.quantity}</h2>
                      <h2>Size:{iteam.size}</h2>
                    </div>
                    <h2>{new Date(iteam.date).toDateString()}</h2>
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-2">
                  <p className='w-4 h-4 rounded-full bg-green-300 mt-1'></p>
                  <h2>{iteam.status}</h2>
                </div>
                <div className="">
                  <button type='click' className='border p-2 cursor-pointer' onClick={()=>getUserOrders()}>Track</button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Orders
