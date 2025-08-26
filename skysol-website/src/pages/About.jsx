import './styles/About.css'

const About = () => {
  return (
    <main className="about">
      <section className="about-hero">
        <div className="container">
          <h1>Sobre Sky Solutions</h1>
          <p>Innovando el futuro tecnológico desde 2020</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Nuestra Historia</h2>
              <p>
                Sky Solutions nació con la visión de transformar el panorama tecnológico 
                empresarial. Somos una empresa comprometida con la innovación y la excelencia 
                en cada proyecto que emprendemos.
              </p>
              <p>
                Nuestro equipo de expertos combina años de experiencia con las últimas 
                tendencias tecnológicas para ofrecer soluciones que impulsan el crecimiento 
                de nuestros clientes.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <h3>100+</h3>
                <p>Proyectos Completados</p>
              </div>
              <div className="stat-card">
                <h3>50+</h3>
                <p>Clientes Satisfechos</p>
              </div>
              <div className="stat-card">
                <h3>5+</h3>
                <p>Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Nuestro Equipo</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Juan Pérez</h3>
              <p>CEO & Fundador</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>María García</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Carlos López</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;