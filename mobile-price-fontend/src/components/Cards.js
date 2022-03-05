import React, {useState, useEffect} from 'react'
import MobileCard from './Card'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMobiles, setBrand, setPrice } from '../store/Reducers/mobileReducer';


export default function Cards({url}) {
    // const [mobiles, setMobiles] = useState([]);
    const dispatch = useDispatch()
    useEffect(()=>{
      axios.get(url)
      .then((res) =>{
        // setMobiles(res.data)
        dispatch(setMobiles(res.data))
        console.log(res.data)
      }).catch((err) =>{
        console.log(err)
      })
    }, []);

    const mobiles = useSelector((state) => state.mobile.mobiles);
    const brand = useSelector((state) => state.mobile.brand);
    const price = useSelector((state) => state.mobile.price);
    console.log(price)
  return (
    <div className='cards'>
      {mobiles.filter((mobile)=>{
            if(brand =="" | brand =="all") return mobile;
            else if(mobile.general.brand.toLowerCase() == brand.toLowerCase()) return mobile;
      })
      .filter((mobile)=>{
        if(price === 0 | price === 1) return mobile;
        else if(parseInt((mobile.price[0]).replace(/,/g,"")) <= price) return mobile;         
      })
      .map(mobile => <MobileCard key={mobile.id} deviceId ={mobile._id} img={mobile.images[0]} deviceName={mobile.deviceName} price={mobile.price[0]} ram="6" rom="128"/>)
      }


       {/* {mobiles!=""?  mobiles.map(mobile => <MobileCard key={mobile.id} deviceId ={mobile._id} img={mobile.images[0]} deviceName={mobile.deviceName} price={mobile.price[0]} ram="6" rom="128"/>):"Data loading"} */}
    </div>
  )
}
