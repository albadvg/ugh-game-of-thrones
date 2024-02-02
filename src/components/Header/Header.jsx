import React from 'react'
import españa from '../../assets/esp.png';
import uk from '../../assets/UK.png';
import "./Header.scss";
import { useTranslation } from "react-i18next"
import logo from '../../assets/house.png'
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Search from '../Search/Search';

const Header = () => {
  const { i18n } = useTranslation()
 
  const changeLanguageEn = () => {
      i18n.changeLanguage("en")
  }

  const changeLanguageEs = () => {
      i18n.changeLanguage("es")
  }

  const navigate = useNavigate();

  const volver = () => {
    navigate(-1);
  }

  return (
    <>
    <nav className='header'>

        {/[0-9]$/.test(useLocation().pathname) &&  <span className='header__volver' onClick={volver}><img src="/images/icons/flecha.png" alt='volver' className='header__arrow'/>Volver</span>}
        <p></p>

        {(useLocation().pathname === '/characters') && <Search/>}
        {(useLocation().pathname === '/houses') && <Search/>}

        <div className='header-iconos'>
        {useLocation().pathname !== `/` && <Link to="/"><img className='header-iconos__img header-iconos__img--filter' src={logo} alt='home'></img></Link>}
        <img onClick={changeLanguageEs} className='header-iconos__img' src={españa} alt='español'></img>
        <img onClick={changeLanguageEn} className='header-iconos__img' src={uk} alt='ingles'></img>
      </div>
    </nav>
  </>
  )
}
export default Header