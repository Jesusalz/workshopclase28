import { Link } from 'react-router-dom';

function ProductList({ products }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <li key={product.id} className="border rounded-lg p-4 shadow">
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded" />
            <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
