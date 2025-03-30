import React, {useState, useEffect} from 'react'
import '../styles/header.scss';


const CountdownTimer = () => {
    const calculateTimeLeft = () => {
      const difference = +new Date('2025-03-30T00:00:00') - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="countdown-timer">
        <span>{String(timeLeft.days).padStart(2, '0')}<br />Days</span> :
        <span>{String(timeLeft.hours).padStart(2, '0')}<br />Hrs</span> :
        <span>{String(timeLeft.minutes).padStart(2, '0')}<br />Min</span> :
        <span>{String(timeLeft.seconds).padStart(2, '0')}<br />Sec</span>
      </div>
    );
  };

  const navItems = [
    'Banners',
    'Stands & Displays',
    'Table Covers & Displays',
    'Custom Flags',
    'LED Neon Signs',
    'Signs & Decals',
    'Asset Tags',
    'Marketing Materials',
    'Accessories',
  ];
  
  const NavigationBar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    return (
      <div className="container">
        <ul className="nav-bar">
          {navItems.map((item, index) => (
            <li key={index} className={`${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
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
            <span className='clr-orange'>Up to 25% off Sitewide.</span> Use Code: 
            <span className="Ucase clr-orange">TRADE</span>
            <CountdownTimer />
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
