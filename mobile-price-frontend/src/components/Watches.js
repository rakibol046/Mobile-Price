import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWatches } from '../redux/reducers/watchSlice';
import MobileCard from './Card';
import PriceAndBrand from './PriceAndBrand';

export default function Watches() {
  const url="http://localhost:3000/client/watches";
  const brands = ["Samsung", "Xiaomi", "Realme", "Apple"];
  const dispatch = useDispatch();
    useEffect(()=>{
      axios.get(url)
      .then((res) =>{
        // setMobiles(res.data)
        dispatch(setWatches(res.data))
        console.log(res.data)
      }).catch((err) =>{
        console.log(err)
      })
    }, []);

    const watches = useSelector((state) => state.watch.watches);
    const brand = useSelector((state) => state.watch.brand);
    const price = useSelector((state) => state.watch.price);
  return (
    <div>
        <PriceAndBrand brands = {brands}/>
        <div className='cards'>
            {watches.filter((watch)=>{
                  if(brand ==="" | brand ==="all") return watch;
                  else if(watch.general.brand.toLowerCase() === brand.toLowerCase()) return watch;
            })
            .filter((watch)=>{
              if(price === 0 | price === 1) return watch;
              else if(parseInt((watch.price[0]).replace(/,/g,"")) <= price) return watch;         
            })
            .map(watch => <MobileCard key={watch.id} deviceId ={watch._id} img={watch.images[0]} deviceName={watch.deviceName} price={watch.price[0]} ram="1" rom="2"/>)
            }


         </div>
    </div>
  )
}
