 import React, { useState } from 'react'
import { ShoppingBag } from 'lucide-react';

function Login() {
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-white py-12 px-4'>
      <div 
        className='w-full sm:max-w-md'
        style={{
          animation: 'fadeIn 0.6s ease-out'
        }}
      >
        {/* Logo */}
        <div className='flex justify-center mb-8'>
          <div className='flex items-center gap-2 group cursor-pointer'>
            <ShoppingBag className='w-8 h-8 text-gray-800 group-hover:scale-110 transition-transform duration-300' />
            <span className='text-2xl font-bold text-gray-800 prata-regular'>FOREVER</span>
          </div>
        </div>

        {/* Form Container */}
        <div className='bg-white border border-gray-200 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
          {/* Header */}
          <div className='flex items-center justify-center gap-3 mb-8'>
            <h2 className='prata-regular text-3xl text-gray-800'>{currentState}</h2>
            <div 
              className='h-[2px] bg-gray-800 transition-all duration-500'
              style={{
                width: currentState === 'Login' ? '32px' : '40px'
              }}
            />
          </div>

          {/* Form Fields */}
          <div className='flex flex-col gap-4'>
            {currentState === 'Sign Up' && (
              <input 
                type="text" 
                className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800 transition-all duration-300' 
                placeholder='Name' 
                required 
                style={{
                  animation: 'slideDown 0.3s ease-out'
                }}
              />
            )}

            <input 
              type="email" 
              className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800 transition-all duration-300' 
              placeholder='Email' 
              required 
            />

            <input 
              type="password" 
              className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800 transition-all duration-300' 
              placeholder='Password' 
              required 
            />

            {/* Links */}
            <div className='flex justify-between items-center text-sm mt-1'>
              <button 
                type='button'
                className='text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200'
              >
                Forgot your password?
              </button>
              
              {currentState === 'Login' ? (
                <button 
                  type='button'
                  onClick={() => setCurrentState('Sign Up')} 
                  className='text-gray-800 font-medium hover:underline transition-colors duration-200 cursor-pointer'
                >
                  Create account
                </button>
              ) : (
                <button 
                  type='button'
                  onClick={() => setCurrentState('Login')} 
                  className='text-gray-800 font-medium hover:underline transition-colors duration-200 cursor-pointer'
                >
                  Login Here
                </button>
              )}
            </div>

            {/* Submit Button */}
            <button 
              onClick={onSubmitHandler}
              className='w-full bg-gray-900 text-white font-light px-8 py-3 mt-4 rounded hover:bg-gray-800 active:scale-[0.98] transition-all duration-200'
            >
              {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <p className='text-center text-xs text-gray-500 mt-6'>
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 100px;
          }
        }
      `}</style>
    </div>
  )
}

export default Login