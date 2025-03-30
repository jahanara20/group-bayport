import React from 'react';
import '../styles/footer.scss';

const CategoryListData = [
  "Custom Banners",
  "Vinyl Banners",
  "Banner Stand",
  "Step & Repeat Displays",
  "Canopy Tents",
  "Neon Signs",
  "Custom Flags",
  "Asset Tags",
  "Business Cards",
];

const InformationListData = [
  "Order Tracking",
  "BannerBuzz Wallet",
  "International Shipping",
  "Customer Reviews",
  "Special Offers",
  "Sitemap",
  "Blog",
  "Buzz Catalog",
  "Banners for a Cause",
];

const customerServiceList = [
  "About Us",
  "Contact Us",
  "Privacy Policy",
  "Terms of Use",
  "Affiliate Program",
  "Areas of Service",
];

const helpStationList = [
  "FAQs",
  "Return Policy",
  "Free Design Proofs",
  "Shipping",
  "Sample Kit",
  "Vectorization",
  "Instant Quote",
  "Business Inquiries",
];

const FooterSection = ({ title, data }) => (
  <div className="footer-section">
    <h4>{title}</h4>
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
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
              <p>800-580-4489</p>
              <p>Need to talk? We’re here 24x7.</p>
              <p>Write to us</p>
              <p>For your questions, we’re just an email away.</p>
            </div>

            <FooterSection title="Category" data={CategoryListData} />
            <FooterSection title="Information" data={InformationListData} />
            <FooterSection title="Customer Service" data={customerServiceList} />
            <FooterSection title="Help Station" data={helpStationList} />

            <div className="footer-section reviews">
              <h4>Customer Reviews</h4>
              <div className="review-badge">97.6K Verified Reviews</div>
            </div>
          </div>

          <div className="footer-payment">
            <div className="footer-content">
                <div className="social-section">
                <div className="social-icons">
                    <p>Add us on social media?</p>
                    <div className="icons">
                    <span>📘</span>
                    <span>🐦</span>
                    <span>▶️</span>
                    <span>📌</span>
                    <span>📸</span>
                    </div>
                </div>
                <div className='shoppers'>
                    <p>Powerful shoppers</p>
                    <div className="logos">
                    <img src="bbb-logo.png" alt="BBB" />
                    <img src="accredited-business.png" alt="Accredited Business" />
                    <img src="ssa-logo.png" alt="SSA" />
                    <img src="isa-logo.png" alt="ISA" />
                    <img src="rocket-logo.png" alt="Rocket" />
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
