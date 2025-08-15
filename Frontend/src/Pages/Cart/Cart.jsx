import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Components/Context/Context.jsx'
import bin_icon from '../../assets/bin_icon.png'

import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const navigate = useNavigate();
  const {addCart,products,currency,getTotalAmmount,delivery_fee,updateUserCart} = useContext(ShopContext);

  const [cart,setCart] = useState([]);

  useEffect(()=>{
    if(products.length>0){
      let tempData = [];

    for(const iteams in addCart){
      for(const iteam in addCart[iteams]){
        if(addCart[iteams][iteam]>0){
          tempData.push({
            _id:iteams,
            size:iteam,
            quantity:addCart[iteams][iteam]
          })
        }
      }
    }
    setCart(tempData);
    }
  },[addCart,products])

  return (
    <div className="mx-10 mt-26 md:mb-68">
        <h2 className="text-xl md:text-3xl font-bold mt-5">Your Cart</h2>
        <hr className='my-4'/>
        {cart.map((iteam,index)=>{

          const productData = products.find((product)=>product._id===iteam._id);


          return(
            <div key={index}>
              {/* <CartInfo name={productData.name} image={productData.image[0]} price={productData.price} size={iteam.size} quantity={iteam.quantity} id={iteam._id}/> */}
              <div className="mt-8">
                    <div className="flex flex-row justify-between border-b">
                        <div className="flex flex-row w-1/2 m-2">
                          <img src={productData.image[0]} alt="" className='max-w-14 md:max-w-18' />
                          <div className="mt-2 ml-2">
                              <h2 className='md:text-xl font-bold'>{productData.name}</h2>
                              <div className="flex flex-row gap-2 mt-2">
                                  <h3 className='text-xl'>{currency}{productData.price}</h3>
                                  <h3 className='shadow bg-amber-100 w-12 text-center'>{iteam.size}</h3>
                              </div>
                          </div>
                        </div>
                        <div className="mt-10">
                          <input onChange={(e)=> e.target.value==='' || e.target.value==='0'?null:updateUserCart(iteam._id,iteam.size,Number(e.target.value))} type="number" name="" className='w-16 p-2 border rounded' id="" defaultValue={iteam.quantity} />
                        </div>
                        <div className="">
                          <img src={bin_icon} alt="" onClick={()=>updateUserCart(iteam._id,iteam.size,0)} className='w-6 h-6 m-10 cursor-pointer'/>
                        </div>
                      </div>
                  </div>
            </div>
          )
        })}
        <div className="md:float-right w-62 h-full md:w-98 shadow bg-slate-100 mt-12">
          <div className="m-4">
            <h2 className='text-2xl font-bold'>Cart Total:-</h2>
            <div className="">
              <span className='flex flex-row justify-between border-b font-normal my-2'>Subtotal <p>{currency}{getTotalAmmount()}.00</p></span>
              <span className='flex flex-row justify-between border-b font-normal  my-2'>Shipping Fee <p>{currency}{delivery_fee}</p></span>
              <span className='flex flex-row justify-between my-2 font-bold text-xl'>Total <p>{currency}{getTotalAmmount()===0?0:getTotalAmmount()+delivery_fee}</p></span>
            </div>
            <button onClick={()=>navigate('/cartInfo')}  type="submit" className='bg-black text-white p-2 md:float-right my-2 font-normal cursor-pointer'>Proceed To Checkout</button>
          </div>
        </div>
    </div>
  )
}

export default Cart
