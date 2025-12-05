 import React, { useState, useEffect } from 'react'
import { MapPin, Mail, Phone, Send, Clock } from 'lucide-react';
import { assets } from '../assets/assets';
import Title from '../components/Title';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className='w-6 h-6' />,
      title: 'Visit Us',
      details: ['Bangalore', 'Karnataka 560084', 'India']
    },
    {
      icon: <Phone className='w-6 h-6' />,
      title: 'Call Us',
      details: ['+91 9945037692', 'Mon-Sat: 9AM - 6PM']
    },
    {
      icon: <Mail className='w-6 h-6' />,
      title: 'Email Us',
      details: ['abodul00muqeet@gmail.com', 'We reply within 24 hours']
    }
  ];

  return (
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
        <div className='flex items-center justify-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 prata-regular'>
            <Title text1={'Get In'} text2={'touch'}/>
          </h1>

        </div>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className='grid md:grid-cols-2 gap-12 mb-20'>
          {/* Contact Information */}
          <div 
            className='space-y-8'
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            {/* Image */}
            <div className='relative group overflow-hidden rounded-2xl shadow-2xl mb-8'>
              <img 
                src={assets.contact_img} 
                alt="Contact Us" 
                className='w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>

            {/* Contact Cards */}
            <div className='space-y-4'>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className='group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300 cursor-pointer'
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease-out ${0.4 + index * 0.1}s`
                  }}
                >
                  <div className='flex items-start gap-4'>
                    <div className='text-gray-800 mt-1 group-hover:scale-110 group-hover:text-gray-600 transition-all duration-300'>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className='text-gray-600 text-sm'>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div 
              className='bg-gray-50 border border-gray-200 rounded-xl p-6'
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 0.8s'
              }}
            >
              <div className='flex items-start gap-4'>
                <Clock className='w-6 h-6 text-gray-800' />
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                    Business Hours
                  </h3>
                  <div className='space-y-2 text-sm text-gray-600'>
                    <div className='flex justify-between'>
                      <span>Monday - Friday:</span>
                      <span className='font-medium'>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Saturday:</span>
                      <span className='font-medium'>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Sunday:</span>
                      <span className='font-medium text-red-600'>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className='bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            <h2 className='text-2xl font-bold text-gray-900 mb-6 prata-regular'>
              Send Us a Message
            </h2>
            
            <div className='space-y-5'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Your Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800 transition-all duration-300'
                  placeholder='John Doe'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800 transition-all duration-300'
                  placeholder='john@example.com'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Your Message
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='6'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800 transition-all duration-300 resize-none'
                  placeholder='Tell us how we can help you...'
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                className='w-full bg-gray-900 text-white font-medium px-8 py-4 rounded-lg hover:bg-gray-800 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group'
              >
                <span>Send Message</span>
                <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
              </button>
            </div>

            <p className='text-xs text-gray-500 text-center mt-6'>
              We typically respond within 24 hours
            </p>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div 
          className='bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center'
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 1s'
          }}
        >
          <h2 className='text-2xl font-bold text-gray-900 mb-4 prata-regular'>
            Visit Our Store
          </h2>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            Come see our collection in person at our Bangalore location. Our friendly team is ready to assist you with any questions.
          </p>
          <div className='inline-flex items-center gap-2 text-gray-800 font-semibold hover:gap-3 transition-all duration-300 cursor-pointer group'>
            <span>Get Directions</span>
            <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact