import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {setBrand, setPrice } from '../redux/reducers/productSlice';

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const dispatch = useDispatch();
    
    // const handleFilter = () =>{
    //   console.log("filter btn clicked")


  return (
    <div className='navbar-container'>
        <nav className="navbar">
          <div className="logo">
            <h1>
              <Link to="/"><b>Mobile <span className="logo-price">Price</span></b></Link>
            </h1>
          </div>
          <div className="search-area">
            <div className="search">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="search" placeholder="Search your product" />
              <input type="submit" value="Search" />
            </div>
          </div>
          <div className="icon">
            <button type="compare-button">Compare Device</button>
            <div className="menu-bar" onClick={()=>{setMenu(!menu)}}>
              {menu? <i className="far fa-times-circle"></i>: <i className="fa fa-bars" aria-hidden="true"></i> }
       
            </div>
          </div>
        </nav>
      {/* 1st navbar end






      2nd navbar start */}
      <nav className= {menu? "navbar2 active" : "navbar2" }>
        <NavLink to="/" className={(navinfo) => (navinfo.isActive? "nav-active" : "")}  onClick={()=>{setMenu(!menu); dispatch(setBrand("all")); dispatch(setPrice(0));}}>Home</NavLink>
        <NavLink to="/phones" className={(navinfo) => (navinfo.isActive? "nav-active" : "")}  onClick={()=>{setMenu(!menu); dispatch(setBrand("all")); dispatch(setPrice(0)); }}>Smartphone</NavLink>
        <NavLink to="/tablets" className={(navinfo) => (navinfo.isActive? "nav-active" : "")} onClick={()=>{setMenu(!menu); dispatch(setBrand("all")); dispatch(setPrice(0));}}>Tablet</NavLink>
        <NavLink to="/laptops" className={(navinfo) => (navinfo.isActive? "nav-active" : "")} onClick={()=>{setMenu(!menu); dispatch(setBrand("all")); dispatch(setPrice(0));}}>Laptop</NavLink>
        <NavLink to="/desktops" className={(navinfo) => (navinfo.isActive? "nav-active" : "")}  onClick={()=>{setMenu(!menu); dispatch(setBrand("all")); dispatch(setPrice(0));}}>Desktop</NavLink>
        <NavLink to="/watches" className={(navinfo) => (navinfo.isActive? "nav-active" : "")} onClick={()=>{setMenu(!menu); dispatch(setBrand("all")); dispatch(setPrice(0));}}>Watch</NavLink>
        <NavLink to="/headphones" className={(navinfo) => (navinfo.isActive? "nav-active" : "")}  onClick={()=>{setMenu(!menu); dispatch(setBrand("all")); dispatch(setPrice(0));}}>Headphone</NavLink>
      </nav>

      

      {/* 2nd navbar end */}

      


     
    </div>
  )
}
