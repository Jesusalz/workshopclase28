import { Link } from 'react-router-dom';

function ProductSummary({ product }) {
  return (
    <div className="product-summary">
      <h2>{product.title}</h2>
      <p>Precio: ${product.price}</p>
      <Link to={`/products/${product.id}`}>Ver Detalles</Link>
    </div>
  );
}

export default ProductSummary;
