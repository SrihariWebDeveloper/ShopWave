import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../Context/Context.jsx';


const Card = ({name,price,image,id}) => {
  const navigate = useNavigate();
  const {currency} = useContext(ShopContext);
  return (
      <div className=" text-gray-700 bg-white shadow cursor-pointer rounded max-w-56"  onClick={()=>navigate(`/products/${id}`)}>
        <div className="overflow-hidden">
          <img src={image} className='hover:scale-110 transition ease-in-out rounded-tl rounded-tr' alt="" />
        </div>
        <p className='pt-2 pb-1 text-xl mx-2 font-bold'>{name}</p>
        <p className='text-xl font-medium mx-2 mb-3'>{currency}{price}</p>
      </div>
  )
}

export default Card
