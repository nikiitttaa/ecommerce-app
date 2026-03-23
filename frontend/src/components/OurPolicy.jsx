import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around items-center gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-black'>
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-black'>We offer hassle free exchange policy</p>
      </div>

      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-black'>We provide 7 days free return policy</p>
      </div>

      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold'>Best customer support</p>
        <p className='text-black'>We provide 24/7 customer support</p>
      </div>

    </div>
  )
}

export default OurPolicy