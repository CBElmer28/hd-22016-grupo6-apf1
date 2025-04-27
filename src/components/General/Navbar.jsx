import React, { useState, useEffect } from 'react';
import '../../css/Navbar.css';
import logo from '../../assets/logo2.png';
import { FaSearch, FaStar, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar cambio de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Ejecutar al montar y al cambiar tamaño
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        {/* Parte izquierda - Menú hamburguesa solo en móvil */}
        <div className="navbar-left">
          {isMobile && (
            <button className="hamburger" onClick={toggleMenu} aria-label="Menú">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}

          {/* Items normales en desktop */}
          {!isMobile && (
            <>
              <a href="#">Modelos</a>
              <a href="#">Comprar</a>
              <a href="#">Servicios</a>
              <a href="#">Marca</a>
            </>
          )}
        </div>

        {/* Logo centrado */}
        <div className="navbar-center">
          <img src={logo} alt="Zentauri Quead Logo" className="navbar-logo" />
        </div>

        {/* Parte derecha - Iconos y login */}
        <div className="navbar-right">
          {!isMobile && <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Proveedor</a>}
          <FaSearch className="icon" />
          <FaStar className="icon" />
          <a href="#" className="login-link">
            <FaUser className="icon" /> {!isMobile && "Iniciar sesión"}
          </a>
        </div>
      </nav>

      {/* Menú desplegable solo en móvil */}
      {isMobile && (
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <a href="#" onClick={toggleMenu}>Modelos</a>
            <a href="#" onClick={toggleMenu}>Comprar</a>
            <a href="#" onClick={toggleMenu}>Servicios</a>
            <a href="#" onClick={toggleMenu}>Marca</a>
            <a href="#" onClick={toggleMenu}>Proveedor</a>
            <div className="mobile-icons">
              <FaSearch className="icon" />
              <FaStar className="icon" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;