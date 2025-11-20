import React, {useContext, useEffect } from 'react'
import { ShopContext } from './../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';


function BestSeller() {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = React.useState([]);
      

    useEffect(()=>{
       const bestProducts = products.filter((item)=>(item.bestseller===true));
       setBestSeller(bestProducts.slice(0,5));
    },[]);
    
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'} />
             <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover our top-rated products that customers love the most. These best sellers have been carefully selected based on popularity and customer reviews, ensuring you get the best quality and value.
             </p>
        </div>
        
        <div
        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-4 gap-y-4 '>
             {bestSeller.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}  />
           ))}
        </div>
           
    </div>
  )
}

export default BestSeller