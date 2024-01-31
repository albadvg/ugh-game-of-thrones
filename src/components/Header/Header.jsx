import React from 'react'
import españa from '../../assets/esp.png';
import uk from '../../assets/UK.png';
import "./Header.scss";
import { useTranslation } from "react-i18next"

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
    <img onClick={changeLanguageEs} className='banderas--img' src={españa} alt='español'></img>
    <img onClick={changeLanguageEn} className='banderas--img' src={uk} alt='ingles'></img>
  </nav>
  </>
  )
}
export default Header