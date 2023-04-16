import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

import Footer from "../components/Layout/Footer/Footer";
import Navigation from "../components/Layout/Navigation/Navigation";
import AppRoutes from "../components/Routes/Routes";

export default function App001() {
  return (
    <BrowserRouter >
      <Navigation />
      <Container>
        <AppRoutes />
      </Container>
      <Footer />
    </BrowserRouter>
  );
};
