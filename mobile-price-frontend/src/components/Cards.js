import React, {useState, useEffect} from 'react'
import MobileCard from './Card'
import axios from 'axios';

export default function Cards({url}) {
    const [mobiles, setMobiles] = useState([]);
    useEffect(()=>{
      axios.get(url)
      .then((res) =>{
        setMobiles(res.data)
        console.log(res.data)
      }).catch((err) =>{
        console.log(err)
      })
    }, []);
  return (
    <div className='cards'>
       {mobiles!=""?  mobiles.map(mobile => <MobileCard key={mobile.id} deviceId ={mobile._id} img={mobile.images[0]} deviceName={mobile.deviceName} price={mobile.price[0]} ram="6" rom="128"/>):"Data loading"}
    </div>
  )
}
