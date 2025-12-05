 import React, { useState, useEffect } from 'react'
import { Award, Users, Package, TrendingUp } from 'lucide-react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import NewsLetterBox from './../components/NewsLetterBox';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <Package className='w-8 h-8' />, number: '10K+', label: 'Products' },
    { icon: <Users className='w-8 h-8' />, number: '50K+', label: 'Happy Customers' },
    { icon: <Award className='w-8 h-8' />, number: '15+', label: 'Years Experience' },
    { icon: <TrendingUp className='w-8 h-8' />, number: '99%', label: 'Satisfaction Rate' }
  ];

  return (
    <>
    <div className='min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div 
          className='text-center mb-16'
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 prata-regular'>
             <Title text1={'About'} text2 = {'Us'}/>
          </h1>
          
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Crafting exceptional experiences through quality and innovation
          </p>
        </div>

        {/* Main Content */}
        <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
          {/* Image Section */}
          <div 
            className='relative group'
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
              <img 
                src={assets.about_img} 
                alt="About Us" 
                className='w-full h-auto transform group-hover:scale-105 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
            {/* Decorative element */}
            <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-gray-200 rounded-2xl -z-10 group-hover:scale-110 transition-transform duration-500'></div>
          </div>

          {/* Text Section */}
          <div 
            className='space-y-6'
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 prata-regular'>
              Our Story
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              Founded with a passion for excellence, we've been at the forefront of delivering premium quality products that enhance everyday life. Our journey began with a simple belief: everyone deserves access to exceptional craftsmanship and timeless design.
            </p>
            <p className='text-gray-600 leading-relaxed'>
              Over the years, we've grown from a small startup to a trusted name, serving thousands of satisfied customers worldwide. Our commitment to quality, sustainability, and customer satisfaction remains unwavering.
            </p>
            <div className='flex flex-wrap gap-4 pt-4'>
              <div className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300'>
                <span className='w-2 h-2 bg-gray-800 rounded-full'></span>
                <span className='text-gray-700 font-medium'>Quality First</span>
              </div>
              <div className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300'>
                <span className='w-2 h-2 bg-gray-800 rounded-full'></span>
                <span className='text-gray-700 font-medium'>Customer Focused</span>
              </div>
              <div className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300'>
                <span className='w-2 h-2 bg-gray-800 rounded-full'></span>
                <span className='text-gray-700 font-medium'>Sustainable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-20'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='group bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-gray-300 transition-all duration-300 cursor-pointer'
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${0.6 + index * 0.1}s`
              }}
            >
              <div className='text-gray-800 mb-3 flex justify-center group-hover:scale-110 group-hover:text-gray-600 transition-all duration-300'>
                {stat.icon}
              </div>
              <div className='text-3xl font-bold text-gray-900 mb-1 prata-regular'>
                {stat.number}
              </div>
              <div className='text-gray-600 text-sm font-medium'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div 
          className='bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200'
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 1s'
          }}
        >
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 prata-regular'>
              Our Mission
            </h2>
            <p className='text-gray-600 text-lg leading-relaxed mb-6'>
              To inspire and empower individuals through thoughtfully designed products that blend functionality with aesthetics. We strive to create meaningful connections between people and the things they use every day.
            </p>
            <div className='inline-flex items-center gap-2 text-gray-800 font-semibold hover:gap-3 transition-all duration-300 cursor-pointer group'>
              <span>Learn More About Our Values</span>
              <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
     <NewsLetterBox/>
      </>
  )
}

export default About