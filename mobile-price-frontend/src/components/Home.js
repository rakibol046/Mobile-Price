import React from 'react'
import LatestDeviceMessage from './LatestDeviceMessage'
import Cards from './Cards'

export default function Home() {
  return (
    <div>
         <LatestDeviceMessage />
        <div className="home-lavel"> <i class="fas fa-mobile-alt"></i>  Smartphone</div>
        <Cards />

        <hr />

        <div className="home-lavel"> <i class="fas fa-tablet-alt"></i>  Tablet</div>
        <Cards />
        <hr />
        <div className="home-lavel"> <i class="fas fa-laptop"></i> Laptop</div>
        <Cards />
        <hr />

        <div className="home-lavel"> <i class="fas fa-desktop-alt"></i>  Desktop</div>

        <div className="home-lavel"> <i class="far fa-clock"></i> Watch</div>

        <div className="home-lavel"> <i class="fas fa-headphones"></i>  Headphone</div>
    </div>
  )
}
