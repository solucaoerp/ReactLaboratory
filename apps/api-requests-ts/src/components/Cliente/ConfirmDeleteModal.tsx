import { Modal, Button } from "react-bootstrap";

interface ConfirmDeleteModalProps {
    show: boolean;
    onHide: () => void;
    onConfirm: () => void;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ show, onHide, onConfirm }) => {
    const handleConfirm = () => {
        onConfirm();
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar exclusão</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Você realmente deseja excluir este cliente?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={handleConfirm}>
                    Excluir
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
