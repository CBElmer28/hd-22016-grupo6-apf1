import React from 'react';
import { Container, Card, Form, Row, Col, InputGroup, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import modelocompra from '../../assets/modelocompra.jpg';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';

const MercedesSearchForm = () => {
  return (
    <>
      <Navbar />
      <Container className="px-0 my-0">
        {/* Sección Promocional con texto superpuesto directamente sobre la imagen */}
        <Card
          className="mb-4 border-0 p-0 overflow-hidden"
          style={{ height: '700px', position: 'relative', width: '100vw', left: '-15vw' }}
        >
          {/* Imagen de fondo */}
          <Image
            src={modelocompra}
            alt="Vehículo premium de ocasión"
            className="w-100 h-100 object-fit-cover"
            style={{ position: 'absolute', top: 0, left: 0 }}
          />

          {/* Capa de superposición con texto */}
          <div
            className="position-absolute w-100 h-100 d-flex align-items-center"
            style={{
              background:
                'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
              padding: '3rem',
              zIndex: 2, // Asegura que esté sobre la imagen
              top: 0,
              left: 0,
            }}
          >
            <div className="text-white" style={{ maxWidth: '600px' }}>
              <h1 className="mb-4" style={{ fontWeight: '600', fontSize: '2.5rem' }}>
                Nuestros vehículos premium de ocasión
              </h1>

              <ul className="list-unstyled mb-4" style={{ fontSize: '1.2rem' }}>
                <li className="mb-3 d-flex align-items-center">
                  <span className="me-2" style={{ fontSize: '1.5rem' }}>
                    ✓
                  </span>
                  <span>2 años de garantía [1]</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="me-2" style={{ fontSize: '1.5rem' }}>
                    ✓
                  </span>
                  <span>Vehículos matriculados en 2024</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="me-2" style={{ fontSize: '1.5rem' }}>
                    ✓
                  </span>
                  <span>Cargador gratis para híbridos y eléctricos.</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="me-2" style={{ fontSize: '1.5rem' }}>
                    ✓
                  </span>
                  <span>Entrega inmediata</span>
                </li>
              </ul>

              <small className="text-white-50" style={{ fontSize: '0.9rem' }}>
                [1] Oferta sujeta a financiación con Zentauri Quead Services.
              </small>
            </div>
          </div>
        </Card>

        {/* Resto del formulario (se mantiene igual) */}
        <Card className="p-3 shadow-sm border-0 bg-light w-100">
          <h1
            className="text-center mb-0"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
            }}
          >
            Encuentra tu Zentauri Quead Certified de ocasión ahora
          </h1>
        </Card>

        {/* Subcontenedor Fusionado (2 y 3) */}
        <Card className="p-0 shadow-sm">
          <Row className="g-0">
            {' '}
            {/* g-0 elimina el espacio entre columnas */}
            {/* Sección principal (2/3) */}
            <Col lg={8} className="p-4">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Modelos</strong>
                    </Form.Label>
                    <InputGroup>
                      <Form.Select>
                        <option value="">Cualquiera</option>
                        <option value="A-Class">Mercedes-Benz A-Class</option>
                        <option value="B-Class">Mercedes-Benz B-Class</option>
                        <option value="C-Class">Mercedes-Benz C-Class</option>
                        <option value="E-Class">Mercedes-Benz E-Class</option>
                        <option value="S-Class">Mercedes-Benz S-Class</option>
                        <option value="GLA">Mercedes-Benz GLA</option>
                        <option value="GLC">Mercedes-Benz GLC</option>
                        <option value="GLE">Mercedes-Benz GLE</option>
                        <option value="GLS">Mercedes-Benz GLS</option>
                        <option value="G-Class">Mercedes-Benz G-Class</option>
                        <option value="EQB">Mercedes-Benz EQB</option>
                        <option value="EQC">Mercedes-Benz EQC</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Carrocería</strong>
                    </Form.Label>
                    <InputGroup>
                      <Form.Select>
                        <option value="">Cualquiera</option>
                        <option value="sedan">Sedán</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="suv">SUV</option>
                        <option value="pickup">Pickup</option>
                        <option value="coupe">Coupé</option>
                        <option value="convertible">Convertible</option>
                        <option value="furgoneta">Furgoneta</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Kilometraje</strong>
                    </Form.Label>
                    <InputGroup>
                      <Form.Select>
                        <option value="">Cualquiera km</option>
                        <option value="5000">Hasta 5,000 km</option>
                        <option value="10000">Hasta 10,000 km</option>
                        <option value="20000">Hasta 20,000 km</option>
                        <option value="50000">Hasta 50,000 km</option>
                        <option value="100000">Hasta 100,000 km</option>
                        <option value="mas">Más de 100,000 km</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Tipo de combustible</strong>
                    </Form.Label>
                    <InputGroup>
                      <Form.Select>
                        <option value="">Cualquiera</option>
                        <option value="gasolina">Gasolina</option>
                        <option value="diesel">Diésel</option>
                        <option value="hibrido">Híbrido</option>
                        <option value="electrico">Eléctrico</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Fecha de matriculación</strong>
                    </Form.Label>
                    <InputGroup>
                      <Form.Select>
                        <option value="">Cualquiera</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Precio</strong>
                    </Form.Label>
                    <InputGroup>
                      <Form.Select>
                        <option value="">Cualquiera $</option>
                        <option value="10000">$10,000</option>
                        <option value="20000">$20,000</option>
                        <option value="30000">$30,000</option>
                        <option value="50000">$50,000</option>
                        <option value="100000">$100,000</option>
                        <option value="200000">$200,000</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            {/* Sección secundaria (1/3) - fusionada visualmente */}
            <Col lg={4} className="p-4 d-flex flex-column">
              <Form.Group className="mb-3">
                <Form.Label>
                  <strong>Ciudad</strong>
                </Form.Label>
                <InputGroup>
                  <Form.Select>
                    <option value="">Cualquiera</option>
                    <option value="Lima">Lima</option>
                    <option value="Arequipa">Arequipa</option>
                    <option value="Cusco">Cusco</option>
                    <option value="Trujillo">Trujillo</option>
                    <option value="Piura">Piura</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <strong>Radio</strong>
                </Form.Label>
                <InputGroup>
                  <Form.Select>
                    <option value="">Cualquiera</option>
                    <option value="50km">50 km</option>
                    <option value="100km">100 km</option>
                    <option value="200km">200 km</option>
                    <option value="500km">500 km</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>
              <div className="mt-auto d-flex flex-column gap-2">
                <Button variant="outline-primary" className="w-100">
                  Búsqueda detallada
                </Button>
                <Button variant="primary" className="w-100">
                  Mostrar 3.493 vehículos
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
        <Card className="mt-4 shadow-sm">
          <Card.Footer className="text-center bg-light">
            <small>Ubica nuestros concesionarios certificados</small>
          </Card.Footer>
        </Card>

        <div className="map-section">
          <div className="gmap-frame">
            <iframe
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="Ubicación de Zentauri Quead en Google Maps"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av.%20Benavides%203900+(Zentauri%20Quead)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
      </Container>

      {/* Footer fuera del Container */}
      <Footer />
    </>
  );
};

export default MercedesSearchForm;
