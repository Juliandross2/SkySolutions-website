// filepath: src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

const Navbar = () => {
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
            <Link to="/services" className="navbar-link">Servicios</Link>
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