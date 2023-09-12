import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import logo from './assets/logo.png'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="bits&parts logo" className='App-logo' width="150"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Componentes de PC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Periféricos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Impresoras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Monitores
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;