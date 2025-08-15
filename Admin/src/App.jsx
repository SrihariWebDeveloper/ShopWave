import React, { useEffect, useState } from 'react'
import {Routes,Route, Meta} from 'react-router-dom'
import Login from './Components/AdminAuth/Login.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import SideBar from './Components/SideBar/SideBar.jsx';
import AddProduct from './Pages/Add/AddProduct.jsx';
import ListProducts from './Pages/List/ListProducts.jsx';
import Orders from './Pages/Orders/Orders.jsx';
import {toast,ToastContainer} from 'react-toastify'

export const bankend_url = import.meta.env.BACKEND_URL;

const App = () => {
  const [token,setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):"");
  useEffect(()=>{
    localStorage.setItem("token",token)
  },[token]);
  return (
    <div className="">
      <ToastContainer/>
      {!token?
      <>
      <Login setToken={setToken}/>
      </>:
      <>
      <div className="">
       <div className="w-full">
         <NavBar setToken={setToken}/>
       </div>
        <div className="flex flex-row justify-center">
          <div className=" bg-white border-r w-[18%] h-dvh">
             <SideBar/>
          </div>
          <div className="w-full h-full m-4">
            <Routes>
              <Route path='/add' element={<AddProduct token={token}/>}/>
              <Route path='/list' element={<ListProducts token={token}/>}/>
              <Route path='/orders' element={<Orders token={token}/>}/>
            </Routes>
          </div>
        </div>
      </div>
      </>}
    </div>
  )
}

export default App
