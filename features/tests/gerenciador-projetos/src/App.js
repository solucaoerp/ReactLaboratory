import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Container from './components/layout/Container';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min-height" >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
