import React, {useState, useEffect} from 'react';
import { navigationItems } from '../constants/productConstants';
import '../styles/header.scss';

  const NavigationBar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div id="navigation-container" className={isSticky ? 'sticky' : ''}>
      <div className="container" >
        <ul className="nav-bar">
          {navigationItems.map((item, index) => (
            <li key={index} className={`${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      </div>
    );
  };
  
  

const Topbar = () => {
    return (
        <div className="top-bar">
        <div className="shipping-info">
        <span className="icon">🚚</span>
        Free Super Saver Shipping over $99
        </div>
        <div className='dF offer-info fw-6'>
            <span className='clr-orange'>Up to 25% off Sitewide. </span> Use Code:  
            <span className="Ucase clr-orange"> TRADE</span>
            {/* <CountdownTimer /> */}
        </div>
        <div className='dF'>
            <span className="quick-links">Quick Links ▼</span>
            <span className="country-selector">🇺🇸 ▼</span>
        </div>
    </div>
    )
  }


const Header = () => {
  return (
    <header>
        <Topbar />
        <NavigationBar />
    </header>
  )
}

export default Header
