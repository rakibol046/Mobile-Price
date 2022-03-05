import React from 'react'
import LatestDeviceMessage from './LatestDeviceMessage'
import Cards from './Cards'

export default function Home() {
  return (
    <div>
         <LatestDeviceMessage />
        <div className="home-lavel"> <i className="fas fa-mobile-alt"></i>  Smartphone</div>
        <Cards url="http://localhost:3000/" />

        <hr />

        <div className="home-lavel"> <i className="fas fa-tablet-alt"></i>  Tablet</div>
        <Cards url="http://localhost:3000/" />
        <hr />
        <div className="home-lavel"> <i className="fas fa-laptop"></i> Laptop</div>
        <Cards url="http://localhost:3000/" />
        <hr />

        <div className="home-lavel"> <i className="fas fa-desktop-alt"></i>  Desktop</div>
        <Cards url="http://localhost:3000/" />
        <div className="home-lavel"> <i className="far fa-clock"></i> Watch</div>
        <Cards url="http://localhost:3000/" />
        <div className="home-lavel"> <i className="fas fa-headphones"></i>  Headphone</div>
    </div>
  )
}
