
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products/search?q=${searchTerm}`);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
      <form onSubmit={handleSearch} className="ml-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="p-2 rounded-lg"
        />
        <button type="submit" className="p-2 ml-2 bg-blue-500 rounded-lg">
          Search
        </button>
      </form>
    </nav>
  );
}

export default NavBar;
