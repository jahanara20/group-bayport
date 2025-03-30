import React, {useEffect} from 'react';
import '../styles/productSection.scss';

const products = [
  {
    image: 'https://cdn.bannerbuzz.com/media/catalog/product/resize/214/n/0/n0_bbrmob01_1_us.jpg',
    title: 'Outdoor Banners',
    rating: 4.4,
    reviews: 6146,
    price: '$6.99'
  },
  {
    image: 'https://cdn.bannerbuzz.com/media/catalog/product/resize/214/n/3/n3_bbwnbdb01_1.jpg',
    title: "President's Day Banner",
    rating: 4.4,
    reviews: 6146,
    price: '$6.99'
  },
  {
    image: 'https://cdn.bannerbuzz.com/media/catalog/product/resize/214/n/0/n0_bbrmob01_1_us.jpg',
    title: 'Sponsor Banners',
    rating: 4.4,
    reviews: 6146,
    price: '$6.99'
  },
  {
    image: 'https://cdn.bannerbuzz.com/media/catalog/product/resize/214/a/l/alc202_bbzt01_1_us.jpg',
    title: 'Zip Ties Pack of 4',
    rating: 3.9,
    reviews: 802,
    price: '$1.99'
  },
  {
    image: 'https://cdn.bannerbuzz.com/media/catalog/product/resize/214/n/0/n0_bbrmob01_1_us.jpg',
    title: 'Please Do Not Flush Baby Wipes Decal (Non Reflective)',
    rating: 3.8,
    reviews: 2013,
    price: '$2.88'
  }
];

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} loading="lazy" fetchPriority="low" />
    <div className='name_height'>
        <h4>{product.title}</h4>
        <p className="rating">
        <span>{product.rating}</span> ★★★★☆ ({product.reviews})
        </p>
    </div>
    <p className="price">Start at: <strong>{product.price}</strong></p>
    <button className="customize-btn">Customize</button>
  </div>
);

const ProductSection = () => {
    // Preload the LCP image
    useEffect(() => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = products[0].image; // First image assumed to be LCP
      link.as = 'image';
      link.fetchpriority = 'high';
      document.head.appendChild(link);
    }, []);
  
    return (
      <div className="product-section container">
        <h2>Customers Who Viewed This Item Also Viewed</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
export default ProductSection;
