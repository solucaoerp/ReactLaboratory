import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import AppRoutes from "./routes/routes";
import { Container } from "react-bootstrap";
import Footer from "./components/layouts/Footer";

export default function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      <Container>
        <AppRoutes />
      </Container>
      <Footer />
    </BrowserRouter>
  </>
};