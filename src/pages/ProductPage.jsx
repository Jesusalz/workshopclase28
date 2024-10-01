import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

function ProductPage() {
  const [products, setProducts] = useState([]);
  
  
  const API_URL = `${import.meta.env.VITE_API_URL}/products`;


  useEffect(() => {
    
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        return response.json();
      })
      .then((data) => setProducts(data.products)) 
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductPage;
