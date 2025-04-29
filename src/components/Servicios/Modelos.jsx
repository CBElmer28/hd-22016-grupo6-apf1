import React from 'react';
import '../../css/Modelos.css';
import ClaseABerlina from '../../assets/modelos/ClaseABerlina.avif';
import CLARojo from '../../assets/modelos/CLARojo.avif';
import CLAVerde from '../../assets/modelos/CLAVerde.avif';
import ClaseCBerlina from '../../assets/modelos/ClaseCBerlina.avif';
import ClaseEQEBerlina from '../../assets/modelos/ClaseEQEBerlina.avif';
import ClaseEQSBerlina from '../../assets/modelos/ClaseEQSBerlina.avif';
import ClaseEBerlina from '../../assets/modelos/ClaseEBerlina.avif';
import ClaseS from '../../assets/modelos/ClaseS.avif';
import ClaseSLarga from '../../assets/modelos/ClaseSLarga.avif';
import ClaseEQA from '../../assets/modelos/ClaseEQA.avif';
import ClaseEQB from '../../assets/modelos/ClaseEQB.avif';
import ClaseEQESuv from '../../assets/modelos/ClaseEQESuv.avif';
import ClaseCLAShootingBrake from '../../assets/modelos/ClaseSLAShootingBrake.avif';
import ClaseCState from '../../assets/modelos/ClaseCState.avif';
import ClaseACompacto from '../../assets/modelos/ClaseACompacto.avif';
import ClaseBCompacto from '../../assets/modelos/ClaseBCompacto.avif';

const modelos = [
  {
    nombre: 'Clase A Berlina',
    etiquetas: ['Híbrido'],
    imagen: ClaseABerlina, // sin comillas
    precio: '39.904,57 €',
    disponible: true,
    categoria: 'Berlina',
  },
  {
    nombre: 'CLA',
    etiquetas: ['Nuevo', 'Eléctrico'],
    imagen: CLARojo, // sin comillas
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'CLA',
    etiquetas: ['Nuevo'],
    imagen: CLAVerde,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase C Berlina',
    etiquetas: ['Híbrido'],
    imagen: ClaseCBerlina,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase EQE Berlina',
    etiquetas: ['Eléctrico'],
    imagen: ClaseEQEBerlina,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase EQS Berlina',
    etiquetas: ['Eléctrico'],
    imagen: ClaseEQSBerlina,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase E Berlina',
    etiquetas: ['Híbrido'],
    imagen: ClaseEBerlina,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase S',
    etiquetas: ['Híbrido'],
    imagen: ClaseS,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase S Larga',
    etiquetas: ['Híbrido'],
    imagen: ClaseSLarga,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Berlina',
  },
  {
    nombre: 'Clase EQA',
    etiquetas: ['Híbrido'],
    imagen: ClaseEQA,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'SUV',
  },
  {
    nombre: 'Clase EQB',
    etiquetas: ['Híbrido'],
    imagen: ClaseEQB,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'SUV',
  },
  {
    nombre: 'Clase EQE Suv',
    etiquetas: ['Híbrido'],
    imagen: ClaseEQESuv,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'SUV',
  },
  {
    nombre: 'Clase CLA Shooting Brake',
    etiquetas: ['Híbrido'],
    imagen: ClaseCLAShootingBrake,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'SUV',
  },
  {
    nombre: 'Clase C State',
    etiquetas: ['Híbrido'],
    imagen: ClaseCState,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Estate',
  },
  {
    nombre: 'Clase A Compacto',
    etiquetas: ['Híbrido'],
    imagen: ClaseACompacto,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Compacto',
  },
  {
    nombre: 'Clase B Compacto',
    etiquetas: ['Híbrido'],
    imagen: ClaseBCompacto,
    precio: 'Disponible próximamente',
    disponible: false,
    categoria: 'Compacto',
  },
  // Agrega más modelos si quieres
];

