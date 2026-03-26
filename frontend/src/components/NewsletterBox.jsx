import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-black'> Subscribe now & get 20% off</p>
      <p className='text-black mt-3'>Effortless Style for Your 9 to 5. 💻👗 </p>
      <form onSubmit={onSubmitHandler} className='flex items-center justify-center gap-3 mt-6 flex-col sm:flex-row'>
        <input className='w-64 sm:w-80 outline-none px-4 py-3 rounded-full bg-gradient-to-r from-[#e6f0dc] to-[#f5e6c4] placeholder-gray-600'type="email" placeholder='Enter your Email' required />
        <button type="submit" className='bg-black text-black text-xs px-8 py-3 rounded-full bg-gradient-to-r from-[#e6f0dc] to-[#f5e6c4] transition'> SUBSCRIBE</button>
      </form>

    </div>
  )
}

export default NewsletterBox