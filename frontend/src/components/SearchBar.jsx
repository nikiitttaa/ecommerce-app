import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  const [visible, setVisible] = useState(false);

  const location = useLocation(); // ✅ correct

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]); // ✅ correct dependency

  return showSearch && visible ? (
  <div className='text-center py-3'>  {/* ✅ background removed */}

    <div className='inline-flex items-center justify-center px-5 py-2 my-5 mx-3 
    rounded-full w-3/4 sm:w-1/2 
    bg-gradient-to-r from-[#f3e5d8] via-[#ffffff] to-[#f3e5d8] 
    border border-gray-300 shadow-sm'>

      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='flex-1 outline-none bg-transparent text-sm text-gray-800 placeholder-gray-500'
        type="text" 
        placeholder='Search' 
      />

      <img className='w-5 cursor-pointer' src={assets.search_icon} alt="" />

    </div>

    <img 
      onClick={() => setShowSearch(false)} 
      className='inline w-4 cursor-pointer' 
      src={assets.cross_icon} 
      alt="" 
    />

  </div>
) : null
}

export default SearchBar;