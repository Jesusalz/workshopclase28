import { useState } from 'react';
import axios from 'axios';

function ProductSearch({ setProducts }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
    setProducts(response.data.products);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar producto"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default ProductSearch;
