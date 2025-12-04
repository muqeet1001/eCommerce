import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import Login from './../pages/Login';
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "₹";
    const delivery_fee = 10;
    
    const [search, setsearch] = useState('');
    //searching 
    const [showSearch, setshowSearch] = useState(false);

    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);
        if (!size) {
            toast.error('Please select the size ');
            return;
        }
        
        
        if (cartData[itemId]) {
    
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemID, size, quantity) => {
             let cartData = structuredClone(cartItems);
             cartData[itemID][size] = quantity;
             setCartItems(cartData);
    }
   

    const getCartAmout = () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemsInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalAmount+=itemsInfo.price * cartItems[items][item];
                    }
                }
                catch(error){
                    console.log(error);
                    
                }
            }
        }
        return totalAmount;
    }
  const value = {
        products, currency, delivery_fee,
        search, setsearch,
        showSearch, setshowSearch, cartItems, addToCart, getCartCount,updateQuantity, getCartAmout,navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}


export default ShopContextProvider;
