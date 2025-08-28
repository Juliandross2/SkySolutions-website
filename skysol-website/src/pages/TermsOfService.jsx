import './styles/Legal.css'

const TermsOfService = () => {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <h1>Términos y Condiciones</h1>
          <p>Última actualización: 28 de agosto de 2025</p>
          <div className="hero-decoration"></div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-document">
            
            <div className="legal-section">
              <h2>1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar los servicios de Sky Solutions, usted acepta estar sujeto a estos 
                términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, 
                no debe utilizar nuestros servicios.
              </p>
            </div>

            <div className="legal-section">
              <h2>2. Descripción de los Servicios</h2>
              <p>Sky Solutions proporciona los siguientes servicios:</p>
              <ul>
                <li>Desarrollo de software personalizado</li>
                <li>Desarrollo de aplicaciones móviles</li>
                <li>Soluciones de Internet de las Cosas (IoT)</li>
                <li>Consultoría tecnológica</li>
                <li>Mantenimiento y soporte técnico</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>3. Responsabilidades del Cliente</h2>
              <p>El cliente se compromete a:</p>
              <ul>
                <li>Proporcionar información precisa y completa sobre los requisitos del proyecto</li>
                <li>Realizar los pagos según los términos acordados</li>
                <li>Proporcionar acceso necesario a sistemas y recursos cuando sea requerido</li>
                <li>Revisar y aprobar entregables en los tiempos establecidos</li>
                <li>Mantener la confidencialidad de información sensible compartida</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>4. Responsabilidades de Sky Solutions</h2>
              <p>Sky Solutions se compromete a:</p>
              <ul>
                <li>Entregar los productos y servicios según las especificaciones acordadas</li>
                <li>Cumplir con los plazos establecidos en el cronograma del proyecto</li>
                <li>Mantener la confidencialidad de la información del cliente</li>
                <li>Proporcionar soporte técnico según lo acordado</li>
                <li>Seguir las mejores prácticas de desarrollo y seguridad</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>5. Propiedad Intelectual</h2>
              <p>
                Los derechos de propiedad intelectual del software desarrollado serán transferidos 
                al cliente una vez completado el pago total del proyecto, salvo que se acuerde lo 
                contrario por escrito. Sky Solutions conserva los derechos sobre metodologías, 
                herramientas y conocimientos generales utilizados en el desarrollo.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. Confidencialidad</h2>
              <p>
                Ambas partes se comprometen a mantener la confidencialidad de toda información 
                propietaria, técnica o comercial compartida durante la relación contractual. 
                Esta obligación permanecerá en vigor incluso después de la terminación del contrato.
              </p>
            </div>

            <div className="legal-section">
              <h2>7. Limitación de Responsabilidad</h2>
              <p>
                Sky Solutions no será responsable por daños indirectos, incidentales, especiales 
                o consecuentes que resulten del uso de nuestros servicios. Nuestra responsabilidad 
                total no excederá el monto pagado por los servicios específicos.
              </p>
            </div>

            <div className="legal-section">
              <h2>8. Modificaciones de los Términos</h2>
              <p>
                Sky Solutions se reserva el derecho de modificar estos términos en cualquier momento. 
                Las modificaciones entrarán en vigor inmediatamente después de su publicación en 
                nuestro sitio web. Es responsabilidad del cliente revisar periódicamente estos términos.
              </p>
            </div>

            <div className="legal-section">
              <h2>9. Terminación</h2>
              <p>
                Cualquiera de las partes puede terminar el contrato con un aviso previo por escrito 
                de 30 días. En caso de terminación, el cliente pagará por todos los servicios 
                completados hasta la fecha de terminación.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. Ley Aplicable</h2>
              <p>
                Estos términos se regirán e interpretarán de acuerdo con las leyes de Colombia. 
                Cualquier disputa será resuelta en los tribunales competentes de Bogotá, Colombia.
              </p>
            </div>

            <div className="legal-section">
              <h2>11. Contacto</h2>
              <p>
                Para preguntas sobre estos términos y condiciones, puede contactarnos en:
              </p>
              <div className="contact-info">
                <p><strong>Email:</strong> legal@skysolutions.com</p>
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

export default TermsOfService;