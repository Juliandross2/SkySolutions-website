import './styles/Legal.css'

const PrivacyPolicy = () => {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <h1>Política de Privacidad</h1>
          <p>Última actualización: 28 de agosto de 2025</p>
          <div className="hero-decoration"></div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-document">
            
            <div className="legal-section">
              <h2>1. Información que Recopilamos</h2>
              <p>En Sky Solutions recopilamos la siguiente información:</p>
              <ul>
                <li><strong>Información personal:</strong> Nombre, email, teléfono, empresa</li>
                <li><strong>Información del proyecto:</strong> Requisitos, especificaciones técnicas</li>
                <li><strong>Información de uso:</strong> Datos de navegación en nuestro sitio web</li>
                <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, sistema operativo</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>2. Cómo Utilizamos su Información</h2>
              <p>Utilizamos su información para:</p>
              <ul>
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Comunicarnos con usted sobre proyectos y servicios</li>
                <li>Procesar pagos y transacciones</li>
                <li>Enviar actualizaciones y material promocional (con su consentimiento)</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Analizar el uso de nuestro sitio web para mejorarlo</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>3. Compartir Información</h2>
              <p>
                No vendemos, alquilamos o compartimos su información personal con terceros, 
                excepto en las siguientes circunstancias:
              </p>
              <ul>
                <li>Con su consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales</li>
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>En caso de fusión, adquisición o venta de activos</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>4. Seguridad de los Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas, físicas y administrativas para 
                proteger su información personal contra acceso no autorizado, alteración, 
                divulgación o destrucción, incluyendo:
              </p>
              <ul>
                <li>Encriptación de datos sensibles</li>
                <li>Acceso restringido a información personal</li>
                <li>Monitoreo regular de nuestros sistemas</li>
                <li>Capacitación en seguridad para nuestro personal</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>5. Retención de Datos</h2>
              <p>
                Conservamos su información personal solo durante el tiempo necesario para 
                cumplir con los propósitos descritos en esta política, a menos que la ley 
                requiera un período de retención más largo. Generalmente:
              </p>
              <ul>
                <li>Información de proyectos: 7 años después de la finalización</li>
                <li>Información de contacto: Hasta que solicite su eliminación</li>
                <li>Datos de navegación: 2 años</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>6. Sus Derechos</h2>
              <p>Usted tiene derecho a:</p>
              <ul>
                <li>Acceder a su información personal que tenemos</li>
                <li>Solicitar la corrección de información inexacta</li>
                <li>Solicitar la eliminación de su información personal</li>
                <li>Oponerse al procesamiento de su información</li>
                <li>Solicitar la portabilidad de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>7. Cookies y Tecnologías Similares</h2>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en 
                nuestro sitio web. Las cookies nos ayudan a:
              </p>
              <ul>
                <li>Recordar sus preferencias</li>
                <li>Analizar el tráfico del sitio web</li>
                <li>Personalizar contenido</li>
                <li>Mejorar la funcionalidad del sitio</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>8. Transferencias Internacionales</h2>
              <p>
                Su información puede ser transferida y procesada en países diferentes al suyo. 
                Nos aseguraremos de que dichas transferencias cumplan con las leyes de 
                protección de datos aplicables.
              </p>
            </div>

            <div className="legal-section">
              <h2>9. Cambios en esta Política</h2>
              <p>
                Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos 
                sobre cambios importantes por email o mediante un aviso en nuestro sitio web. 
                Le recomendamos revisar esta política periódicamente.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. Contacto</h2>
              <p>
                Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos, 
                puede contactarnos:
              </p>
              <div className="contact-info">
                <p><strong>Email:</strong> privacy@skysolutions.com</p>
                <p><strong>Teléfono:</strong> +57 (1) 234-5678</p>
                <p><strong>Dirección:</strong> Calle 123 #45-67, Bogotá, Colombia</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;