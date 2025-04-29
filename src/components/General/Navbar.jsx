import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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

  // Estilo activo para NavLink
  const activeStyle = {
    color: '#0072c8',
    fontWeight: '600',
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
              <NavLink to="/modelos" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Modelos
              </NavLink>
              <NavLink to="/comprar" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Comprar
              </NavLink>
              <NavLink
                to="/servicios"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Servicios
              </NavLink>
              <NavLink to="/marca" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Marca
              </NavLink>
            </>
          )}
        </div>

        {/* Logo centrado */}
        <div className="navbar-center">
          <NavLink to="/">
            <img src={logo} alt="Zentauri Quead Logo" className="navbar-logo" />
          </NavLink>
        </div>

        {/* Parte derecha - Iconos y login */}
        <div className="navbar-right">
          {!isMobile && (
            <NavLink
              to="/proveedor"
              style={({ isActive }) => ({
                color: 'white',
                textDecoration: 'none',
                ...(isActive && activeStyle),
              })}
            >
              Proveedor
            </NavLink>
          )}
          <NavLink to="/buscar" className="icon-link">
            <FaSearch className="icon" />
          </NavLink>
          <NavLink to="/favoritos" className="icon-link">
            <FaStar className="icon" />
          </NavLink>
          <NavLink
            to="/login"
            className="login-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaUser className="icon" /> {!isMobile && 'Iniciar sesión'}
          </NavLink>
        </div>
      </nav>

      {/* Menú desplegable solo en móvil */}
      {isMobile && (
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <NavLink
              to="/modelos"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
            >
              Modelos
            </NavLink>
            <NavLink
              to="/comprar"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
            >
              Comprar
            </NavLink>
            <NavLink
              to="/servicios"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
            >
              Servicios
            </NavLink>
            <NavLink
              to="/marca"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
            >
              Marca
            </NavLink>
            <NavLink
              to="/proveedor"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
            >
              Proveedor
            </NavLink>
            <div className="mobile-icons">
              <NavLink to="/buscar" onClick={toggleMenu} className="icon-link">
                <FaSearch className="icon" />
              </NavLink>
              <NavLink to="/favoritos" onClick={toggleMenu} className="icon-link">
                <FaStar className="icon" />
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
