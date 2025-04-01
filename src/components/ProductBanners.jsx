import React, { useState, useEffect } from 'react';
import { navItems, printSideImages, sliderImages, services, hangingItems } from '../constants/productConstants';
import '../styles/banners.scss';

const ServiceItem = ({ icon, label }) => (
  <div className="service-item">
    <div className="icon-wrapper">
      <img src={icon} alt={label} />
    </div>
    <p>{label}</p>
  </div>
);

  const ProductBanners = () => {
    const [activeMaterial, setActiveMaterial] = useState(navItems[0]);
    const [printSide, setPrintSide] = useState('Single Sided');
    const [previewImage, setPreviewImage] = useState(activeMaterial.image);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [materialIndex, setMaterialIndex] = useState(0);
    const [hangingIndex, setHangingIndex] = useState(0);


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
    const handleNext = () => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };
    const handleNextMaterial = () => {
      setMaterialIndex((prev) => (prev + 1) % navItems.length);
    };
  
    const handlePrevMaterial = () => {
      setMaterialIndex((prev) => (prev - 1 + navItems.length) % navItems.length);
    };
    const handleNexthanging = () => {
      setHangingIndex((prev) => (prev + 1) % hangingItems.length);
    };
  
    const handlePrevhanging = () => {
      setHangingIndex((prev) => (prev - 1 + hangingItems.length) % navItems.length);
    };
  
    return (
      <div className='productbanners'>
          <div className="container">
              <div className="banner-container">
              {/* Banner Preview */}
              <div className="banner-preview">
                  <div className="bg_f banner_imgbox" >
                  <img src={previewImage} alt={`${activeMaterial.name} - ${printSide}`} />
                  </div>
                  {/* Slider Section with Arrows */}
                  <div className="slider">
                    <button className="slider-arrow" onClick={handlePrev}></button>
                    <div className="slider-container">
                      {[...sliderImages, ...sliderImages].slice(currentIndex, currentIndex + 7).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Slide ${index + 1}`}
                          onClick={() => handleSliderClick(image)}
                          className="slider-img"
                        />
                      ))}
                    </div>
                    <button className="slider-arrow next" onClick={handleNext}></button>
                  </div>
                  {/* Slider Section with Arrows end */}
              </div>
  
              <aside>
                {/* Print Sides Selection */}
                <div className="print-sides bg_f">
                  <h1>Custom Vinyl Banners</h1>
                  <div className="services-container">
                    {services.map((service, index) => (
                      <ServiceItem key={index} {...service} />
                    ))}
                  </div>
                </div>

                  {/* Material Selection */}
                  <div className="material-selection bg_f slidediv">
                    <h3>Choose Material</h3>
                    <div className="slider-controls">
                      <button className="slider-arrow" onClick={handlePrevMaterial}></button>
                      <div className="materials">
                      
                        {[...navItems, ...navItems].slice(materialIndex, materialIndex + 4).map((item, index) => (
                          <div className='_C' key={index}>
                            <div
                              className={`material-item ${activeMaterial.name === item.name ? 'active' : ''}`}
                              onClick={() => handleMaterialChange(item)}
                            >
                              <div className="img_box">
                                <img src={item.image} alt={item.name} />
                              </div>
                            </div>
                            <p>{item.name}</p>
                          </div>
                        ))}
                      </div>
                      <button className="slider-arrow next" onClick={handleNextMaterial}></button>
                    </div>
                
                  </div>
  
                  {/* Print Sides Selection */}
                  <div className="print-sides bg_f">
                      <h3>Print Sides</h3>
                      <div className="sides">
                      {['Single Sided', 'Double Sided'].map((side) => (
                          <div key={side}
                          className={`side-item ${printSide === side ? 'active' : ''}`}
                          onClick={() => handlePrintSideChange(side)}
                          >
                          <p>{side}</p>
                          </div>
                      ))}
                      </div>
                  </div>

                  {/* Material Selection */}
                  <div className="material-selection bg_f slidediv">
                      <h3>Hanging Options</h3>
                      <div className="slider-controls">
                        <button className="slider-arrow" onClick={handlePrevhanging}></button>
                        <div className="materials">
                        {[...hangingItems, ...hangingItems].slice(hangingIndex, hangingIndex + 4).map((item, index) => (
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
                        <button className="slider-arrow next" onClick={handleNexthanging}></button>
                        </div>
                  </div>
                  <div className="material-selection bg_f slidediv">
                    <h3>Choose Material</h3>
                    <div className="slider-controls">
                      <button className="slider-arrow" onClick={handlePrevMaterial}></button>
                      <div className="materials">
                      
                        {[...navItems, ...navItems].slice(materialIndex, materialIndex + 4).map((item, index) => (
                          <div className='_C' key={index}>
                            <div
                              className={`material-item ${activeMaterial.name === item.name ? 'active' : ''}`}
                              onClick={() => handleMaterialChange(item)}
                            >
                              <div className="img_box">
                                <img src={item.image} alt={item.name} />
                              </div>
                            </div>
                            <p>{item.name}</p>
                          </div>
                        ))}
                      </div>
                      <button className="slider-arrow next" onClick={handleNextMaterial}></button>
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
