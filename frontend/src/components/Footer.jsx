import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* MAIN FOOTER */}
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        {/* LEFT SECTION */}
        <div>
          {/* TEXT LOGO */}
          <h1 className='text-xl sm:text-2xl tracking-[3px] font-semibold text-[#8B6F47]'>
            RIWAYAT
          </h1>
          <p className='text-[10px] sm:text-xs tracking-[4px] text-[#8B6F47] mb-4'>
            COUTURE
          </p>

          <p className='w-full md:w-2/3 text-dark black text-base sm:text-lg leading-relaxed font-light italic tracking-wide'>
            “From the curve of the neckline to the flow of the sleeves,
            redefine your wardrobe with ethnic wear crafted exclusively by you.” 🛍️✨
          </p>
        </div>

        {/* COMPANY SECTION */}
        <div>
          <p className='text-lg font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-black'>
            <li className='cursor-pointer hover:text-[#8B6F47]'>Home</li>
            <li className='cursor-pointer hover:text-[#8B6F47]'>About Us</li>
            <li className='cursor-pointer hover:text-[#8B6F47]'>Delivery</li>
            <li className='cursor-pointer hover:text-[#8B6F47]'>Privacy Policy</li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <p className='text-lg font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-black'>
            <li>+1-212-456-7890</li>
            <li>contact@riwaayatcouture.com</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div>
        <hr className='border-gray-300'/>
        <p className='py-5 text-sm text-center text-dark black'>
          © 2026 riwaayatcouture.com — All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer