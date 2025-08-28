import { Link, useLocation } from 'react-router-dom'
import './styles/Navbar.css'

const Navbar = () => {
  const location = useLocation();

  const handleServicesClick = (e) => {
    if (location.pathname === '/') {
      // Si estamos en home, hacer scroll a la sección
      e.preventDefault();
      document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else {
      // Si estamos en otra página, ir a home y luego hacer scroll
      window.location.href = '/#services';
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">
            <h2>Sky Solutions</h2>
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Inicio</Link>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link" onClick={handleServicesClick}>
              Servicios
            </a>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">Nosotros</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;