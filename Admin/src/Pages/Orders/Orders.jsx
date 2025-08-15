import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-toastify';
import { assets } from '../../assets/admin_assets/assets';

const Orders = ({token}) => {
  const [orders,setOrders] = useState([]);

  const fetchOrders = async()=>{
    try {
      const response = await axios.post("http://localhost:3000/api/order/list",{},{headers:{token}});
      if(response.data.success){
        setOrders(response.data.Orders);
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const updateStatus = async(event,orderId)=>{
    try {
      const response = await axios.post("http://localhost:3000/api/order/status",{orderId,status:event.target.value},{headers:{token}});

      if(response.data.success){
        await fetchOrders();
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  console.log(orders)
  useEffect(()=>{
    fetchOrders();
  },[token])
  return (
    <div>
      <div className="my-4">
        <h2 className='text-xl font-bold'>My Orders</h2>
      </div>
      <hr />
      <div className="">
          {orders.map((iteam,index)=>{
            return(
              <div className="grid grid-row-[0.3fr_0.5fr_0.5fr_0.5fr_0.5fr] md:grid-cols-[0.3fr_1.5fr_1fr_1fr_1fr] items-center gap-2 px-2 py-2 mt-2 bg-slate-100" key={index}>
                <img src={assets.parcel_icon} alt="" />
                <div className="">
                  {iteam.items.map((item,index)=>{
                    return(
                      <p className='font-bold' key={index}>{item.name}</p>
                    )
                  })}
                  <div className="">
                    <p>{iteam.address.firstname + iteam.address.lastname},</p>
                    <p>{iteam.address.street},</p>
                    <p>{iteam.address.city + "," + iteam.address.state + "," +iteam.address.country + ","+ iteam.address.zipcode}</p>
                  </div>
                </div>
                <div className="">
                  {iteam.items.map((item,index)=>{
                    return(
                      <p key={index}>Iteams: {item.quantity} <br /> Size: {item.size}</p>
                    )
                  })}
                  <p>Method: {iteam.paymentMethod}</p>
                  <p>Payment: {iteam.payment?"Done":"Pending"}</p>
                  <p>Date: {new Date(iteam.date).toLocaleDateString()}</p>
                </div>
                <div className="font-bold">
                  ${iteam.amount}
                </div>
                 <div className="font-bold">
                  <select name="" onChange={(event)=>updateStatus(event,iteam._id)} id="" value={iteam.status} className='border p-2'>
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out off Delivery">Out off Delivery</option>
                    <option value="Deliverd">Deliverd</option>
                  </select>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Orders
