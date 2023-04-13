import { Modal, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from "react";
import { Cliente } from "../../models/ClienteModel";
import { IService } from "../../interfaces/IService";

interface Props {
    visible: boolean;
    onCancel: () => void;
    onSave: (cliente: Cliente) => void;
    cliente: Cliente | undefined; // Altere aqui para "Cliente | undefined"
    service: IService<Cliente>;
}

export const ClienteFormView = ({ visible, onCancel, onSave, cliente, service }: Props) => {
    const [nome, setNome] = useState<string>(cliente?.nome ?? '');
    const [telefone, setTelefone] = useState<string>(cliente?.telefone ?? '');
    const [email, setEmail] = useState<string>(cliente?.email ?? '');

    const handleSubmit = async () => {
        const clienteAtualizado = { ...cliente, nome, telefone, email };
        const response = await service.salvar(clienteAtualizado);
        onSave(response);
        setNome('');
        setTelefone('');
        setEmail('');
      };   
    

    useEffect(() => {
        if (cliente) {
            setNome(cliente.nome);
            setTelefone(cliente.telefone);
            setEmail(cliente.email);
        }
    }, [cliente]);

    return (
        <Modal show={visible} onHide={onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>{cliente ? 'Editar cliente' : 'Adicionar cliente'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Insira o nome do cliente" required />
                    </Form.Group>
                    <Form.Group controlId="formTelefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Insira o telefone do cliente" required />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Insira o email do cliente" required />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}><FontAwesomeIcon icon={faTimes} /> Cancelar</Button>
                <Button variant="primary" onClick={handleSubmit}><FontAwesomeIcon icon={faSave} /> Salvar</Button>
            </Modal.Footer>
        </Modal>
    );
    
};
