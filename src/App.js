import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/General/Navbar';
import Footer from './components/General/Footer';
import Home from './components/Servicios/PrincipalServicio';
import Modelos from './components/Servicios/Modelos';
import Servicios from './components/Servicios/PrincipalServicio';
// import Marca from './components/Servicios/Marca'; // Necesitarás crear este componente

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<Servicios />} />
        <Route path="/marca" element={<Marca />} />
        <Route path="/proveedor" element={<Proveedor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
