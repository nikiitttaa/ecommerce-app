import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'   

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);

  const { products, search, showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);  
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [sortType, setSortType] = useState('');

  // CATEGORY (single + reset type)
  const toggleCategory = (e) => {
    const value = e.target.value;

    if (category === value) {
      setCategory('');
    } else {
      setCategory(value);
      setSubCategory('');
    }
  }

  // TYPE (single + reset category)
  const toggleSubCategory = (e) => {
    const value = e.target.value;

    if (subCategory === value) {
      setSubCategory('');
    } else {
      setSubCategory(value);
      setCategory('');
    }
  }

  // INITIAL LOAD
  useEffect(() => {
    setFilterProducts(products)
  }, [products])

  // FILTER + SORT + SEARCH LOGIC
  useEffect(() => {
    let filtered = [...products];

    // 🔍 SEARCH FILTER (MAIN ADD)
    if (search && search.trim() !== '') {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // category filter
    if (category) {
      filtered = filtered.filter(item => item.category === category);
    }

    // subcategory filter
    if (subCategory) {
      filtered = filtered.filter(item => 
        item.subCategory.includes(subCategory)
      );
    }

    // sorting
    if (sortType === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    }
    else if (sortType === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }
    else if (sortType === "latest") {
      filtered.sort((a, b) => b.date - a.date);
    }

    setFilterProducts(filtered);

  }, [category, subCategory, sortType, products, search])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10'>
    
      {/* FILTER OPTIONS */}
      <div className='min-w-60'>
        
        <p onClick={() => setShowFilter(!showFilter)} 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img 
            className={`h-3 sm:hidden invert transition-transform ${showFilter ? 'rotate-90': ''}`} 
            src={assets.dropdown_icon} 
            alt=""
          />
        </p>

        {/* CATEGORY */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm'>
            {['Girls', 'Women', 'College Girls'].map((cat) => (
              <label key={cat} className='flex gap-2'>
                <input 
                  type="checkbox"
                  value={cat}
                  checked={category === cat}
                  onChange={toggleCategory}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* TYPES */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPES</p>

          <div className='flex flex-col gap-2 text-sm'>
            {['Short Kurti', 'Long Kurti', 'Traditional Set', 'Office Wear'].map((type) => (
              <label key={type} className='flex gap-2'>
                <input 
                  type="checkbox"
                  value={type}
                  checked={subCategory === type}
                  onChange={toggleSubCategory}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex-1'> 
        <div className='flex justify-between items-center text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          <select 
            onChange={(e)=>setSortType(e.target.value)} 
            className='border border-gray-300 text-sm px-3 py-1 rounded 
            bg-gradient-to-r from-[#f3e5d8] via-[#e8d8c8] to-[#d9c7b8] 
            backdrop-blur-sm'
          >
            <option value="">Sort by: Relevant</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option> 
            <option value="latest">Latest</option>
          </select>
        </div>

        {/* PRODUCTS */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem 
                key={index} 
                name={item.name} 
                id={item._id}   
                price={item.price} 
                image={item.image}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection;