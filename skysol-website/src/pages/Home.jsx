import './styles/Home.css'

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Sky Solutions</h1>
          <p>Tu partner tecnológico para soluciones innovadoras</p>
          <button className="cta-button">Conoce nuestros servicios</button>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Innovación</h3>
              <p>Soluciones tecnológicas de vanguardia</p>
            </div>
            <div className="feature-card">
              <h3>Experiencia</h3>
              <p>Años de experiencia en el sector</p>
            </div>
            <div className="feature-card">
              <h3>Soporte 24/7</h3>
              <p>Atención continua para tu tranquilidad</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;