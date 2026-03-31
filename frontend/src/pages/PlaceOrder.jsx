import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod] =useState('cod');

  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-10 pt-5 sm:pt-14 min-h-[80vh] border-t px-4 sm:px-10'>
      
      {/* LEFT SIDE - DELIVERY FORM */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'> 
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        {/* Name */}
        <div className='flex gap-3'>
          <input className='border border-gray-300 bg-[#F5F7F6] rounded-md px-3 py-2 w-full text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#cde8d5] outline-none shadow-sm' type="text" placeholder='First Name' />
          <input className='border border-gray-300 bg-[#F5F7F6] rounded-md px-3 py-2 w-full text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#cde8d5] outline-none shadow-sm' type="text" placeholder='Last Name' />
        </div>

        {/* Email */}
        <input className='border border-gray-300 bg-[#F5F7F6] rounded-md px-3 py-2 w-full text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#cde8d5] outline-none shadow-sm' type="email" placeholder='Email Address' />

        {/* Street */}
        <input className='border border-gray-300 bg-[#F5F7F6] rounded-md px-3 py-2 w-full text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#cde8d5] outline-none shadow-sm' type="text" placeholder='Street Address' />

        {/* City + State */}
        <div className='flex gap-3'>
          <input className='border border-gray-300 bg-[#F5F7F6] rounded-md px-3 py-2 w-full text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#cde8d5] outline-none shadow-sm' type="text" placeholder='City' />
          <input className='border border-gray-300 bg-[#F5F7F6] rounded-md px-3 py-2 w-full text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#cde8d5] outline-none shadow-sm' type="text" placeholder='State' />
        </div>

        {/* Zip + Country */}
        <div className='flex gap-3'>
          <input className='border border-gray-300 bg-[#F5F7F6] rounded-md px-3 py-2 w-full text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#cde8d5] outline-none shadow-sm' type="number" placeholder='Zip Code' />
          <input className='border border-gray-300 bg-[#F5F7F6] rounded-md px-3 py-2 w-full text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#cde8d5] outline-none shadow-sm' type="text" placeholder='Country' />
        </div>

        {/* Phone */}
        <input className='border border-gray-300 bg-[#F5F7F6] rounded-md px-3 py-2 w-full text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#cde8d5] outline-none shadow-sm' type="number" placeholder='Phone Number' />

      </div>

      {/* RIGHT SIDE */}
<div className='mt-8'>
  
  <div className='mt-8 min-w-80'>
    <CartTotal/>
  </div>

  <div className='mt-12'>
    <Title text1={'PAYMENT'} text2={' METHOD'}/>

    <div className='flex gap-4 flex-col lg:flex-row mt-4'>

      {/* Stripe */}
      <div 
        onClick={() => setMethod('stripe')} 
        className={`flex items-center gap-3 border rounded-md p-3 px-4 cursor-pointer transition shadow-sm 
        ${method === 'stripe' ? 'border-[#E8B4A0] bg-[#F6E4DA]' : 'border-gray-300 bg-[#FAF3EE]'}`}
      >
        <p className={`min-w-4 h-4 border-2 rounded-full 
        ${method === 'stripe' ? 'bg-[#E8B4A0] border-[#E8B4A0]' : 'border-gray-400'}`}></p>
        
        <img className='h-5 mx-4' src={assets.stripe_logo}/>
      </div>

      {/* Razorpay */}
      <div 
        onClick={() => setMethod('razorpay')} 
        className={`flex items-center gap-3 border rounded-md p-3 px-4 cursor-pointer transition shadow-sm 
        ${method === 'razorpay' ? 'border-[#E8B4A0] bg-[#F6E4DA]' : 'border-gray-300 bg-[#FAF3EE]'}`}
      >
        <p className={`min-w-4 h-4 border-2 rounded-full 
        ${method === 'razorpay' ? 'bg-[#E8B4A0] border-[#E8B4A0]' : 'border-gray-400'}`}></p>

        <img className='h-5 mx-4' src={assets.razorpay_logo}/>
      </div>

      {/* COD */}
      <div 
        onClick={() => setMethod('cod')} 
        className={`flex items-center gap-3 border rounded-md p-3 px-4 cursor-pointer transition shadow-sm 
        ${method === 'cod' ? 'border-[#E8B4A0] bg-[#F6E4DA]' : 'border-gray-300 bg-[#FAF3EE]'}`}
      >
        <p className={`min-w-4 h-4 border-2 rounded-full 
        ${method === 'cod' ? 'bg-[#E8B4A0] border-[#E8B4A0]' : 'border-gray-400'}`}></p>

        <p className='text-gray-800 text-sm font-medium mx-4'>
          CASH ON DELIVERY
        </p>
      </div>
    </div>
    <div className='w-full text-end mt-8'> 
           <button onClick={()=>navigate('/orders')} className='bg-[#DDEEE3] text-gray-800 w-full mt-4 py-2 rounded-md hover:bg-[#cde8d5] transition'>
            PLACE ORDER
          </button>
    </div>
  </div>


</div>

    </div>
  )
}

export default PlaceOrder