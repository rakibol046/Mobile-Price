import React from 'react';
import style from '../../static/css/NavStyle.module.css';
import Icon from './Icon';
import Search from './Search';



export default function Nav() {
  return (
    <div>
        <div className={style.navTop}>
            <div className={style.name}> <b>Mobile <span className={style.namePrice}>Price</span></b></div>
            <div className={style.search}>
                <Search />
            </div>
            <div className={style.icon}>
                <Icon />
            </div>
        </div>
        <div className={style.navDown}>
            <a href="#" className={style.link}>Smartphones</a>
            <a href="#" className={style.link}>Tablets</a>
            <a href="#" className={style.link}>Laptop</a>
            <a href="#" className={style.link}>Desktop</a>
            <a href="#" className={style.link}>Camera</a>
            <a href="#" className={style.link}>Headphone</a>
        </div>


        <div className={style.price}>
            <button className={style.rangeBtn}>0-5,000</button>
            <button className={style.rangeBtn}>5,000-10,000</button>
            <button className={style.rangeBtn}>10,000-20,000</button>
            <button className={style.rangeBtn}>20,000-30,000</button>
            <button className={style.rangeBtn}>30,000-40,000</button>
            <button className={style.rangeBtn}>40,000-50,000</button>
            <button className={style.rangeBtn}>50,000-60,000</button>
            <button className={style.rangeBtn}>60,000-More</button>
        </div>
    </div>
  )
}
