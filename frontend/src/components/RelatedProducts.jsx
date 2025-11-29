import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function RelatedProducts({ category, subCategory }) {
    const { products } = useContext(ShopContext);
    const [related, setrelated] = useState([]);

    useEffect(() => {
        const list = Array.isArray(products) ? products.slice() : [];
        let productscopy = list;

        if (category) {
            productscopy = productscopy.filter((item) => item.category === category);
        }
        if (subCategory) {
            productscopy = productscopy.filter((item) => item.subCategory === subCategory);
        }

        setrelated(productscopy.slice(0, 5));
    }, [products, category, subCategory]);
    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
                {related.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts