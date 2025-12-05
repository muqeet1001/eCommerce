 import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './../context/ShopContext';
import { assets } from '../assets/assets';
import Title from './../components/Title';
import ProductItem from './../components/ProductItem';

function Collection() {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = React.useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');
  const [showSortMobile, setShowSortMobile] = useState(false);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setcategory(prev => [...prev, e.target.value]);
    }
  }

  const toggleCategorySub = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setsubCategory(prev => [...prev, e.target.value]);
    }
  }

  useEffect(() => {
    let productsCopy = products ? products.slice() : [];
    let result = productsCopy;

    if (showSearch && search) {
      result = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      result = result.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      result = result.filter(item => subCategory.includes(item.subCategory));
    }

    setFilteredProducts(result);
  }, [category, subCategory, products, search]);

  const sortProducts = () => {
    let fpCopy = filteredProducts.slice();
    switch (sortType) {
      case 'lowtohigh':
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'hightolow':
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    sortProducts()
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-6 sm:gap-12 pt-12 border-t border-gray-200'>
      
      {/* LEFT SIDEBAR - FILTERS */}
      <div className='min-w-64'>
        
        {/* Filter Header */}
        <div 
          onClick={() => setShowFilter(!showFilter)} 
          className='my-2 text-xl flex items-center cursor-pointer gap-3 font-semibold text-gray-800 hover:text-black transition-colors duration-200'
        >
          FILTERS
          <img 
            className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`} 
            src={assets.dropdown_icon} 
            alt="" 
          />
        </div>

        {/* Category Filter */}
        <div className={`border border-gray-200 rounded-lg pl-6 py-5 mt-6 bg-white shadow-sm ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-4 text-sm font-bold text-gray-800 tracking-wide uppercase'>Categories</p>
          <div className='flex flex-col gap-3 text-sm text-gray-700'>
            <label className='flex items-center gap-3 cursor-pointer group'>
              <input 
                className='w-4 h-4 cursor-pointer accent-black' 
                type="checkbox" 
                value={'Men'} 
                onChange={toggleCategory} 
              />
              <span className='group-hover:text-black transition-colors duration-200'>Men</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer group'>
              <input 
                className='w-4 h-4 cursor-pointer accent-black' 
                type="checkbox" 
                value={'Women'} 
                onChange={toggleCategory} 
              />
              <span className='group-hover:text-black transition-colors duration-200'>Women</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer group'>
              <input 
                className='w-4 h-4 cursor-pointer accent-black' 
                type="checkbox" 
                value={'Kids'} 
                onChange={toggleCategory} 
              />
              <span className='group-hover:text-black transition-colors duration-200'>Kids</span>
            </label>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div className={`border border-gray-200 rounded-lg pl-6 py-5 my-5 bg-white shadow-sm ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-4 text-sm font-bold text-gray-800 tracking-wide uppercase'>Type</p>
          <div className='flex flex-col gap-3 text-sm text-gray-700'>
            <label className='flex items-center gap-3 cursor-pointer group'>
              <input 
                className='w-4 h-4 cursor-pointer accent-black' 
                type="checkbox" 
                value={'Topwear'} 
                onChange={toggleCategorySub} 
              />
              <span className='group-hover:text-black transition-colors duration-200'>Topwear</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer group'>
              <input 
                className='w-4 h-4 cursor-pointer accent-black' 
                type="checkbox" 
                value={'Bottomwear'} 
                onChange={toggleCategorySub} 
              />
              <span className='group-hover:text-black transition-colors duration-200'>Bottomwear</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer group'>
              <input 
                className='w-4 h-4 cursor-pointer accent-black' 
                type="checkbox" 
                value={'Winterwear'} 
                onChange={toggleCategorySub} 
              />
              <span className='group-hover:text-black transition-colors duration-200'>Winterwear</span>
            </label>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - PRODUCTS */}
      <div className='flex-1'>
        
        {/* Header with Title and Sort */}
        <div className="flex justify-between items-center mb-8 px-2">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Desktop Sort Dropdown */}
          <div className="relative hidden sm:block">
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="text-sm px-5 py-2.5 pr-10 border border-gray-300 rounded-lg bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none cursor-pointer font-medium text-gray-700 shadow-sm transition-all duration-200"
            >
              <option value="relavent">Sort by: Relevant</option>
              <option value="lowtohigh">Sort by: Low to High</option>
              <option value="hightolow">Sort by: High to Low</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none">
              ▼
            </span>
          </div>

          {/* Mobile Sort Button */}
          <button
            onClick={() => setShowSortMobile(true)}
            className="sm:hidden text-sm px-5 py-2.5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 font-medium text-gray-700 shadow-sm transition-all duration-200"
          >
            Sort
          </button>
        </div>

        {/* Mobile Sort Modal */}
        {showSortMobile && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end transition-opacity duration-300">
            <div className="w-full bg-white rounded-t-3xl p-6 shadow-2xl transform transition-transform duration-300">
              
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900">Sort By</h2>
                <button
                  onClick={() => setShowSortMobile(false)}
                  className="text-2xl text-gray-400 hover:text-gray-600 transition-colors duration-200 w-8 h-8 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {/* Sort Options */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setSortType("relavent");
                    setShowSortMobile(false);
                  }}
                  className={`w-full text-left px-5 py-3.5 border-2 rounded-xl font-medium transition-all duration-200 ${
                    sortType === 'relavent' 
                      ? 'border-gray-900 bg-gray-50 text-gray-900' 
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  Relevant
                </button>

                <button
                  onClick={() => {
                    setSortType("lowtohigh");
                    setShowSortMobile(false);
                  }}
                  className={`w-full text-left px-5 py-3.5 border-2 rounded-xl font-medium transition-all duration-200 ${
                    sortType === 'lowtohigh' 
                      ? 'border-gray-900 bg-gray-50 text-gray-900' 
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  Price: Low to High
                </button>

                <button
                  onClick={() => {
                    setSortType("hightolow");
                    setShowSortMobile(false);
                  }}
                  className={`w-full text-left px-5 py-3.5 border-2 rounded-xl font-medium transition-all duration-200 ${
                    sortType === 'hightolow' 
                      ? 'border-gray-900 bg-gray-50 text-gray-900' 
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  Price: High to Low
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-8'>
          {
            filteredProducts.map((item, index) => (
              <ProductItem 
                key={index} 
                name={item.name} 
                id={item._id} 
                price={item.price} 
                image={item.image} 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection