import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_all">
        <div className="footer_description">
          <h3>PET fOOD</h3>
          <p>
           Money Can Buy Happiness
          </p>
        </div>
        <div className="footer_description">
          <h3>Shop</h3>
          <ul className="footer_links">
            <li>
              <Link to={'/'}></Link>
            </li>
            <li>
              <Link to={'/'}></Link>
            </li>
            
            <li>
              <Link to={'/giftcard'}>Gift Card</Link>
            </li>
            <li>
              <Link to={'/Sale'}>Sale</Link>
            </li>
          </ul>
        </div>
        <div className="footer_description">
          <h3>About</h3>
          <ul className="footer_links">
            <li>
              <Link to={'/Ourstory'}>Our story</Link>
            </li>
            <li>
              <Link to={'/Ourmaterials'}>Our materials</Link>
            </li>
           
          </ul>
        </div>
        <div className="footer_description">
          <h3>Need help?</h3>
          <ul className="footer_links">
            <li>
              <Link to={'/Faqs'}>FAQs</Link>
            </li>
            <li>
              <Link to={'/Shipping'}>Shipping & Return</Link>
            </li>
            <li>
              <Link to={'/Pet care'}>pet care </Link>
            
              <Link to={'/Contact'}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;