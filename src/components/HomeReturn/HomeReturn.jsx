import React from 'react'
import './HomeReturn.scss';
import logo from '../../assets/house.png'
import { Link } from "react-router-dom"

const HomeReturn = () => {
  return (
    <div className='house'>
    <img className='house--img' src={logo} alt='home'></img>
    </div>
  )
}
export default HomeReturn