import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {


  const [visible, setVisible] = useState(false)

  return (
    <div className='w-full flex items-center justify-between py-3 px-6 font-medium bg-[#F5F5F0] rounded-b-2xl shadow-sm'>

      {/* ✅ TEXT LOGO */}
      <Link to='/' className='flex flex-col leading-tight cursor-pointer'>
        <h1 className='text-xl sm:text-2xl tracking-[3px] font-semibold text-[#8B6F47]'>
          RIWAYYAT
        </h1>
        <p className='text-[10px] sm:text-xs tracking-[4px] text-[#8B6F47]'>
          COUTURE
        </p>
      </Link>

      {/* Menu  */}
      <ul className='hidden sm:flex gap-8 text-base text-[#C2B280]'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[2px] bg-[#C2B280] hidden' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[2px] bg-[#C2B280] hidden' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[2px] bg-[#C2B280] hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[2px] bg-[#C2B280] hidden' />
        </NavLink>

      </ul>

      {/* Icons */}
      <div className='flex items-center gap-6 text-[#C2B280]'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

        <div className='group relative'>
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />

          <div className='group-hover:block hidden absolute right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white text-[#C2B280] rounded shadow'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Log Out</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            10
          </p>
        </Link>

        <img 
          onClick={() => setVisible(true)} 
          src={assets.menu_icon} 
          className='w-5 cursor-pointer sm:hidden' 
          alt=""
        />
      </div>
{/* Mobile Menu */}
<div className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${visible ? 'translate-x-0' : 'translate-x-full'}`}>

  <div className='flex flex-col text-[#C2B280] text-lg'>

    {/* Back Button */}
    <div 
      onClick={() => setVisible(false)} 
      className='flex items-center gap-4 p-4 cursor-pointer border-b'
    >
      <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
      <p>Back</p>
    </div>

    {/* Menu Links */}
    <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b' to='/'>HOME</NavLink>
    <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b' to='/collection'>COLLECTION</NavLink>
    <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b' to='/about'>ABOUT</NavLink>
    <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b' to='/contact'>CONTACT</NavLink>

  </div>
</div>

    </div>
  )
}

export default Navbar