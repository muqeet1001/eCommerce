 import React, { useContext } from 'react'
import Product from './Product';
import { ShopContext } from '../context/ShopContext';
import Title from './../components/Title';
import { Package } from 'lucide-react';

function Orders() {
  const {products, currency} = useContext(ShopContext);
  
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl mb-8'>
        <Title text1={'My'} text2={'ORDERS'}/>
      </div>

      <div className='space-y-4'>
        {products.slice(1,4).map((item, index)=>(
          <div 
            key={index} 
            className='group py-6 px-5 border border-gray-200 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-300 ease-in-out bg-white'
            style={{
              animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            <div className='flex items-start gap-6 text-sm flex-1'>
              <div className='relative overflow-hidden rounded-md'>
                <img 
                  className='w-16 sm:w-20 transform group-hover:scale-110 transition-transform duration-300' 
                  src={item.image[0]} 
                  alt={item.name}
                />
              </div>

              <div className='flex-1'>
                <p className='sm:text-base font-semibold text-gray-800 mb-3'>{item.name}</p>
                <div className='flex flex-wrap items-center gap-3 text-sm text-gray-600'>
                  <p className='text-lg font-bold text-gray-900'>{currency}{item.price}</p>
                  <span className='text-gray-300'>|</span>
                  <p className='flex items-center gap-1'>
                    <span className='font-medium'>Qty:</span> 1
                  </p>
                  <span className='text-gray-300'>|</span>
                  <p className='flex items-center gap-1'>
                    <span className='font-medium'>Size:</span> M
                  </p>
                </div>
                <p className='mt-3 text-sm text-gray-500'>
                  Order Date: <span className='text-gray-700 font-medium'>25 Jul, 2024</span>
                </p>
              </div>
            </div>

            <div className='md:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4'>
              <div className='flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full'>
                <span className='relative flex h-2.5 w-2.5'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500'></span>
                </span>
                <p className='text-sm font-medium text-green-700'>Ready to ship</p>
              </div>
              
              <button className='flex items-center gap-2 border border-gray-300 px-5 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 active:scale-95 transition-all duration-200 text-gray-700 group/btn'>
                <Package className='w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200' />
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Orders