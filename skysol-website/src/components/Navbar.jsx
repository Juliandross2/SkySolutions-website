import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './styles/Navbar.css'

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup cuando el componente se desmonta
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const handleServicesClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else {
      window.location.href = '/#services';
    }
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" onClick={handleLinkClick}>
            <h2>Sky Solutions</h2>
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button 
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Botón de cerrar dentro del menú */}
          <li className="navbar-close-container">
            <button 
              className="navbar-close"
              onClick={toggleMenu}
              aria-label="Cerrar menú"
            >
              <FaTimes />
            </button>
          </li>

          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Inicio
            </Link>
          </li>
          <li className="navbar-item">
            <a 
              href="#services" 
              className="navbar-link" 
              onClick={handleServicesClick}
            >
              Servicios
            </a>
          </li>
          <li className="navbar-item">
            <Link 
              to="/about" 
              className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Nosotros
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/contact" 
              className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Overlay para cerrar menú en móvil */}
        {isMenuOpen && <div className="navbar-overlay" onClick={toggleMenu}></div>}
      </div>
    </nav>
  );
};

export default Navbar;