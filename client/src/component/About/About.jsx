import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <Link to='/'>Volver a la página de inicio</Link>
      <h2>Acerca de PC-MARKET</h2>

      <section>
        <h3>Nuestra Historia</h3>
        <p>
          {/* Contenido de la historia */}
        </p>
      </section>

      <section>
        <h3>Nuestros Productos</h3>
        <p>
          {/* Contenido de los productos */}
        </p>
      </section>

      <section>
        <h3>Únete a Nuestra Historia</h3>
        <p>
          {/* Contenido para unirse a la historia */}
        </p>
      </section>

      <Link to="/navbar">Volver a la Barra de Navegación</Link>
    </div>
  );
}

export default About;
