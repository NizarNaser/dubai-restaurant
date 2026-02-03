import { assets } from "../../assets/assets"
import "./Footer.css"
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/dubai-restaurant">
            <img src={assets.logo} alt="logo" width="150" height="80" loading="lazy" />
          </Link>
          <p>{t('Choose-from-a-diverse-menu')}</p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" src={assets.facebook_icon} alt="Facebook" width="40" height="40" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" src={assets.twitter_icon} alt="Twitter" width="40" height="40" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img loading="lazy" src={assets.linkedin_icon} alt="LinkedIn" width="40" height="40" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>{t('COMPANY')}</h2>
          <ul>
            <li><Link to="/dubai-restaurant">{t('home')}</Link></li>
            <li><a href="#about-us">{t('About-us')}</a></li>
            <li><a href="#delivery">{t('Delivery')}</a></li>
            <li><a href="#privacy-policy">{t('Privacy-policy')}</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>{t('GET-IN-TOUCH')}</h2>
          <ul>
            <li><a href="tel:+380681070011">+38 068 107 00 11</a></li>
            <li><a href="mailto:restaurant.dubai.kiev@gmail.com">restaurant.dubai.kiev@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright {currentYear} © Dubai Restaurant - {t('All-Right-Reserved')}.</p>
    </div>
  )
}

export default Footer