import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>

            <NavLink to='/'>
              <p>HOME</p>
            </NavLink>
            <NavLink to='/collection'>
              <p>COLLECTION</p>
            </NavLink>
            <NavLink to='/about'>
              <p>ABOUT</p>
            </NavLink>
            <NavLink to='/contact'>
              <p>CONTACT</p>
            </NavLink>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-9945037962</li>
            <li>abdul00muqeet@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className='border-gray-300' />
        <p className='text-center text-gray-600 text-m py-5'>&copy; 2025 Muqeet. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer