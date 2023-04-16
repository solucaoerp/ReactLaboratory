import React, { useState, FormEvent } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonWrapper, FormContainer, FormWrapper, StyledForm } from "./css/ClienteFormStyles";

interface EndpointDataSaverProps {
    endpoint: string;
}

const ClienteSave: React.FC<EndpointDataSaverProps> = ({ endpoint }) => {
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [savedId, setSavedId] = useState<number | null>(null);

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");

    const [serverError, setServerError] = useState<{
        status: number;
        dataHora: string;
        titulo: string;
        campos: Array<{ campo: string; mensagem: string }>;
    } | null>(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseAndRedirect = () => {
        handleClose();
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(endpoint, {
                nome,
                telefone,
                email,
            });
            setStatus(response.status);
            setError(null);
            setServerError(null);
            setSavedId(response.data.id);
        } catch (err: any) {
            setStatus(null);
            if (err.response) {
                setServerError(err.response.data);
                setError(null);
            } else if (err instanceof Error) {
                setError(err.message);
                setServerError(null);
            } else {
                setError("Erro desconhecido");
                setServerError(null);
            }
        } finally {
            handleShow();
        }
    };

    return (
        <>
            <FormContainer>
                <FormWrapper>
                    <StyledForm onSubmit={handleSubmit}>
                        <Form.Group controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formTelefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <ButtonWrapper>
                            <Link to="/"><Button variant="secondary">Cancelar</Button></Link>
                            <Button variant="primary" type="submit">Salvar Dados</Button>
                        </ButtonWrapper>

                    </StyledForm>
                </FormWrapper>
            </FormContainer>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Informação</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {status && <p>Status: {status}</p>}
                    {error && <p>Error: {error}</p>}
                    {status === 201 && <p>Registro {savedId} salvo com sucesso...</p>}
                    {serverError && (
                        <>
                            <p>{serverError.titulo}</p>
                            {serverError.campos && (
                                <ul>
                                    {serverError.campos.map((campo, index) => (
                                        <li key={index}>
                                            {campo.campo}: {campo.mensagem}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {status === 201 && (
                        <Link to="/"><Button variant="secondary" onClick={handleCloseAndRedirect}>Fechar</Button></Link>
                    )}
                    {status !== 201 && (
                        <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ClienteSave;
