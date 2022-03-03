import React from 'react'
import Cards from './Cards'
import PriceAndBrand from './PriceAndBrand';

export default function Phones() {
  return (
    <div>
        <PriceAndBrand />
        <Cards url="http://localhost:3000/phones" />
    </div>
  )
}
