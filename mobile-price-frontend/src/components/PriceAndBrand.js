import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBrand, setPrice } from '../redux/reducers/productSlice';


export default function PriceAndBrand({brands}) {
  const [filter, setFilter] = useState(false);
  const price = useSelector((state) => state.product.price);
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(setPrice(0));
      dispatch(setBrand("all"));
    }
  }, [])
  return (
    <div className='filter-and-brand-container'>
       {/* Filter abd Brand section for desktop*/}
      
       <div className="filter-and-brand">
        <button className="top-filter-btn" type="button" onClick={()=>{setFilter(!filter)}} ><i className="fa-solid fa-align-left"> </i>Filter</button>
        <button className='active-price-btn'>{price===0? "": price === 60000 ? "60000+" : `${price[0]} - ${price[1]}`}</button>
        <div className="brand-area">
          <lavel>Brand</lavel>
          <select id="brand" onChange={(e) => dispatch(setBrand(e.target.value)) }>
            <option value="all">All Brand</option>
            {brands.map((brand, index) => <option key={index} value={brand}>{brand}</option>
            )}
          </select>
        </div>

      </div>


   {/* Filter abd Brand section for mobile*/}
      <div className="mobile-price-range-area">
        <div className="filter" onClick={()=>{setFilter(!filter)}}>
        <i className="fa-solid fa-align-left"> </i>
          <span>Filter</span>
        </div>
      </div>


     {/* Filter abd Brand price range popup*/}
      <div className={filter? "popup popupactive" : "popup" }>
        <span>Price</span>
        <button onClick={()=>{setFilter(!filter); dispatch(setPrice(0)) }} type="button" className="price-range-btn">All</button>
        <button onClick={()=>{setFilter(!filter); dispatch(setPrice([5000,10000])) }} type="button" className="price-range-btn">5,000-10,000</button>
        <button onClick={()=>{setFilter(!filter); dispatch(setPrice([10000,20000])) }} type="button" className="price-range-btn">10,000-20,000</button>
        <button onClick={()=>{setFilter(!filter); dispatch(setPrice([20000,30000])) }} type="button" className="price-range-btn">20,000-30,000</button>
        <button onClick={()=>{setFilter(!filter); dispatch(setPrice([30000,45000])) }} type="button" className="price-range-btn">30,000-45,000</button>
        <button onClick={()=>{setFilter(!filter); dispatch(setPrice([45000,60000])) }} type="button" className="price-range-btn">45,000-60,000</button>
        <button onClick={()=>{setFilter(!filter); dispatch(setPrice(60000)) }} type="button" className="price-range-btn">60,000-More</button>

        <i className="far fa-times-circle" onClick={()=>{setFilter(!filter)}}></i>
        
      </div>
    </div>
  )
}
