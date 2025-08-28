import { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import './styles/Contact.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaSpinner } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const loadingToast = toast.loading('Enviando mensaje...', {
      style: {
        background: '#3b82f6',
        color: 'white',
        fontWeight: '500',
      },
    });

    try {
      // Configurar EmailJS con las variables que coinciden con tu template
      const templateParams = {
        name: formData.name,           
        message: formData.message,     
        time: new Date().toLocaleString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),                            
        email: formData.email,
        company: formData.company,
        service: formData.service
      };

      await emailjs.send(
        'service_kf5r667',      
        'template_pbiauzf',     
        templateParams,
        'xostW5Tumeh3J33e3'      
      );

      toast.success('¡Mensaje enviado exitosamente! Te contactaremos pronto.', {
        id: loadingToast,
        duration: 5000,
        style: {
          background: '#10b981',
          color: 'white',
          fontWeight: '500',
        },
        iconTheme: {
          primary: 'white',
          secondary: '#10b981',
        },
      });
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });

    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al enviar el mensaje. Por favor intenta nuevamente.', {
        id: loadingToast,
        duration: 5000,
        style: {
          background: '#ef4444',
          color: 'white',
          fontWeight: '500',
        },
        iconTheme: {
          primary: 'white',
          secondary: '#ef4444',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="contact">
      {/* Toaster Component */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 4000,
          style: {
            background: '#fff',
            color: '#363636',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            padding: '16px 20px',
            fontSize: '14px',
            maxWidth: '400px',
          },
          success: {
            duration: 5000,
            style: {
              background: '#10b981',
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: '#10b981',
            },
          },
          error: {
            duration: 5000,
            style: {
              background: '#ef4444',
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: '#ef4444',
            },
          },
          loading: {
            style: {
              background: '#3b82f6',
              color: 'white',
            },
            iconTheme: {
              primary: 'white',
              secondary: '#3b82f6',
            },
          },
        }}
      />

      <section className="contact-hero">
        <div className="container">
          <h1>Contáctanos</h1>
          <p>¿Listo para llevar tu negocio al siguiente nivel con Sky Solutions?</p>
          <div className="hero-decoration"></div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              
              <div className="contact-item" data-aos="fade-right" data-aos-delay="100">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <h3>Email</h3>
                <p>info@skysolutions.com</p>
                <p>support@skysolutions.com</p>
              </div>

              <div className="contact-item" data-aos="fade-right" data-aos-delay="200">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <h3>Teléfono</h3>
                <p>+57 (1) 234-5678</p>
                <p>+57 (1) 876-5432</p>
              </div>

              <div className="contact-item" data-aos="fade-right" data-aos-delay="300">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Dirección</h3>
                <p>Calle 123 #45-67</p>
                <p>Bogotá, Colombia</p>
              </div>

              <div className="contact-item" data-aos="fade-right" data-aos-delay="400">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <h3>Horarios</h3>
                <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div className="contact-form-container" data-aos="fade-left">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Envíanos un Mensaje</h2>
                
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa (opcional)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Servicio de Interés</label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="software-development">Desarrollo de Software</option>
                    <option value="mobile-apps">Aplicaciones Móviles</option>
                    <option value="iot-solutions">Internet de las Cosas (IoT)</option>
                    <option value="consulting">Consultoría Tecnológica</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? <FaSpinner className="spinning" /> : <FaPaperPlane />}
                  {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
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