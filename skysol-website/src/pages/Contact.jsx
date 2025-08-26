import './styles/Contact.css'

const Contact = () => {
  return (
    <main className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Contáctanos</h1>
          <p>¿Listo para llevar tu negocio al siguiente nivel?</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              
              <div className="contact-item">
                <h3>📧 Email</h3>
                <p>info@skysolutions.com</p>
                <p>support@skysolutions.com</p>
              </div>

              <div className="contact-item">
                <h3>📞 Teléfono</h3>
                <p>+57 (1) 234-5678</p>
                <p>+57 (1) 876-5432</p>
              </div>

              <div className="contact-item">
                <h3>📍 Dirección</h3>
                <p>Calle 123 #45-67</p>
                <p>Bogotá, Colombia</p>
              </div>

              <div className="contact-item">
                <h3>🕒 Horarios</h3>
                <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form">
                <h2>Envíanos un Mensaje</h2>
                
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input type="text" id="company" name="company" />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Servicio de Interés</label>
                  <select id="service" name="service">
                    <option value="">Selecciona un servicio</option>
                    <option value="web-development">Desarrollo Web</option>
                    <option value="mobile-apps">Aplicaciones Móviles</option>
                    <option value="cloud-services">Servicios en la Nube</option>
                    <option value="consulting">Consultoría IT</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;