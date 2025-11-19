import React from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title.jsx'
function LatestCollection() {
    const {products} = React.useContext(ShopContext);
    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>
                Discover our latest collection of trendy and stylish products, carefully curated to keep you ahead in fashion. From chic apparel to must-have accessories, explore the newest arrivals that blend contemporary designs with exceptional quality. 
            </p>
        </div>
      
    </div>
  )
}

export default LatestCollection