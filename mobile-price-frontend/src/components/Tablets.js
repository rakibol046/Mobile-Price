import React from 'react';
import Cards from './Cards';
import PriceAndBrand from './PriceAndBrand';

export default function Tablets() {
  const brands = ["Samsung", "Xiaomi", "Realme", "Vivo", "Oppo", "Apple"];
  return (
    <div>
        <PriceAndBrand brands = {brands}/>
        <Cards url="http://localhost:3000/client/tablets" />
    </div>
  )
}
