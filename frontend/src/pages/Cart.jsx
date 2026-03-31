import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }

    setCartData(tempData);

  }, [cartItems]);

  return (
    <div className='border-t pt-10 px-4 sm:px-10'>

      {/* Title */}
      <div className='text-2xl mb-6'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {/* Cart Items */}
      <div>
        {
          cartData.map((item, index) => {

            const productData = products.find((product) => product._id === item._id);
            if (!productData) return null;

            return (
             <div key={index} className='grid grid-cols-[4fr_1fr_1fr] items-center py-5 border-b'>
                
                {/* LEFT */}
                <div className='flex items-center gap-4'>
                  <img
                    src={productData.image[0]}
                    alt=""
                    className='w-16 sm:w-20 rounded'
                  />

                  <div>
                    <p className='text-sm sm:text-base font-medium text-gray-900'>
                      {productData.name}
                    </p>

                    <div className='flex items-center gap-3 mt-1'>
                      <p className='text-gray-900 text-sm'>
                        {currency}{productData.price}
                      </p>

                      <p className='px-2 py-0.5 border text-xs text-gray-900'>
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                {/* QUANTITY */}
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                  className='w-16 px-2 py-1 text-center rounded-md border border-gray-300 bg-[#E6F4EA] text-gray-700 outline-none'
                />

                {/* DELETE */}
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className='w-4 mr-4 sm:w-5 cursor-pointer'
                  src={assets.bin_icon}
                  alt=""
                />

              </div>
            );
          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button 
              onClick={()=>navigate('/place-order')} 
              className='bg-[#DDEEE3] text-gray-900 text-sm my-8 px-8 py-3 rounded-md hover:bg-[#cde8d5] transition duration-300'>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart;