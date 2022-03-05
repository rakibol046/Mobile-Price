import React from 'react';
import { useDispatch } from 'react-redux';
import { setBrand, setPrice } from '../store/Reducers/mobileReducer';

export default function Navbar2() {
  const dispatch = useDispatch();
  return (
    <div>
    <nav class="navbar2">
    <a onClick={() => dispatch(setPrice(0))} href="#">Smartphone</a>
    <a href="#">Tablet</a>
    <a href="#">Laptop</a>
    <a href="#">Desktop</a>
    <a href="#">Camera</a>
    <a href="#">Headphone</a>
  </nav>
    </div>
  )
}
