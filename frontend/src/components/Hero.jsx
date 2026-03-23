import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex justify-center mt-6 bg-transparent'>
      
      {/* Center container with small side gap */}
      <div className='w-full max-w-[1700px] px-1'>
        
        <div className='flex flex-col sm:flex-row border border-black rounded-2xl overflow-hidden bg-transparent min-h-[500px] sm:min-h-[550px] md:min-h-[600px]'>

          {/* Hero Left Side */}
          <div className='w-full sm:w-1/2 flex items-center justify-center px-4 sm:px-8 bg-transparent'>
            <div className='text-black'>
              
              <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-black'></p>
                <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
              </div>

              <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed font-semibold'>
                Latest Arrivals
              </h1>

              <div className='flex items-center gap-2 cursor-pointer'>
                <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[1px] bg-black'></p>
              </div>

            </div>
          </div>

          {/* Hero Right Side */}
          <div className='w-full sm:w-1/2 bg-transparent'>
            <img
              className='w-full h-full object-cover object-center rounded-r-2xl opacity-95'
              src={assets.hero_img}
              alt="Hero"
            />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Hero