import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 fixed-bottom">
      <Container>
        <Row>
          <Col>
            <p className="text-center">Copyright © 2023.
              Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};