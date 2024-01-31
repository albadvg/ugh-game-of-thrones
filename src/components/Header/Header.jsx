import React from 'react'
import españa from '../../assets/esp.png';
import uk from '../../assets/UK.png';
import "./Header.scss";

const Header = () => {
  return (
    <>
    <nav className='banderas'>
    <img className='banderas--img' src={españa} alt='español'></img>
    <img className='banderas--img' src={uk} alt='ingles'></img>
  </nav>
  </>
  )
}
export default Header