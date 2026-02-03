/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useTranslation } from 'react-i18next';
function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <div className='navbar'>
      <Link to='/dubai-restaurant' onClick={() => setMenu("home")}><img loading="lazy" src={assets.logo} alt="logo" className='logo' width={120} height={60} /></Link>

      <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <Link to='/dubai-restaurant' onClick={() => { setMenu("home"); setIsMobileMenuOpen(false) }} className={menu === "home" ? "active" : ""}>{t('home')}</Link>
        <a href='#explore-menu' onClick={() => { setMenu("menu"); setIsMobileMenuOpen(false) }} className={menu === "menu" ? "active" : ""}>{t('menu')}</a>
        <a href='#footer' onClick={() => { setMenu("contact-us"); setIsMobileMenuOpen(false) }} className={menu === "contact-us" ? "active" : ""}>{t('contact_us')}</a>

        <div className="mobile-only-lang">
          <span onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active-lang' : ''}>EN</span>
          <span onClick={() => changeLanguage('uk')} className={i18n.language === 'uk' ? 'active-lang' : ''}>UK</span>
        </div>
      </ul>

      <div className='navbar-right'>
        <div className='lang-switcher'>
          <span onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active-lang' : ''}>EN</span>
          <span className="separator">|</span>
          <span onClick={() => changeLanguage('uk')} className={i18n.language === 'uk' ? 'active-lang' : ''}>UK</span>
        </div>

        <div className="navbar-search-icon">
          <Link to={getTotalCartAmount() === 0 ? '#' : '/dubai-restaurant/cart'}>
            <img loading="lazy" src={assets.basket_icon} alt='basket' width={26} height={26} />
            {getTotalCartAmount() !== 0 && <div className="dot"></div>}
          </Link>
        </div>

        <button className="hamburger" onClick={toggleMobileMenu}>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </div>
  );
}


export default Navbar
