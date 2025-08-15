import React from 'react'
import {NavLink} from 'react-router-dom'
import { assets } from '../../assets/admin_assets/assets.js'

const SideBar = () => {
  return (
    <div className='md:ml-6'>
      <NavLink to={'/add'} className="bg-white border-l border-t border-b rounded-bl rounded-tl my-10 cursor-pointer flex flex-row gap-4">
          <img src={assets.add_icon} alt="" className='my-2 ml-2'/>
          <h2 className='text-xl my-2 hidden lg:block'>Add Iteams</h2>
      </NavLink>
      <NavLink to={'/list'} className="bg-white border-l border-t border-b rounded-bl rounded-tl my-10 cursor-pointer flex flex-row gap-4">
          <img src={assets.order_icon} alt="" className='my-2 ml-2'/>
          <h2 className='text-xl my-2 hidden lg:block'>List Iteams</h2>
      </NavLink>
      <NavLink to={'/orders'} className="bg-white border-l border-t border-b rounded-bl rounded-tl my-10 cursor-pointer flex flex-row gap-4">
          <img src={assets.order_icon} alt="" className='my-2 ml-2'/>
          <h2 className='text-xl my-2 hidden lg:block'>Orders</h2>
      </NavLink>
    </div>
  )
}

export default SideBar
