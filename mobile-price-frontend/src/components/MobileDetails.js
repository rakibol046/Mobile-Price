import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { useParams } from "react-router-dom";

export default function MobileDetails() {
    let params = useParams();
    console.log(params)
    const breakPoints = [
        // { width: 1, itemsToShow: 1 },
        // { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        // { width: 768, itemsToShow: 3 },
        // { width: 1200, itemsToShow: 4 }
      ];
    const [mobile, setMobile] = useState([]);
    const [images, setImages] = useState([]);
    useEffect(()=>{
      axios.get(`http://localhost:3000/client/phones/${params.deviceId}`)
      .then((res) =>{
        setMobile(res.data)
        setImages(res.data.images)
        console.log(res.data)
        
        console.log(images)
      }).catch((err) =>{
        console.log(`url error the error is ${err}`)
      })
      return () =>{
          setMobile([])
      }
    }, []);
  return (
    <div className='mobile-details-container'>
      {mobile!="" ? 
       <>
       <div className="mobile-images">
        <Carousel breakPoints={breakPoints} className='carousel'>
        {images.map(image => <img src={image} />)}

        </Carousel>
        </div>
        <div className="mobile-details">
            <h1>{mobile.deviceName}</h1>
            <p className='brand-and-status'><strong>Brand:</strong> Xiaomi   
            <strong> Status: </strong> Available</p>

            <div className="official-price">
                <h3>Official Price</h3>
                <div className="variant">
                <p>৳{mobile.price[0]} 3/32GB</p>
                <p>৳18,999 4/68GB</p>
                <p>৳20,999 6/128GB</p>
                </div>
            </div>

        





            <leval>General</leval>
            <table>
               <tr>
                   <td>Device Type</td>
                   <td>Smartphone</td>
               </tr>
               <tr>
                    <td>Brand</td>
                   <td>Xiaomi</td>
               </tr>
               <tr>
                    <td>Model</td>
                   <td>Redmi Note 8</td>
               </tr>
               <tr>
                    <td>Status</td>
                   <td>Available</td>
               </tr>
            </table>


            <leval>Launch</leval>
            <table>
               <tr>
                   <td>Announced</td>
                   <td>August 2019</td>
               </tr>
               <tr>
                    <td>Released</td>
                   <td>Available. September 2019</td>
               </tr>
            
            </table>



            <leval>Connectivity</leval>
            <table>
               <tr>
                   <td>Network</td>
                   <td>2G, 3G, 4G</td>
               </tr>
               <tr>
                    <td>SIM</td>
                   <td>Dual Nano SIM</td>
               </tr>
               <tr>
                    <td>WLAN</td>
                   <td>dual-band, Wi-Fi direct, Wi-Fi hotspot</td>
               </tr>
               <tr>
                    <td>USB</td>
                   <td>v2.0</td>
               </tr>
               <tr>
                    <td>Radio</td>
                   <td>FM</td>
               </tr>
            </table>



            <leval>Body</leval>
            <table>
               <tr>
                   <td>Style</td>
                   <td>Minimal Notch</td>
               </tr>
               <tr>
                    <td>Material</td>
                   <td>Gorilla Glass 5 front and back, plastic frame</td>
               </tr>
               <tr>
                    <td>Dimensions</td>
                   <td>158.3 x 75.3 x 8.4 millimeters</td>
               </tr>
               <tr>
                    <td>Weight</td>
                   <td>190 grams</td>
               </tr>
            </table>




            <leval> Display</leval>
            <table>
               <tr>
                   <td>Size</td>
                   <td>6.3 inches</td>
               </tr>
               <tr>
                    <td>Resolution</td>
                   <td>Full HD+ 1080 x 2340 pixels (409 ppi)</td>
               </tr>
               <tr>
                    <td>Technology</td>
                   <td>IPS LCD Touchscreen</td>
               </tr>
               <tr>
                    <td>Protection</td>
                   <td>Corning Gorilla Glass 5</td>
               </tr>
               <tr>
                    <td>Features</td>
                   <td>Multitouch</td>
               </tr>
            </table>


            <leval>Back Camera</leval>
            <table>
               <tr>
                   <td>Resolution</td>
                   <td>Quad 48+8+2+2 Megapixel</td>
               </tr>
               <tr>
                    <td>Features</td>
                   <td>PDAF, LED flash, HDR, wide, ultrawide, macro camera, depth sensor and more</td>
               </tr>
            
               <tr>
                    <td>Video Recording</td>
                   <td>Ultra HD 4K (2160p), EIS (1080p)</td>
               </tr>
            </table>


            <leval>Front Camera</leval>
            <table>
               <tr>
                   <td>Resolution</td>
                   <td>13 Megapixel</td>
               </tr>
               <tr>
                    <td>Features</td>
                   <td>HDR, f/2.0</td>
               </tr>
            
               <tr>
                    <td>Video Recording</td>
                   <td>Full HD (1080p)</td>
               </tr>
            </table>


            <leval> Battery</leval>
            <table>    
               <tr>
                    <td>Type and Capacity</td>
                   <td>Lithium-polymer 4000 mAh (non-removable)</td>
               </tr>
               <tr>
                    <td>Fast Charging</td>
                   <td>18W Fast Charging</td>
               </tr>
    
            </table>





            <leval>Performance</leval>
            <table>    
               <tr>
                    <td>Operating System</td>
                   <td>Android Pie v9.0 (MIUI 11)</td>
               </tr>
               <tr>
                    <td>Chipset</td>
                   <td>Qualcomm Snapdragon 665 (11nm)</td>
               </tr>
               <tr>
                    <td>RAM</td>
                   <td>3 / 4 / 6 GB</td>
               </tr>
               <tr>
                    <td>Processor</td>
                   <td>Octa core, up to 2.0 GHz</td>
               </tr>
               <tr>
                    <td>GPU</td>
                   <td>Adreno 610</td>
               </tr>
            </table>





            <leval>Storage</leval>
            <table>    
               <tr>
                    <td>ROM</td>
                   <td>	32 / 64 / 128 GB</td>
               </tr>
               <tr>
                    <td>MicroSD Slot</td>
                   <td>up to 256 GB (dedicated slot)</td>
               </tr>
              
            </table>




            <leval>Sound</leval>
            <table>    
               <tr>
                    <td>3.5mm Jack</td>
                   <td>Ok</td>
               </tr>
               <tr>
                    <td>Features</td>
                   <td>Loudspeaker</td>
               </tr>
            </table>






            <leval>Security</leval>
            <table>    
               <tr>
                    <td>Fingerprint</td>
                   <td>	On the back</td>
               </tr>
               <tr>
                    <td>Face Unlock</td>
                   <td>ok</td>
               </tr>
               <tr>
                    <td>Features</td>
                   <td>Multitouch</td>
               </tr>
               <tr>
                    <td>Features</td>
                   <td>Multitouch</td>
               </tr>
            </table>




            <leval>Others</leval>
            <table>    
               <tr>
                    <td>Notification Light</td>
                   <td>	Ok</td>
               </tr>
               <tr>
                    <td>Sensors</td>
                   <td>Fingerprint, Accelerometer, Gyroscope, Proximity, E-Compass</td>
               </tr>
               <tr>
                    <td>Made in</td>
                   <td>India</td>
               </tr>

            </table>
        
        </div>
       </>
       : <h4>... Loading</h4>
  }

    </div>
  )
}
