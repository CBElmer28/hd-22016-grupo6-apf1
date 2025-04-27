import React from 'react';
import '../css/Navbar.css';
import logo from '../assets/logo2.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#">Modelos</a>
        <a href="#">Comprar</a>
        <a href="#">Servicios</a>
        <a href="#">Marca</a>
      </div>
      <div className="navbar-center">
        <img src={logo} alt="Mercedes Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <a href="#">Proveedor</a>
        <i className="fas fa-search icon"></i>
        <i className="fas fa-star icon"></i>
        <i className="fas fa-user-circle icon"></i>
        <a href="#">Iniciar sesión</a>
      </div>
    </nav>
  );
};

export default Navbar;
