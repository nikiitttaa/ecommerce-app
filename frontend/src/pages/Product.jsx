import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {

  const { productId } = useParams()
  const navigate = useNavigate()

  const { products, currency, addToCart } = useContext(ShopContext)

  const [productData, setProductData] = useState(null)   // ✅ FIX 1
  const [size, setSize] = useState('')
  const [image, setImage] = useState('')
  const [customization, setCustomization] = useState(null)

  // FETCH PRODUCT
  useEffect(() => {

    const foundProduct = products.find(item => item._id === productId)

    if (foundProduct) {
      setProductData(foundProduct)
      setImage(foundProduct.image?.[0] || '')
    }

  }, [productId, products])


  // LOAD CUSTOMIZATION
  useEffect(() => {

    const savedData = JSON.parse(
      localStorage.getItem(`customData_${productId}`)
    )

    if (savedData) {
      setCustomization(savedData)
    } else {
      setCustomization(null)
    }

  }, [productId])   // ✅ FIX 2


  if (!productData) {
    return <div className='text-center py-10'>Loading...</div>
  }

  return (
    <div className='border-t pt-10'>

      <div className='flex flex-col sm:flex-row gap-12 items-center'>

        {/* LEFT IMAGE SECTION */}
        <div className='flex-1 flex gap-6'>
          <div className='flex flex-col gap-4 mt-10'>
            {productData.image?.map((item, index) => (
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

        {/* RIGHT DETAILS */}
        <div className='flex-1 flex flex-col justify-center'>

          <h1 className='text-2xl font-medium mb-2'>
            {productData.name}
          </h1>

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
              {productData.sizes?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-4 py-2 rounded-full border
                  ${item === size
                    ? 'bg-gray-200 border-black'
                    : 'border-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {customization && (
            <p className="text-sm text-green-600 mb-3">
              ✔ Customization Selected
            </p>
          )}

          <button 
            onClick={() => {
              if (!size) {
                alert("Please select size first")
                return
              }
              navigate(`/customize/${productData._id}`)
            }}
            className="px-6 py-3 text-sm rounded-full mb-4 bg-gray-200"
          >
            CUSTOMIZE YOUR OWN
          </button>

          <button 
            onClick={() => {
              if (!size) {
                alert("Please select a size")
                return
              }

              addToCart(productData._id, size, customization)
              localStorage.removeItem(`customData_${productData._id}`)
            }}
            className='px-6 py-3 text-sm rounded-full bg-gradient-to-r from-[#f3e5d8] via-[#ffffff] to-[#f3e5d8] text-black border border-gray-300 shadow-sm hover:scale-105 transition'
          >
            ADD TO CART
          </button>

        </div>
      </div>

      <RelatedProducts 
        category={productData.category} 
        subCatgory={productData.subCatgory}
      />

    </div>
  )
}

export default Product