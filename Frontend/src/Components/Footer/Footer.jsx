import React from 'react'
import Logo_dark from "../../assets/logo-ecomerce.png";


const Footer = () => {
  return (
    <div className="pt-24">
    <div className='flex flex-col justify-center md:text-left gap-6  md:flex-row md:justify-between px-14'>
      <div className="flex flex-col justify-center">
        <div className="w-44">
          <img src={Logo_dark} alt="" className='' />
        </div>
        <p className='pt-2 font-normal text-gray-700'>
          Lorem ipsum is a dummy or placeholder text commonly <br />used  in
          graphic design, publishing, and web development.
        </p>
      </div>
      <div className="">
        <h2 className='text-xl font-bold'>COMPANY</h2>
        <ul className='pt-2 font-normal cursor-pointer'>
            <li className='text-gray-700'>Home</li>
            <li className='text-gray-700'>About Us</li>
            <li className='text-gray-700'>Delivery</li>
            <li className='text-gray-700'>Privacy policy</li>
        </ul>
      </div>
      <div className="">
        <h2 className='text-xl font-bold'>GET IN TOUCH</h2>
        <ul className='pt-2 font-normal'>
            <li className='text-gray-700'>+91 990XXXXX08</li>
            <li className='text-gray-700 cursor-pointer'>SrihariDev07@gmail.com</li>
        </ul>
      </div>
    </div>
    <hr className='mx-6 m-4'/>
    <h4 className='text-center m-4'>Copyright 2025 $ TechSrihari.dev - All Right Reserved</h4>
    </div>
  )
}

export default Footer
