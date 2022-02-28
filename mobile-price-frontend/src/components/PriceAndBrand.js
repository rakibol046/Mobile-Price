import React , {useState} from 'react';

export default function PriceAndBrand() {
  const [filter, setFilter] = useState(false);
  return (
    <div className='filter-and-brand-container'>
       {/* Filter abd Brand section for desktop*/}
      
       <div class="filter-and-brand">
        <button class="top-filter-btn" type="button" class="" onClick={()=>{setFilter(!filter)}} ><i class="fa-solid fa-align-left"> </i>Filter</button>
        <div class="brand-area">
          <lavel>Brand</lavel>
          <select id="brand">
            <option value="all">All Brand</option>
            <option value="volvo">phone</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>


   {/* Filter abd Brand section for mobile*/}
      <div class="mobile-price-range-area">
        <div class="filter" onClick={()=>{setFilter(!filter)}}>
        <i class="fa-solid fa-align-left"> </i>
          <span>Filter</span>
        </div>
      </div>


     {/* Filter abd Brand price range popup*/}
      <div className={filter? "popup popupactive" : "popup" }>
        <span>Price</span>
        <button type="button" class="price-range-btn">0-5,000</button>
        <button type="button" class="price-range-btn">5,000-10,000</button>
        <button type="button" class="price-range-btn">10,000-20,000</button>
        <button type="button" class="price-range-btn">20,000-30,000</button>
        <button type="button" class="price-range-btn">30,000-45,000</button>
        <button type="button" class="price-range-btn">45,000-60,000</button>
        <button type="button" class="price-range-btn">60,000-More</button>

        <i class="far fa-times-circle" onClick={()=>{setFilter(!filter)}}></i>
        
      </div>
    </div>
  )
}