function Modelos() {
  return (
    <div className="modelos-container">
      <h1 className="titulo">Nuestros modelos</h1>
      <p className="descripcion">
        Descubre nuestro diverso mundo de marcas y modelos: Aquí encontrarás tu vehículo deseado.
      </p>

      <div className="botones-marcas">
        <button>Mercedes-Benz</button>
        <button>AMG</button>
        <button>Maybach</button>
      </div>

      <h2 className="subtitulo">Berlina</h2>

      <div className="modelos-grid">
        {modelos
          .filter(modelo => modelo.categoria === 'Berlina')
          .map((modelo, index) => (
            <div key={index} className="modelo-card">
              <h3>{modelo.nombre}</h3>

              <div className="etiquetas">
                {modelo.etiquetas.map((etiqueta, i) => (
                  <span key={i} className={`etiqueta ${etiqueta.toLowerCase()}`}>
                    {etiqueta}
                  </span>
                ))}
              </div>

              <img src={modelo.imagen} alt={modelo.nombre} className="modelo-imagen" />

              <p className="precio">
                {modelo.disponible ? (
                  <>
                    <span>Desde</span> <strong>{modelo.precio}</strong>
                  </>
                ) : (
                  modelo.precio
                )}
              </p>
            </div>
          ))}
      </div>

      <h2 className="subtitulo">SUV & Todoterreno</h2>

      <div className="modelos-grid">
        {modelos
          .filter(modelo => modelo.categoria === 'SUV')
          .map((modelo, index) => (
            <div key={index} className="modelo-card">
              <h3>{modelo.nombre}</h3>

              <div className="etiquetas">
                {modelo.etiquetas.map((etiqueta, i) => (
                  <span key={i} className={`etiqueta ${etiqueta.toLowerCase()}`}>
                    {etiqueta}
                  </span>
                ))}
              </div>

              <img src={modelo.imagen} alt={modelo.nombre} className="modelo-imagen" />

              <p className="precio">
                {modelo.disponible ? (
                  <>
                    <span>Desde</span> <strong>{modelo.precio}</strong>
                  </>
                ) : (
                  modelo.precio
                )}
              </p>
            </div>
          ))}
      </div>

      <h2 className="subtitulo">Estate</h2>

      <div className="modelos-grid">
        {modelos
          .filter(modelo => modelo.categoria === 'Estate')
          .map((modelo, index) => (
            <div key={index} className="modelo-card">
              <h3>{modelo.nombre}</h3>

              <div className="etiquetas">
                {modelo.etiquetas.map((etiqueta, i) => (
                  <span key={i} className={`etiqueta ${etiqueta.toLowerCase()}`}>
                    {etiqueta}
                  </span>
                ))}
              </div>

              <img src={modelo.imagen} alt={modelo.nombre} className="modelo-imagen" />

              <p className="precio">
                {modelo.disponible ? (
                  <>
                    <span>Desde</span> <strong>{modelo.precio}</strong>
                  </>
                ) : (
                  modelo.precio
                )}
              </p>
            </div>
          ))}
      </div>

      <h2 className="subtitulo">Compacto</h2>

      <div className="modelos-grid">
        {modelos
          .filter(modelo => modelo.categoria === 'Compacto')
          .map((modelo, index) => (
            <div key={index} className="modelo-card">
              <h3>{modelo.nombre}</h3>

              <div className="etiquetas">
                {modelo.etiquetas.map((etiqueta, i) => (
                  <span key={i} className={`etiqueta ${etiqueta.toLowerCase()}`}>
                    {etiqueta}
                  </span>
                ))}
              </div>

              <img src={modelo.imagen} alt={modelo.nombre} className="modelo-imagen" />

              <p className="precio">
                {modelo.disponible ? (
                  <>
                    <span>Desde</span> <strong>{modelo.precio}</strong>
                  </>
                ) : (
                  modelo.precio
                )}
              </p>
            </div>
          ))}
      </div>

      <h2 className="subtitulo">Coupé</h2>

      <div className="modelos-grid">
        {modelos
          .filter(modelo => modelo.categoria === 'Coupé')
          .map((modelo, index) => (
            <div key={index} className="modelo-card">
              <h3>{modelo.nombre}</h3>

              <div className="etiquetas">
                {modelo.etiquetas.map((etiqueta, i) => (
                  <span key={i} className={`etiqueta ${etiqueta.toLowerCase()}`}>
                    {etiqueta}
                  </span>
                ))}
              </div>

              <img src={modelo.imagen} alt={modelo.nombre} className="modelo-imagen" />

              <p className="precio">
                {modelo.disponible ? (
                  <>
                    <span>Desde</span> <strong>{modelo.precio}</strong>
                  </>
                ) : (
                  modelo.precio
                )}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Modelos;
