import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext);

    return (
        <Link className='text-black cursor-pointer' to={`/product/${id}`}>
            
          <div className='border border-black/40 rounded-2xl overflow-hidden shadow-sm'>
            <img
                className='w-full h-full object-cover hover:scale-110 transition ease-in-out duration-300'
                  src={image[0]}
                    alt={name}
            />
          </div>

            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    );
};

export default ProductItem;