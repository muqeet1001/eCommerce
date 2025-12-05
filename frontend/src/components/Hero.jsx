import { assets } from './../assets/assets';
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className="hero-container flex flex-col sm:flex-row border border-gray-200 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        
        {/* Left Section */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 px-8 sm:px-12'>
            <div className='text-[#414141] space-y-6 max-w-lg'>
                
                 
                
                {/* Main Heading */}
                <h1 className='prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900 font-bold'>
                    Latest <span className='block mt-2'>Arrivals</span>
                </h1>
                
                {/* Subtext */}
                <p className='text-gray-600 text-sm md:text-base leading-relaxed max-w-md'>
                    Discover our curated collection of premium fashion pieces, handpicked just for you.
                </p>
                
                {/* CTA Button */}
                <div className='pt-4'>
                    <button className='group relative inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:scale-105'>
                       <Link to='/collection'>  <span className='relative z-10'>SHOP NOW</span></Link>
                        <div className='relative z-10 w-5 h-5 flex items-center justify-center'>
                            <span className='absolute text-lg group-hover:translate-x-1 transition-transform duration-300'>→</span>
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </button>
                </div>
                
                {/* Stats or Trust Indicators */}
                <div className='flex items-center gap-8 pt-6 border-t border-gray-200'>
                    <div>
                        <p className='text-2xl font-bold text-gray-900'>500+</p>
                        <p className='text-xs text-gray-500 uppercase tracking-wide'>Products</p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-gray-900'>50K+</p>
                        <p className='text-xs text-gray-500 uppercase tracking-wide'>Customers</p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-gray-900'>4.9★</p>
                        <p className='text-xs text-gray-500 uppercase tracking-wide'>Rating</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Hero Right side - Image */}
        <div className='w-full sm:w-1/2 relative group overflow-hidden'>
            <img 
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105' 
                src={assets.hero_img} 
                alt="Latest Fashion Collection" 
            />
            {/* Overlay Gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            
            {/* Floating Badge */}
            <div className='absolute top-8 right-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg'>
                <p className='text-xs font-bold text-gray-900 uppercase tracking-wider'>New Season</p>
            </div>
        </div>
    </div>
  )
}

export default Hero