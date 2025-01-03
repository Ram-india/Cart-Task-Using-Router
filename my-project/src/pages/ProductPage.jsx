import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const ProductPage = ({ addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (

    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-4'>
   
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
         inCart={cartItems.some((item) => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductPage;