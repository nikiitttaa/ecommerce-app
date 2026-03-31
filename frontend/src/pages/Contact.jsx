import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox' // ✅ ADD THIS

const Contact = () => {
  return (
    <div>

      {/* Title */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Content */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>

        {/* Image (safe rendering) */}
        {assets?.contact_img && (
          <img
            className='w-full md:max-w-[480px]'
            src={assets.contact_img}
            alt="contact"
          />
        )}

        {/* Info */}
        <div className='flex flex-col justify-center items-start gap-6'>

          <p className='font-semibold text-xl text-gray-800'>Our Store</p>

          <p className='text-gray-900'>
            Riwaayat Couture <br />
            Jaipur, Rajasthan, India
          </p>

          <p className='text-gray-900'>
            Tel: +91 98765 43210 <br />
            Email: support@riwaayatcouture.com
          </p>

          <p className='font-semibold text-xl text-gray-800'>
            Work With Us
          </p>

          <p className='text-gray-900'>
            Collaborate with local designers and artisans.
          </p>

          <button className='px-8 py-4 text-sm rounded-full bg-gradient-to-r from-[#d9d2b0] to-[#e6dcc0] text-gray-700 shadow-sm hover:shadow-md transition-all duration-300'>
  Explore Opportunities
</button>

        </div>
      </div>

      {/* Newsletter */}
      <NewsletterBox />

    </div>
  )
}

export default Contact