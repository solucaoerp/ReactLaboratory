import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navigation.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-custom">
            <Navbar.Brand as={NavLink} to="/" style={{ fontWeight: 'bold', position: 'absolute', left: 70 }}>
                IBRPlanner
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-3" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto justify-content-end">
                    <NavDropdown title="Painel de Controle" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to="/about">Sobre</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/contact">Contato</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">Sobre</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contato</Nav.Link>
                    <Nav.Link as={NavLink} to="/clientes">Clientes</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
