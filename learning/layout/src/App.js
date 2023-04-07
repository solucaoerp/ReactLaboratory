import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/App.css';

function App() {
  return (
    <Container fluid>
      <Row className="cabecalho">
        <Col className="bg-primary"><h2>Cabeçalho</h2></Col>
      </Row>
      <Row className="body">
        <Col md={4} className="bg-secondary"><h2>Conteúdo esquerda</h2></Col>
        <Col md={8} className="bg-success"><h2>Conteúdo direita</h2></Col>
      </Row>
      <Row className="rodape">
        <Col className="bg-warning"><h2>Rodapé</h2></Col>
      </Row>
    </Container>
  );
}

export default App;
