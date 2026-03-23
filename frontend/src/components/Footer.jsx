import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      
      <div>
        <img src={assets.logo} className='mb-5 w-32'alt=""/>
        <p className='w-full md:w-2/3 text-black'>
            Upgrade Your Wardrobe Now! 🛍️✨
        </p>
      </div>
    </div>
  )
}

export default Footer
