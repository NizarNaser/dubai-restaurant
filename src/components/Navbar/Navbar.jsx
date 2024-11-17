/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useTranslation } from 'react-i18next';
function Navbar({setShowLogin}) {
    const [menu,setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext)
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

   
  return (
    <div className='navbar'> 
        <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>

        <ul className="navbar-menu">
            <Link  to='/Dubai-restaurant' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>{t('home')}</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>{t('menu')}</a>
            <a href='#footer'  onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>{t('contact_us')}</a>
        </ul>
        <div className='navbar-right'>
        <ul className='lang-select' >
        <li className='lang-option'  onClick={() => changeLanguage('en')} value="en">Eng</li>
        <li className='lang-option' onClick={() => changeLanguage('uk')} value="uk">ukr</li>
      </ul>
           <img className='search' src={assets.search_icon} alt=''/>
           <div className="navbar-search-icon">
           {getTotalCartAmount()===0
           ?<p><img src={assets.basket_icon} alt=''/></p>
           
           
           : <Link to='/Dubai-restaurant/cart'><img src={assets.basket_icon} alt=''/></Link>}

            <div className={getTotalCartAmount()===0?"":"dot"}>

            </div>
           </div>
           <button className='sign-in' onClick={()=>setShowLogin(true)}>{t('sign_in')}</button>
        </div>
    </div>
  )
}

export default Navbar