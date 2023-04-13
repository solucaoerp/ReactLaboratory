import { Navigate, Route, Routes } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Login from '../Login/Login';
import { ClientePageView } from "../../views/Cliente/ClientePageView";
import { useMemo } from "react";
import { ClienteService } from "../../services/Cliente/ClienteService";
import { GenericApi } from "../../controllers/GenericApi";
import { ClienteController } from "../../controllers/Cliente/ClienteController";

const AppRoutes = () => {
    const api = new GenericApi('http://localhost:8080');
    const clienteService = useMemo(() => new ClienteService(api), [api]);
    const clienteController = useMemo(() => new ClienteController(clienteService), [clienteService]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/clientes" element={<ClientePageView service={clienteService} />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};

export default AppRoutes;
