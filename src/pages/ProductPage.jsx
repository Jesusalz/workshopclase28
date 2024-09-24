// src/pages/ProductPage.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    const fetchProducts = async () => {
      const endpoint = query
        ? `https://dummyjson.com/products/search?q=${query}`
        : 'https://dummyjson.com/products';
      const response = await fetch(endpoint);
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;

