import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);

    const [latestCollection, setLatestProducts] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xm sm:text-sm md:text-base text-black'>
                    𝖶𝗁𝖾𝗋𝖾 𝗍𝗋𝖺𝖽𝗂𝗍𝗂𝗈𝗇 𝗆𝖾𝖾𝗍𝗌 𝗒𝗈𝗎𝗋 𝗐𝖺𝗋𝖽𝗋𝗈𝖻𝖾🕊️🌸
                </p>
            </div>

            {/* rendering products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestCollection.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default LatestCollection;