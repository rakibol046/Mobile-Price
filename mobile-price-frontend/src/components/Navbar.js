import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    
    // const handleFilter = () =>{
    //   console.log("filter btn clicked")


  return (
    <div className='navbar-container'>
        <nav class="navbar">
          <div class="logo">
            <h1>
              <Link to="/"><b>Mobile <span class="logo-price">Price</span></b></Link>
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
            <button type="compare-button">Compare Device</button>
            <div class="menu-bar" onClick={()=>{setMenu(!menu)}}>
              {menu? <i class="far fa-times-circle"></i>: <i class="fa fa-bars" aria-hidden="true"></i> }
       
            </div>
          </div>
        </nav>
      {/* 1st navbar end






      2nd navbar start */}
      <nav class= {menu? "navbar2 active" : "navbar2" }>
        <NavLink to="/phones" className={(navinfo) => (navinfo.isActive? "nav-active" : "")}  onClick={()=>{setMenu(!menu)}}>Smartphone</NavLink>
        <NavLink to="/tablets" className={(navinfo) => (navinfo.isActive? "nav-active" : "")} onClick={()=>{setMenu(!menu)}}>Tablet</NavLink>
        <NavLink to="/laptops" className={(navinfo) => (navinfo.isActive? "nav-active" : "")} onClick={()=>{setMenu(!menu)}}>Laptop</NavLink>
        <NavLink to="/desktops" className={(navinfo) => (navinfo.isActive? "nav-active" : "")}  onClick={()=>{setMenu(!menu)}}>Desktop</NavLink>
        <NavLink to="/watches" className={(navinfo) => (navinfo.isActive? "nav-active" : "")} onClick={()=>{setMenu(!menu)}}>Watch</NavLink>
        <NavLink to="/headphones" className={(navinfo) => (navinfo.isActive? "nav-active" : "")}  onClick={()=>{setMenu(!menu)}}>Headphone</NavLink>
      </nav>

      

      {/* 2nd navbar end */}

      


     
    </div>
  )
}
