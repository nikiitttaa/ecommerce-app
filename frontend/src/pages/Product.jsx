import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {

  const { productId } = useParams();
  const { products } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [size, setSize] = useState('');
  const [image, setImage] = useState('');

  // FETCH PRODUCT
  useEffect(() => {
    const foundProduct = products.find(item => item._id === productId);
    setProductData(foundProduct);

    if (foundProduct?.image?.length > 0) {
      setImage(foundProduct.image[0]);
    }

  }, [productId, products])

  if (!productData) {
    return <div className='text-center py-10'>Loading...</div>
  }

  return (
    <div className='border-t pt-10'>

      <div className='flex flex-col sm:flex-row gap-12 items-center'>

        {/* LEFT - IMAGE SECTION */}
        <div className='flex-1 flex gap-4'>

          {/* SMALL IMAGES */}
          <div className='flex flex-col gap-3'>
            {productData?.image?.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className={`w-24 h-24 object-cover rounded cursor-pointer border overflow-hidden transition
                ${image === item 
                  ? 'border-black scale-105' 
                  : 'border-gray-300 hover:scale-105'}`}
                alt=""
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className='flex-1 flex justify-center'>
            <img 
              src={image} 
              alt="" 
              className='w-full max-w-[420px] h-[500px] object-contain rounded shadow-md'
            />
          </div>

        </div>

        {/* RIGHT - DETAILS */}
        <div className='flex-1'>

          <h1 className='text-2xl font-medium mb-2'>
            {productData.name}
          </h1>

          <p className='text-xl text-gray-900 mb-4'>
            ₹{productData.price}
          </p>

          <p className='text-gray-900 mb-6'>
            {productData.description}
          </p>

          {/* SIZE SELECT */}
          <div className='mb-6'>
            <p className='mb-2 font-medium'>Select Size</p>

            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-4 py-2 rounded-full border transition-all
                  ${
                    item === size
                      ? 'bg-gradient-to-r from-[#f3e5d8] via-[#ffffff] to-[#f3e5d8] text-black border-gray-300 shadow-sm'
                      : 'border-gray-300 text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ADD TO CART */}
          <button className='px-6 py-3 text-sm rounded-full 
            bg-gradient-to-r from-[#f3e5d8] via-[#ffffff] to-[#f3e5d8] 
            text-black border border-gray-300 shadow-sm hover:scale-105 transition'>
            ADD TO CART
          </button>

        </div>

      </div>

    </div>
  )
}

export default Product;