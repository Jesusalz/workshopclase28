import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'; // Ajusta la ruta según tu estructura

function LandingPage() {
  return (
    <div className="landing-page">
      <h1 className="landing-title">Bienvenido a la Tienda</h1>
      <p className="landing-text">Por favor, selecciona una de las opciones a continuación:</p>
      <div className="landing-links">
        <Link to="/home" className="btn">Ir a Home</Link>
        <Link to="/products" className="btn">Ver Productos</Link>
      </div>
    </div>
  );
}

export default LandingPage;
