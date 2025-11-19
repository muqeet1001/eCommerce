import React from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
function LatestCollection() {
    const {products} = React.useContext(ShopContext);
    console.log(products);
    
  return (
    <div>
      
    </div>
  )
}

export default LatestCollection