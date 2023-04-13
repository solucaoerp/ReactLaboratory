import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

interface EndpointTesterProps {
  endpoint: string;
}

const ResponseTest: React.FC<EndpointTesterProps> = ({ endpoint }) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(endpoint);
      setStatus(response.status);
      setError(null);
    } catch (err) {
      setStatus(null);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      handleShow();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={fetchData}>ResponseTest</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Resultado da Requisição</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {status && <p>Status: {status}</p>}
          {error && <p>Error: {error}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ResponseTest;