import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Await } from 'react-router-dom';
import { toast } from 'react-toastify';

const ListProducts = ({token}) => {
  const currency = "$";
  const [products,setProducts] = useState([]);
  const getProducts = async()=>{
    try {
      const responce = await axios.get("http://localhost:3000/api/products/list");
      if(responce.data.success){
        setProducts(responce.data.prodcuts);
      }else{
        toast.error(responce.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const removeProduct = async(id)=>{
    try {
      const response = await axios.post("http://localhost:3000/api/products/remove",{id},{headers:{token}});
      if(response.data.success){
        toast.success(response.data.message);
        await getProducts();
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  useEffect(()=>{
    getProducts();
  },[]);

  return (
    <div>
      <div className="my-4">
        <h2 className='text-xl font-bold'>All Products List</h2>
      </div>
      <div className="">
        <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-2 shadow bg-slate-200">
          <b className='ml-2'>Image</b>
          <b className='hidden md:block'>Name</b>
          <b className='hidden md:block'>Category</b>
          <b className='hidden md:block'>Price</b>
          <b className='text-center'>Action</b>
        </div>
          {products.map((iteam,index)=>{
            return(
              <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 px-2 py-2 mt-2 bg-slate-100" key={index}>
                  <img src={iteam.image[0]} className='w-14' alt="" />
                  <p className='hidden md:block'>{iteam.name}</p>
                  <p className='hidden md:block'>{iteam.category}</p>
                  <p className='hidden md:block'>{currency}{iteam.price}</p>
                  <p className='text-center text-xl cursor-pointer' onClick={()=>removeProduct(iteam._id)}>X</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ListProducts
