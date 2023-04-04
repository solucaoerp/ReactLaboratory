import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

import FindAllClienteRequest from "../components/Cliente/findAll/findAllClienteRequest";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/clientes" element={<FindAllClienteRequest />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
