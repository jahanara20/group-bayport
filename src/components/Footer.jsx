import React from 'react';
import { CategoryListData, InformationListData, customerServiceList, helpStationList } from '../constants/productConstants';
import '../styles/footer.scss';


const FooterSection = ({ title, data }) => (
  <div className="footer-section">
    <h4>{title}</h4>
    <ul>
      {data.map((item, index) => (
        <li key={index}><a href='#'>{item}</a></li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <div className='mainfooter'>
      <div className="newsletter">
        <label>
          Subscribe to Our Newsletter and Get 20% OFF
          <span> Your First Order + Free Super Saver Shipping*</span>
        </label>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Get In Touch</h4>
              <p>
                <span className='dB'>800-580-4489</span><a href='#'>Need to talk? We’re here 24x7.</a>
              </p>
              <p><span>Write to us<br/></span>
                <a href='#'>For your questions, we’re just an email away.</a>
              </p>
              <p>
                <span className='dB'>Need help?</span><a href='#'>Find your answers.</a>
              </p>
            </div>

            <FooterSection title="Category" data={CategoryListData} />
            <FooterSection title="Information" data={InformationListData} />
            <FooterSection title="Customer Service" data={customerServiceList} />
            <FooterSection title="Help Station" data={helpStationList} />

            <div className="footer-section reviews">
              <h4>Customer Reviews</h4>
              <div className="review-badge">97.6K</div>
            </div>
          </div>

          <div className="footer-payment">
            <div className="footer-content">
                <div className="social-section">
                <div className="social-icons">
                    Add us on social media?
                </div>
                <div className='shoppers'>
                    Powerful shoppers
                    <div className="logos">
                      <span className='logo1'></span>
                      <span className='logo2'></span>
                      <span className='logo3'></span>
                      <span className='logo4'></span>
                    </div>
                </div>
                </div>
                <div className="copyright-section">© 2009-2025 bannerbuzz.com All rights reserved.</div>
            </div>
            <figure className="norton_img"></figure>
            </div>


        </div>

       
      </footer>
    </div>
  );
};

export default Footer;
