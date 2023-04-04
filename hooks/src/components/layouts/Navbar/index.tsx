import { useState } from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuToggle() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">
                IBRPlanner
            </NavLink>
            <button className="navbar-toggler" type="button" onClick={handleMenuToggle} aria-expanded={isMenuOpen} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/sobre">Sobre</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contato">Contato</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/clientes">Clientes</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
