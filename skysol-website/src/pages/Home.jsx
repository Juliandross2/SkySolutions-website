import './styles/Home.css'
import { FaLightbulb, FaRocket, FaUsers, FaArrowRight, FaCode, FaMobile, FaCloud } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <img src="/skysol_logo_slogan.png" alt="Sky Solutions" className="hero-logo" />
          </div>
          <p className="description">
            Diseñamos y desarrollamos soluciones de software y aplicaciones móviles innovadoras, 
            integrando tecnologías emergentes como el Internet de las Cosas.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">
              Contáctanos <FaArrowRight />
            </Link>
            <button className="cta-button secondary" onClick={scrollToServices}>
              Ver Servicios <FaRocket />
            </button>
          </div>
        </div>
        <div className="hero-animation">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
          <div className="floating-element element-4"></div>
          <div className="floating-element element-5"></div>
        </div>
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>¿Por qué Sky Solutions?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaLightbulb />
              </div>
              <h3>Innovación</h3>
              <p>Tecnologías emergentes como IoT para soluciones de vanguardia</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h3>Calidad</h3>
              <p>Productos de alta calidad con enfoque en usabilidad y eficiencia</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Trabajo en Equipo</h3>
              <p>Colaboración y creatividad para transformar ideas en realidad</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-preview">
        <div className="container">
          <h2>Nuestros Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaCode />
              </div>
              <h3>Desarrollo de Software</h3>
              <p>Soluciones personalizadas que resuelven necesidades reales de empresas</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaMobile />
              </div>
              <h3>Aplicaciones Móviles</h3>
              <p>Apps innovadoras con impacto positivo para usuarios y organizaciones</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaCloud />
              </div>
              <h3>Internet de las Cosas (IoT)</h3>
              <p>Integración de tecnologías IoT para un entorno digital mejorado</p>
            </div>
          </div>
          <div className="services-cta">
            <Link to="/contact" className="contact-btn">
              ¿Listo para comenzar? Contáctanos ahora
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;