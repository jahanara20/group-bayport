import { useState } from 'react'
import './styles/bayport.scss';
import ProductSection from './components/productCardSection';
import ProductBanners from './components/ProductBanners';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Header />
    <ProductBanners />
    <ProductSection />
    <Footer/>
    </>
  )
}

export default App
