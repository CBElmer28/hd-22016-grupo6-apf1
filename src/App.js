import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SobreNosotros from './SobreNosotros'; // Importa tu página nueva

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Inicio</Link> | <Link to="/sobre-nosotros">Sobre Nosotros</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </Router>
  );
}

export default App;
