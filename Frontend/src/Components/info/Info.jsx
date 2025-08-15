import React from 'react'
import quality_icon from '../../assets/quality_icon.png'
import support_icon from '../../assets/support_img.png'
import exchange_icon from '../../assets/exchange_icon.png'


const Info = () => {
  return (
    <div className="mx-10 my-26">
        <h2 className="text-4xl font-bold mt-5 text-center">Our Service's</h2>
         <p className="mt-6 font-light text-center text-wrap text-xl mx-6 lg:font-normal  text-stone-500">
          Lorem ipsum is a dummy or placeholder text commonly used <br /> in
          graphic design, publishing, and web development.
        </p>
      <div className="flex flex-col justify-center w-full md:flex-row mt-10">
        <div className="m-6 flex gap-4 justify-center">
            <img src={exchange_icon} alt="" className='w-12 h-12 my-8 p-2 bg-blue-200 shadow rounded' />
           <div className="my-6 pt-1">
             <h2 className='text-2xl font-bold'>Easy Exchange Policy</h2>
            <p className='font-light text-stone-500'>We offer hassle free exchange policy</p>
           </div>
        </div>
        <div className="m-6 flex gap-4 justify-center">
            <img src={support_icon} alt="" className='w-12 h-12 my-8 p-2 bg-blue-200 shadow rounded' />
           <div className="my-6 pt-1">
             <h2 className='text-2xl font-bold'>Best Customer Support</h2>
            <p className='font-light text-stone-500'>We Provide 24/7 customer support</p>
           </div>
        </div>
        <div className="m-6 flex gap-4 justify-center">
            <img src={quality_icon} alt="" className='w-12 h-12 my-8 p-2 bg-blue-200 shadow rounded' />
           <div className="my-6 pt-1">
             <h2 className='text-2xl font-bold'>7 Days Return Policy</h2>
            <p className='font-light text-stone-500'>We Provide 7 days free return policy</p>
           </div>
        </div>
      </div>
      <div className="mt-14">
        <h2 className="text-4xl font-bold mt-5 text-center">Subscribe now & get 20% off</h2>
         <p className="mt-6 font-light text-center text-wrap mx-6 lg:font-normal  text-stone-500">
          Lorem ipsum is a dummy or placeholder text commonly used <br /> in
          graphic design, publishing, and web development.
        </p>
        <div className="flex flex-row justify-between h-12 mx-10 border-b-gray-700 border md:mx-40 lg:mx-78 mt-8 rounded">
            <input type="text" placeholder='Enter your email id' className='rounded outline-none w-full h-full pl-2' />
            <button type='submit' className='bg-blue-300 rounded-tr rounded-br p-2 w-18 text-[10px] md:w-26 md:text-[16px]'>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default Info
