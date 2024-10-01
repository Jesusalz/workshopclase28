import React from 'react';
import ProductSummary from '../components/ProductSummary';

function Home({ products }) {
  
  if (!products || products.length === 0) {
    return <p>No hay productos disponibles</p>; 
  }

  return (
    <div>
      <h1>Home</h1>
      <div className="product-summary-list">
        {products.map((product) => (
          <ProductSummary key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
