import React from 'react';
import ProductSummary from './ProductSummary';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductSummary key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
