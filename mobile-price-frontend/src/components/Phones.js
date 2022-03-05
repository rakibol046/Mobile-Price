import React from 'react';
import Cards from './Cards';
import PriceAndBrand from './PriceAndBrand';

export default function Phones() {
  const brands = ["Samsung", "Xiaomi", "Realme", "Vivo", "Oppo", "Apple","Symphony", "OnePlus", "Nokia", "Tecno", "Walton", "itel", "Infinix", "Motorola"];
  return (
    <div>
        <PriceAndBrand brands = {brands}/>
        <Cards url="http://localhost:3000/phones" />
    </div>
  )
}
