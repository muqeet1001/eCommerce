import React from 'react'
import { assets } from '../assets/assets'

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around sm:gap-2 text-center py-20 text-xs md:text-base gap-4 text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-700'>We offer hassle free exchange policy</p>
        </div>
         <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7 Days Return Policy </p>
            <p className='text-gray-700'>We offer 7 Days free return policy</p>
        </div>
         <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Best customer support</p>
            <p className='text-gray-700'>we provide 24/7 support</p>
        </div>

    </div>
  )
}

export default OurPolicy