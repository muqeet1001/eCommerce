import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from './../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from './../components/RelatedProducts';
export default function Product() {


  const { productId } = useParams();
  const { products, currency , addToCart} = useContext(ShopContext);
  const [productData, setproductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setsize] = useState('');



  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setproductData(item);
        setImage(item.image[0]);
        return null
      }
    })
  }


  useEffect(() => {
    fetchProductData();
  }, [productId, products])


  return productData ? (
    <>
      <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item, index) => (
                  <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer' />
                ))
              }
            </div>
            <div className='w-full sm:w-[80%]'>
              <img src={image} alt="" className='w-full' />
            </div>
          </div>
          <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img className='w-3 5' src={assets.star_icon} alt="" />
              <img className='w-3 5' src={assets.star_icon} alt="" />
              <img className='w-3 5' src={assets.star_icon} alt="" />
              <img className='w-3 5' src={assets.star_icon} alt="" />
              <img className='w-3 5' src={assets.star_dull_icon} alt="" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap:4 my-8'>
              <p>Select Size</p>
              <div
                className='flex gap-2'>
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setsize(item)}
                    className={`
                        px-5 py-2 rounded-lg font-semibold
                        transition-all duration-300 ease-in-out
                        transform hover:scale-110 active:scale-95
                        shadow-md hover:shadow-lg
                        ${item === size
                        ? "bg-orange-500 text-white shadow-orange-400/50 ring-2 ring-orange-400"
                        : "bg-gray-200 text-gray-800 hover:bg-orange-100"
                      } `}
                  >
                    {item}
                  </button>
                ))}
              </div>

            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CARD</button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Origainal product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        {/* Revies section */}
        <div className='mt-20'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>An e-commerce website is a digital platform that allows users to browse products, compare prices, and purchase items online. It provides secure payment methods, product reviews, order tracking, and customer support, making shopping fast, convenient, and accessible from anywhere at any time.</p>
            <p>An e-commerce website is an online platform where users can browse, select, and purchase products or services. It supports secure payments, order management, and home delivery, making shopping easy, fast, and convenient without visiting physical stores.</p>
          </div>
        </div>
        {/* related products */}
         
      </div>
    </>
  ) : <div className='opacity:0'>
    <p>Product not found sorry iska kuch hota he nahi hai</p>
  </div>
}
