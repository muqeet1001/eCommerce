import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './../context/ShopContext';
import { assets } from '../assets/assets';
import Title from './../components/Title';
import ProductItem from './../components/ProductItem';

function Collection() {


  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = React.useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');


  const toggleCategory = (e) => {
    //if the catory is already selected then remove it else add it
    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item !== e.target.value))
     }
    else {
      setcategory(prev => [...prev, e.target.value]);
   }
  }

  const toggleCategorySub = (e) => {
    //if the catory is already selected then remove it else add it
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

    if(showSearch && search){
       result = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
      }
    if (category.length > 0) {
      result = result.filter(item => category.includes(item.category));
    }
    
    if (subCategory.length > 0) {
      result = result.filter(item => subCategory.includes(item.subCategory));
    }

     setFilteredProducts(result);
  }, [category, subCategory, products,search,showSearch]);


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
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>

        <div onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ' '}`} src={assets.dropdown_icon} alt="" />
        </div>
        {/* Catory Filter */}
        <div className={`border border-gray-300 pl-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Men'} onChange={toggleCategory} />MEN
            </p>
            <p className='flex gap-2'>
              <input className='w-3 border-none outline-none' type="checkbox" value={'Women'} onChange={toggleCategory} />WOMEN
            </p>
            <p className='flex gap-2'>
              <input className='w-3 border-none outline-none' type="checkbox" value={'Kids'} onChange={toggleCategory} />KIDS
            </p>
          </div>
        </div>
        {/* sub catory filter */}
        <div className={`border border-gray-300 pl-5 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3 ' type="checkbox" value={'Topwear'} onChange={toggleCategorySub} />Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3 border-none outline-none' type="checkbox" value={'Bottomwear'} onChange={toggleCategorySub} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3 border-none outline-none' type="checkbox" value={'Winterwear'} onChange={toggleCategorySub} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Sort Product */}
          <select onChange={(e) => setSortType(e.target.value)} className='text-sm px-2 border border-gray-300'>
            <option value="relavent">Sort by : Relavent</option>
            <option value="lowtohigh">Sort by : Price Low to High</option>
            <option value="hightolow">Sort by : Price High to Low</option>
          </select>
        </div>
        {/* Map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 '>
          {
            filteredProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default Collection