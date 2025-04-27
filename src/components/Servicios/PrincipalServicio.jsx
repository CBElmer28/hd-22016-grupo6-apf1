import React from 'react';
import Navbar from '../Navbar';
import '../../css/Servicios.css';
import servicio1 from '../../assets/Servicio1.jpg';
import servicio2 from '../../assets/Servicio2.jpg';
import servicio3 from '../../assets/Servicio3.jpg';
import servicio4 from '../../assets/Servicio4.jpg';

const Principal = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sección principal */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Nuestros servicios.</h1>
          <p>En Mercedes-Benz, nos esforzamos al máximo para ofrecerte servicios de primera clase para tu automóvil y mucho más.</p>
        </div>
        <div className="hero-image">
          {/* Puedes poner aquí una imagen extra si quieres */}
        </div>
      </section>

      {/* Cards de servicios */}
      <section className="cards-section">
        <div className="card">
          <img src={servicio1} alt="Servicio 1" />
          <h3>Reserva online una cita de servicio</h3>
          <p>Reserva fácilmente citas para mantenimiento, reparaciones y otros servicios en un taller autorizado Mercedes-Benz.</p>
          <button className="btn-primary">Reserva una cita de servicio</button>
        </div>

        <div className="card">
          <img src={servicio2} alt="Servicio 2" />
          <h3>Servicios y reparación</h3>
          <p>Mantenimiento, reparación y garantías: todos los servicios para mantener tu Mercedes-Benz en perfectas condiciones.</p>
          <button className="btn-secondary">Más información</button>
        </div>

        <div className="card">
          <img src={servicio3} alt="Servicio 3" />
          <h3>Asistencia en carretera y en caso de daños</h3>
          <p>Te ayudamos en caso de daños o fallos, con asistencia rápida y soluciones de reparación adecuadas.</p>
          <button className="btn-secondary">Más información</button>
        </div>

        <div className="card">
          <img src={servicio4} alt="Servicio 4" />
          <h3>Contratos de servicio</h3>
          <p>Evita preocupaciones con contratos de servicio para mantenimiento y reparaciones de tu Mercedes-Benz.</p>
          <button className="btn-primary">Comprar online</button>
        </div>
      </section>
    </div>
  );
};

export default Principal;
