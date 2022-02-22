import React from 'react';
import style from '../static/css/HomeStyle.module.css';
import Card from './Card';
import Title from './Title';

export default function Home() {
  return (
    <div>
        <div className={style.moto}>
            <h1 className={style.heading1}>Latest Device</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. eveniet?</p>
        </div>
        
        <Title title="Smartphone" />

        <div className={style.homeData}>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
           
                
        </div>
        <Title title="Laptop" />

        <div className={style.homeData}>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            
                
        </div>
        <Title title="Desktop" />

        <div className={style.homeData}>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            <div className={style.card}><Card /></div>
            
                
        </div>
    </div>
  )
}
