import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'

function SearchBar() {
    const { search, setsearch, showSearch, setshowSearch } = React.useContext(ShopContext)
    const [visible, setvisible] = useState(false);

    const location = useLocation();
          
    useEffect(() => {
        if (location.pathname.includes('collection') && showSearch) {
            setvisible(true);
        } else {
            setvisible(false);
        }
    }, [location.pathname, showSearch])

    
    return showSearch && visible ? (
        <div className=" text-center overflow-hidden">

            {/* Animated Search Box */}
            <div className="inline-flex items-center justify-center border border-gray-700 
        px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 lg:w-1/3
        transition-all duration-300 ease-in-out
        hover:shadow-md hover:scale-[1.02]">

                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    className="flex-1 outline-none bg-inherit text-sm 
          transition-all duration-200 
          focus:placeholder-transparent"
                />

                <img
                    className="w-4 opacity-70 hover:opacity-100 transition-all duration-200"
                    src={assets.search_icon}
                    alt=""
                />
            </div>

            {/* Animated Close Icon */}
            <img
                onClick={() => setshowSearch(false)}
                className="inline w-3 cursor-pointer 
        hover:rotate-90 transition-all duration-300"
                src={assets.cross_icon}
                alt=""
            />
        </div>
    ) : null
}

export default SearchBar
