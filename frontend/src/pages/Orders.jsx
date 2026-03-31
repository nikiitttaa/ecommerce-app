import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const { products = [], currency } = useContext(ShopContext); // ✅ safe fallback

  return (
    <div className='border-t pt-16 px-4 sm:px-10 min-h-[80vh]'>

      <div className='text-2xl mb-6'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {/* अगर products empty है */}
      {
        products.length === 0 ? (
          <div className='text-center text-gray-500 mt-10'>
            No Orders Found 🛍️
          </div>
        ) : (
          <div>
            {
              products.slice(1,4).map((item,index) => (
                <div 
                  key={index} 
                  className='py-4 border-b text-gray-900 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
                >

                  {/* LEFT SIDE */}
                  <div className='flex items-start gap-6 text-sm'>
                    
                    {/* IMAGE */}
                    <img 
                      className='w-16 sm:w-20 rounded object-cover' 
                      src={item?.image?.[0]} 
                      alt={item?.name}
                    />

                    {/* DETAILS */}
                    <div>
                      <p className='font-medium text-base'>{item?.name}</p>
                      <p className='text-gray-900 mt-1'>
                        {currency}{item?.price}
                      </p>
                      <p className='text-gray-900 text-xs mt-1'>
                        Order Date: 25 March 2026
                      </p>
                    </div>

                  </div>

                  {/* RIGHT SIDE */}
                  <div className='flex items-center gap-4'>
                    <p className='text-sm text-green-900'>● Ready to ship</p>
                    <button className='border px-4 py-1 text-sm rounded hover:bg-gray-100'>
                      Track Order
                    </button>
                  </div>

                </div>
              ))
            }
          </div>
        )
      }

    </div>
  )
}

export default Orders;