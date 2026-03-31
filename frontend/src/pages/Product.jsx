import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  
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

  const handleAddToCart = () => {
    const finalSize = customOptions.size || size;
    if (!finalSize) {
      alert('Please select a size');
      return;
    }
    // Here you can also save customOptions.notes/color if you want
    addToCart(productData._id, finalSize);
    setShowCustomization(false);
    setCustomOptions({ color: '', size: '', notes: '' });
  };

  return (
    <div className='border-t pt-10'>

      {/* TOP SECTION */}
      <div className='flex flex-col sm:flex-row gap-12 items-center'>

        {/* LEFT - IMAGE SECTION */}
        <div className='flex-1 flex gap-6'>
          <div className='flex flex-col gap-4 mt-10'>
            {productData?.image?.map((item, index) => (
              <div key={index} className='w-28 h-28 rounded-xl overflow-hidden'>
                <img
                  src={item}
                  onClick={() => setImage(item)}
                  className={`w-full h-full object-cover cursor-pointer transition-all
                  ${image === item 
                    ? 'border-2 border-black scale-105' 
                    : 'border border-gray-300 hover:scale-105'}`}
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className='flex-1 flex justify-center'>
            <div className='w-[480px] h-[600px] rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center'>
              <img 
                src={image} 
                alt="" 
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>

        {/* RIGHT - DETAILS */}
        <div className='flex-1 flex flex-col justify-center'>

          <h1 className='text-2xl font-medium mb-2'>
            {productData.name}
          </h1>

          {/* RATINGS */}
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-4' alt="" />
            <img src={assets.star_icon} className='w-4' alt="" />
            <img src={assets.star_icon} className='w-4' alt="" />
            <img src={assets.star_icon} className='w-4' alt="" />
            <img src={assets.star_dull_icon} className='w-4' alt="" />
            <p className='pl-2 text-sm text-gray-600'>(122)</p>
          </div>

          <p className='text-xl text-gray-900 mt-4 mb-4'>
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

        
            <button 
              onClick={()=>addToCart(productData._id,size)}
              className='px-6 py-3 text-sm rounded-full bg-gradient-to-r from-[#f3e5d8] via-[#ffffff] to-[#f3e5d8] text-black border border-gray-300 shadow-sm hover:scale-105 transition'>
              ADD TO CART
            </button>
          

          <hr className='mt-8 sm:w-4/5'/>

          <div className='text-sm text-gray-900 mt-4 space-y-2'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>

        </div>

      </div>

      {/* -------- Description & Review Section -------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-900'>
          <p> "Not Just a Kurti, It’s Your Riwaayat."
            Mass-market ke bheed mein apni alag pehchan banayein. Design your own ethnic masterpiece with India’s first fully customizable couture platform for the modern woman.
          </p>
          <p>Aapka vision, hamari needle. Hamara interactive design studio aapko allow karta hai.</p>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts category={productData.category} subCatgory={productData.subCatgory}/>       
    </div>
  )
}

export default Product;