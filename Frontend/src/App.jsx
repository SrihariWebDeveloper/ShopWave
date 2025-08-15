import React from 'react'
import {Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar.jsx'
import Home from './Pages/Home/Home.jsx'
import ProductsInfo from './Pages/ProductsDeatils/ProductsInfo.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Product from './Pages/Product/Product.jsx'
import Footer from './Components/Footer/Footer.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Orders from './Pages/Orders/Orders.jsx'
import { ToastContainer, toast } from 'react-toastify';
import LogIn from './Pages/auth/LogIn.jsx'
import Info from './Pages/CartInfo/Info.jsx'


export const bankend_url = import.meta.env.BACKEND_URL;

const App = () => {
  return (
    <div className='w-full h-full'>
      <ToastContainer/>
      <div className="fixed top-0 w-full z-10">
        <NavBar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<LogIn/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products/:productId' element={<ProductsInfo/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cartInfo' element={<Info/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
