import React from 'react'
import españa from '../../assets/esp.png';
import uk from '../../assets/UK.png';
import "./Header.scss";
import { useTranslation } from "react-i18next"
import logo from '../../assets/house.png'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { i18n } = useTranslation()
 
  const changeLanguageEn = () => {
      i18n.changeLanguage("en")
  }

  const changeLanguageEs = () => {
      i18n.changeLanguage("es")
  }


  return (
    <>
    <nav className='banderas'>
    {useLocation().pathname !== `/` && <Link to="/"><img className='house--img' src={logo} alt='home'></img></Link>}
    <img onClick={changeLanguageEs} className='banderas--img' src={españa} alt='español'></img>
    <img onClick={changeLanguageEn} className='banderas--img' src={uk} alt='ingles'></img>
  </nav>
  </>
  )
}
export default Header