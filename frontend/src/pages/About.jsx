import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='px-4 sm:px-10'>

      {/* Title */}
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Content Section */}
      <div className='my-12 flex flex-col md:flex-row items-center gap-10'>

        {/* Image */}
        <img 
          className='w-full md:max-w-[420px] rounded-lg shadow-md' 
          src={assets.about_img} 
          alt="about"
        />

        {/* Text */}
        <div className='flex flex-col justify-center gap-5 md:w-1/2 text-gray-700 leading-relaxed'>

          <p className='text-lg font-medium text-gray-900'>
            At Riwaayat Couture, we believe that fashion is more than just clothing — 
            it is a reflection of your personality, confidence, and individuality.
          </p>

          <p>
            Our collections are thoughtfully designed to bring together modern trends 
            with timeless elegance. Each piece is crafted with care, keeping in mind 
            comfort, quality, and style that truly stands out.
          </p>

          <p>
            We are passionate about creating outfits that not only look beautiful 
            but also make you feel confident in your everyday life.
          </p>

          {/* Highlight Box */}
          <div className='bg-[#FAF3EE] border border-[#E8B4A0] rounded-md p-4 mt-2'>
            <p className='text-sm text-gray-800'>
              ✨ Our mission is simple — to make you feel beautiful, confident, 
              and comfortable in every outfit you wear.
            </p>
          </div>

        </div>
      </div>

      {/* Extra Section */}
      <div className='text-center mt-10 mb-6'>
        <h3 className='text-xl font-semibold text-gray-800 mb-2'>
          Why Choose Us?
        </h3>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          We focus on quality, comfort, and elegant designs that match your lifestyle. 
          Every product is created with attention to detail to give you a premium experience.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-14 mb-10'>

  {/* Quality */}
  <div className='border rounded-lg p-5 text-center hover:shadow-md transition bg-[#FAF3EE]'>
    <h4 className='text-lg font-semibold text-gray-900 mb-2'>Quality</h4>
    <p className='text-sm text-gray-600'>
      We ensure premium quality fabrics and designs that last long and feel comfortable.
    </p>
  </div>

  {/* Assurance */}
  <div className='border rounded-lg p-5 text-center hover:shadow-md transition bg-[#FAF3EE]'>
    <h4 className='text-lg font-semibold text-gray-900 mb-2'>Assurance</h4>
    <p className='text-sm text-gray-600'>
      Every product goes through strict quality checks to maintain our brand promise.
    </p>
  </div>

  {/* Convenience */}
  <div className='border rounded-lg p-5 text-center hover:shadow-md transition bg-[#FAF3EE]'>
    <h4 className='text-lg font-semibold text-gray-900 mb-2'>Convenience</h4>
    <p className='text-sm text-gray-600'>
      Easy shopping, smooth checkout, and quick delivery for a hassle-free experience.
    </p>
  </div>

  {/* Customer Experience */}
  <div className='border rounded-lg p-5 text-center hover:shadow-md transition bg-[#FAF3EE]'>
    <h4 className='text-lg font-semibold text-gray-900 mb-2'>Customer Care</h4>
    <p className='text-sm text-gray-600'>
      We provide exceptional customer support to make your experience seamless and satisfying.
    </p>
  </div>
</div>
   

  <NewsletterBox />


    </div>
  )
}

export default About