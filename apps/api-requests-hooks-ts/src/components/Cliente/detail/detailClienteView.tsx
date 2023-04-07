import { Modal, Button } from "react-bootstrap";
import { Cliente } from "../../../types/Cliente";

type DetalheProps = {
    show: boolean;
    handleClose: () => void;
    cliente: Cliente | null;
};

export default function DetailClienteView({ show, handleClose, cliente }: DetalheProps) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detalhes do Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cliente ? (
                    <div>
                        <p><strong>Id:</strong> {cliente.id}</p>
                        <p><strong>Nome:</strong> {cliente.nome}</p>
                        <p><strong>Telefone:</strong> {cliente.telefone}</p>
                        <p><strong>Email:</strong> {cliente.email}</p>
                    </div>
                ) : (
                    <p>Nenhum cliente selecionado.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
