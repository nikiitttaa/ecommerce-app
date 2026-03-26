import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'   

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);

  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);  
  const [category,setCategory] = useState([]);

  // ✅ UPDATED FUNCTION (single select)
  const toggleCategory =(e) =>{
    const value = e.target.value;

    if(category.includes(value)){
      setCategory([]); // unselect if clicked again
    }
    else{
      setCategory([value]); // only one at a time
    }
  }

  useEffect(() => {
    setFilterProducts(products)
  }, [products])  

  useEffect(()=>{
    let filtered = products;

    if(category.length > 0){
      filtered = filtered.filter(item => category.includes(item.category))
    }

    setFilterProducts(filtered)

  },[category, products])
  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
    
      {/* FILTER OPTIONS */}
      <div className='min-w-60'>
        
        <p onClick={() => setShowFilter(!showFilter)} 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden invert transition-transform ${showFilter ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt=""/>
        </p>

        {/* CATEGORY FILTER */}
       
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-black'>
            
            <p className='flex gap-2'>
              <input 
                className='w-3' 
                type="checkbox" 
                value={'Girls'} 
                checked={category.includes('Girls')}
                onChange={toggleCategory}
              /> Girls
            </p>

            <p className='flex gap-2'>
              <input 
                className='w-3' 
                type="checkbox" 
                value={'Women'} 
                checked={category.includes('Women')}
                onChange={toggleCategory}
              /> Women
            </p>

            <p className='flex gap-2'>
              <input 
                className='w-3' 
                type="checkbox" 
                value={'College Girls'} 
                checked={category.includes('College Girls')}
                onChange={toggleCategory}
              /> College Girls
            </p>

          </div>
        </div>

        {/* TYPES */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-black'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Short Kurti'}/> Short Kurti
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Long Kurti'}/> Long Kurti
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Traditional Set'}/> Traditional Set
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Office Wear'}/> Office Wear 
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex-1'> 
        <div className='flex justify-between items-center text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          <select className='border border-gray-300 text-sm px-3 py-1 rounded bg-gradient-to-r from-[#f3e5d8] via-[#e8d8c8] to-[#d9c7b8] backdrop-blur-sm'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option> 
          </select>
        </div>

        {/* map products */}
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

export default Collection