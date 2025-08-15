import React from 'react'
import { assets } from '../../assets/admin_assets/assets.js'

const NavBar = ({setToken}) => {
  return (
    <>
      <div className="bg-white shadow">
          <div className="border-b flex flex-row justify-between">
            <img src={assets.logo} alt="" width={120} className="m-4" />
            <button type="submit" className="cursor-pointer bg-black m-4 text-white px-6 rounded-full" onClick={()=>setToken('')}>
              LogOut
            </button>
          </div>
        </div>
        
    </>
  )
}

export default NavBar
