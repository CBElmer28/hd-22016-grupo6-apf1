import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Servicios/PrincipalServicio';
import Modelos from './components/Servicios/Modelos';
import Servicios from './components/Servicios/PrincipalServicio';
// import Marca from './components/Servicios/Marca'; // Necesitarás crear este componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/services" element={<Servicios />} />
        {/* <Route path="/marca" element={<Marca />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
