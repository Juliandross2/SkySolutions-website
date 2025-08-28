import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa'
import './styles/Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else {
      window.location.href = '/#services';
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contenido principal del footer */}
        <div className="footer-content">
          {/* Información de la empresa */}
          <div className="footer-section">
            <div className="footer-brand">
              <h3>Sky Solutions</h3>
              <p>Connecting ideas, creating solutions</p>
            </div>
            <p className="footer-description">
              Diseñamos y desarrollamos soluciones de software innovadoras, 
              integrando tecnologías emergentes para resolver necesidades 
              reales de empresas y usuarios.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com/skysolutions" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/skysolutions" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/company/skysolutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/skysolutions" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <a href="#services" onClick={handleServicesClick}>Servicios</a>
              </li>
              <li>
                <Link to="/about">Nosotros</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li>
                <a href="#services" onClick={handleServicesClick}>Desarrollo de Software</a>
              </li>
              <li>
                <a href="#services" onClick={handleServicesClick}>Aplicaciones Móviles</a>
              </li>
              <li>
                <a href="#services" onClick={handleServicesClick}>Internet de las Cosas</a>
              </li>
              <li>
                <a href="#services" onClick={handleServicesClick}>Consultoría Tecnológica</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Separador */}
        <div className="footer-divider"></div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2025 Sky Solutions. Todos los derechos reservados.</p>
          </div>
          <div className="footer-legal">
            <Link to="/privacy-policy">Política de Privacidad</Link>
            <Link to="/terms-of-service">Términos de Servicio</Link>
          </div>
        </div>

        {/* Botón scroll to top */}
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Volver arriba">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;