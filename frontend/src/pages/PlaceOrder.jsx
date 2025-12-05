import React, { useContext, useState } from 'react'
import Title from './../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

function PlaceOrder() {
 const {navigate} = useContext(ShopContext);
  const [method, setMethod] = useState('cod');

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* --------left side--------- */}
      <div className='flex flex-col gap-10 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />

          {/* FIRST + LAST NAME */}
          <div className='flex gap-4 mt-4'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
          </div>

          {/* EMAIL */}
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-4'
            type="email"
            placeholder='Email address'
          />

          {/* STREET */}
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-4'
            type="text"
            placeholder='Street'
          />

          {/* CITY + STATE */}
          <div className='flex gap-4 mt-4'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
          </div>
          <div className='flex gap-4 mt-4'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zip Code' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
          </div>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-4' type="number" placeholder='Phone' />
        </div>
      </div>
      {/* Right side */}
      <div className='mt-8'>

        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* ----------payment method---------- */}
          <div className="flex flex-col lg:flex-row gap-3">

            {/* STRIPE */}
            <div
              onClick={() => setMethod("strip")}
              className={`
      flex items-center border p-2 px-3 cursor-pointer rounded-lg transition-all duration-200
      hover:shadow-md hover:scale-[1.02]
      ${method === "strip" ? "border-gray-400 shadow-sm scale-[1.02]" : "border-gray-300"}
    `}
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full transition-all duration-200 
      ${method === "strip" ? "bg-gray-300" : ""}`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>

            {/* RAZORPAY */}
            <div
              onClick={() => setMethod("razorpay")}
              className={`
      flex items-center border p-2 px-3 cursor-pointer rounded-lg transition-all duration-200
      hover:shadow-md hover:scale-[1.02]
      ${method === "razorpay" ? "border-gray-400 shadow-sm scale-[1.02]" : "border-gray-300"}
    `}
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full transition-all duration-200
      ${method === "razorpay" ? "bg-gray-300" : ""}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>

            {/* CASH ON DELIVERY */}
            <div
              onClick={() => setMethod("cod")}
              className={`
      flex items-center border p-2 px-3 cursor-pointer rounded-lg transition-all duration-200
      hover:shadow-md hover:scale-[1.02]
      ${method === "cod" ? "border-gray-400 shadow-sm scale-[1.02]" : "border-gray-300"}
    `}
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full transition-all duration-200
      ${method === "cod" ? "bg-gray-300" : ""}`}></p>
              <p className="text-gray-400 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>

          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('./orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
