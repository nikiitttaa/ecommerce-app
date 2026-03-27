import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext);

    return (
        <Link className='text-black cursor-pointer' to={`/product/${id}`}>
            
          <div className='rounded-2xl overflow-hidden border border-black/20 shadow-md hover:shadow-lg transition duration-300 aspect-[3/4]'>
            <img
                className='w-full h-full object-cover rounded-2xl hover:scale-105 transition ease-in-out duration-300'
                src={image[0]}
                alt={name}
            />
          </div>

            <p className='pt-3 pb-1 text-sm min-h-[40px]'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    );
};

export default ProductItem;