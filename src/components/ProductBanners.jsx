import React, { useState } from 'react';
import { navItems, printSideImages } from '../constants/productConstants';
import '../styles/banners.scss';




//   const sliderImages = [
//     '/slider1.jpg',
//     '/slider2.jpg',
//     '/slider3.jpg',
//     '/slider4.jpg'
// ];
  
  const ProductBanners = () => {
    const [activeMaterial, setActiveMaterial] = useState(navItems[0]);
    const [printSide, setPrintSide] = useState('Single Sided');
    const [previewImage, setPreviewImage] = useState(activeMaterial.image);

    const handleMaterialChange = (item) => {
      setActiveMaterial(item);
      setPreviewImage(item.image);
    };

    const handlePrintSideChange = (side) => {
      setPrintSide(side);
      setPreviewImage(printSideImages[side]);
    };
    
    const handleSliderClick = (image) => {
        setPreviewImage(image);
    };
  
    return (
      <div className='productbanners'>
          <div className="container">
              <div className="banner-container">
              {/* Banner Preview */}
              <div className="banner-preview bg_f">
                  <img src={previewImage} alt={`${activeMaterial.name} - ${printSide}`} />
                  <p>{activeMaterial.name}</p>
              </div>
  
              <aside>
                  {/* Material Selection */}
                  <div className="material-selection bg_f">
                      <h3>Choose Material</h3>
                      <div className="materials">
                      {navItems.map((item, index) => (
                        <div className='_C'>
                          <div key={index}
                                className={`material-item ${activeMaterial.name === item.name ? 'active' : ''}`}
                                onClick={() => handleMaterialChange(item)}
                           >
                                <div className="img_box">
                                    <img src={item.image} />
                                </div>
                          </div>
                          <p>{item.name}</p>
                          </div>
                      ))}
                      </div>
                  </div>
  
                  {/* Print Sides Selection */}
                  <div className="print-sides bg_f">
                      <h3>Print Sides</h3>
                      <div className="sides">
                      {['Single Sided', 'Double Sided'].map((side) => (
                          <div
                          key={side}
                          className={`side-item ${printSide === side ? 'active' : ''}`}
                          onClick={() => handlePrintSideChange(side)}
                          >
                          <p>{side}</p>
                          </div>
                      ))}
                      </div>
                  </div>
  
                  {/* Footer Section */}
                  <div className="footer bg_f">
                      <span className="price">$27.23</span>
                      <button className="design-method">Select Design Method</button>
                  </div>
              </aside>
              </div>
          </div>
      </div>
    );
  };
  
  export default ProductBanners;
