import React from 'react'
import Lottie from 'lottie-react'
import AnimationPhoto from '../../assets/Lottie/AnimationData.json'
import arrow_icon from '../../assets/arrow_icon.svg'

const Header = () => {
  return (
    <div>
      <div className='flex flex-col-reverse justify-center md:flex-row md:mt-15 mt-15 z-10'>
      <div className="md:p-14 lg:mt-14">
        <h2 className='text-xl ml-6 font-medium tracking-widest text-center md:text-left lg:text-4xl'>Shop <span className='text-4xl font-bold lg:text-6xl'>Smarter</span> <br/>Live <span className='text-4xl font-bold lg:text-6xl'>Better.</span></h2>
        <p className='mt-6 font-light text-center md:text-left text-wrap text-xl mx-6 lg:font-normal'>Lorem ipsum is a dummy or placeholder text commonly used <br /> in graphic design, publishing, and web development. </p>
        <div className="md:flex md:flex-row hidden md:justify-center md:ml-6 md:mt-8 md:gap-2 bg-transparent font-medium w-fit p-2 rounded border hover:bg-yellow-300 cursor-pointer">
          <button type='submit'>Explore Now </button>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="md:max-w-98 md:max-h-98 lg:max-w-[29rem] md:pr-6">
        <Lottie animationData={AnimationPhoto} loop={true} className=''/>
      </div>
    </div>
    </div>
  )
}

export default Header
