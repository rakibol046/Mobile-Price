import React, { useState } from 'react';

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [filter, setFilter] = useState(false);
    // const handleFilter = () =>{
    //   console.log("filter btn clicked")
    // }





  return (
    <div>
        <nav class="navbar">
          <div class="logo">
            <h1>
              <b>Mobile <span class="logo-price">Price</span></b>
            </h1>
          </div>
          <div class="search-area">
            <div class="search">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input type="search" placeholder="Search your product" />
              <input type="submit" value="Search" />
            </div>
          </div>
          <div class="icon">
            {/* <div class="icon-item">
              <i class="fa fa-mobile" aria-hidden="true"></i>
              <i class="fa fa-tablet" aria-hidden="true"></i>
              <i class="fa fa-laptop" aria-hidden="true"></i>
              <i class="fa fa-desktop" aria-hidden="true"></i>
              <i class="fa fa-video-camera" aria-hidden="true"></i>
              <i class="fa fa-headphones" aria-hidden="true"></i>
            </div>  */}
            <button type="compare-button">Compare Device</button>
            <div class="menu-bar" onClick={()=>{setMenu(!menu)}}>
              {menu? <i class="far fa-times-circle"></i>: <i class="fa fa-bars" aria-hidden="true"></i> }
              
            </div>
          </div>
        </nav>
      {/* 1st navbar end






      2nd navbar start */}
      <nav class= {menu? "navbar2 active" : "navbar2" }>
        <a href="#">Smartphone</a>
        <a href="#">Tablet</a>
        <a href="#">Laptop</a>
        <a href="#">Desktop</a>
        <a href="#">Camera</a>
        <a href="#">Headphone</a>
      </nav>

      

      {/* 2nd navbar end */}

      


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
