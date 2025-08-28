import './styles/About.css'
import { FaBalanceScale, FaClock, FaGem, FaHandshake, FaCode, FaFileAlt, FaCheckCircle, FaLightbulb } from 'react-icons/fa'
import { BsPersonCircle } from 'react-icons/bs'
import { useState } from 'react'

const About = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (memberName) => {
    setImageErrors(prev => ({
      ...prev,
      [memberName]: true
    }));
  };

  return (
    <main className="about">
      <section className="about-hero">
        <div className="container">
          <h1 className="hero-title">Sobre Sky Solutions</h1>
          <p className="hero-subtitle">Connecting ideas, creating solutions</p>
          <div className="hero-decoration"></div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mission-card" data-aos="fade-right">
              <h2>Nuestra Misión</h2>
              <p>
                En Sky Solutions nos dedicamos a diseñar y desarrollar soluciones de software 
                y aplicaciones móviles innovadoras, integrando tecnologías emergentes como el 
                Internet de las Cosas para resolver necesidades reales de empresas y usuarios. 
                Nuestro compromiso es entregar productos de alta calidad, con enfoque en la 
                usabilidad, la eficiencia y el impacto positivo.
              </p>
            </div>
            <div className="vision-card" data-aos="fade-left">
              <h2>Nuestra Visión</h2>
              <p>
                En Sky Solutions buscamos crear soluciones tecnológicas que perduren en el tiempo, 
                aportando valor y calidad a personas y organizaciones, impulsando el desarrollo 
                sostenible y facilitando la integración de nuevas tecnologías para mejorar la 
                vida y el entorno digital de todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card" data-aos="fade-up" data-aos-delay="100">
              <div className="value-icon">
                <FaBalanceScale />
              </div>
              <h3>Ética</h3>
              <p>Actuar siempre de acuerdo con lo correcto desde el punto de vista moral y profesional</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="200">
              <div className="value-icon">
                <FaClock />
              </div>
              <h3>Puntualidad</h3>
              <p>Compromiso de respetar horarios y cumplir con entregas acordadas</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="300">
              <div className="value-icon">
                <FaGem />
              </div>
              <h3>Calidad</h3>
              <p>Garantizar productos y servicios que cumplan con altos estándares de excelencia</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="400">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Trabajo en Equipo</h3>
              <p>Fomentar la integración y colaboración para alcanzar mejores resultados</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2 className="section-title">Nuestro Equipo</h2>
          <div className="team-grid">
            <div className="team-member" data-aos="zoom-in" data-aos-delay="100">
              <div className="member-photo">
                {!imageErrors.julian ? (
                  <img 
                    src="/juliancito.jpg" 
                    alt="Julián Alejandro Muñoz Pérez" 
                    onError={() => handleImageError('julian')}
                  />
                ) : (
                  <BsPersonCircle />
                )}
              </div>
              <h3>Julián Alejandro Muñoz Pérez</h3>
              <p>Líder del Proyecto</p>
              <span>Coordinación y supervisión del equipo</span>
            </div>
            <div className="team-member" data-aos="zoom-in" data-aos-delay="200">
              <div className="member-photo">
                {!imageErrors.jorge ? (
                  <img 
                    src="/jorgito.jpg" 
                    alt="Jorge Andrés Martínez Varón" 
                    onError={() => handleImageError('jorge')}
                  />
                ) : (
                  <BsPersonCircle />
                )}
              </div>
              <h3>Jorge Andrés Martínez Varón</h3>
              <p>Secretario</p>
              <span>Gestión documental y comunicación</span>
            </div>
            <div className="team-member" data-aos="zoom-in" data-aos-delay="300">
              <div className="member-photo">
                <BsPersonCircle />
              </div>
              <h3>Santiago Alexander Dorado Gómez</h3>
              <p>Moderador</p>
              <span>Coordinación de reuniones y comunicación</span>
            </div>
            <div className="team-member" data-aos="zoom-in" data-aos-delay="400">
              <div className="member-photo">
                <BsPersonCircle />
              </div>
              <h3>Freddy Daniel Botia Calle</h3>
              <p>Interventor del Proyecto</p>
              <span>Supervisión de calidad y cumplimiento</span>
            </div>
            <div className="team-member" data-aos="zoom-in" data-aos-delay="500">
              <div className="member-photo">
                <BsPersonCircle />
              </div>
              <h3>Brayan Estiven Benavides Murcia</h3>
              <p>Web Master</p>
              <span>Desarrollo web y interfaces móviles</span>
            </div>
          </div>
        </div>
      </section>

      <section className="objectives">
        <div className="container">
          <h2 className="section-title">Nuestros Objetivos</h2>
          <div className="objectives-list">
            <div className="objective-item" data-aos="slide-right" data-aos-delay="100">
              <span className="objective-number">
                <FaCode />
              </span>
              <p>Brindar un producto de calidad y sostenible</p>
            </div>
            <div className="objective-item" data-aos="slide-right" data-aos-delay="200">
              <span className="objective-number">
                <FaFileAlt />
              </span>
              <p>Mantener estándares de documentación y buenas prácticas</p>
            </div>
            <div className="objective-item" data-aos="slide-right" data-aos-delay="300">
              <span className="objective-number">
                <FaCheckCircle />
              </span>
              <p>Cumplir compromisos con calidad y puntualidad</p>
            </div>
            <div className="objective-item" data-aos="slide-right" data-aos-delay="400">
              <span className="objective-number">
                <FaLightbulb />
              </span>
              <p>Fomentar creatividad e innovación tecnológica</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;