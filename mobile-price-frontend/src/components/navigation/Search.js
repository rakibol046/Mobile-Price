import React from 'react';
import style from '../../static/css/NavStyle.module.css';


export default function Search() {
  return (
    <div>
        <form action='' method='post'>
        
        <input type="search" name='search' className={style.searchField} placeholder="Search your wishes phone from here"/>
        
        <input type='submit' className={style.btn} value="Search" />
        </form>
    </div>
  )
}
