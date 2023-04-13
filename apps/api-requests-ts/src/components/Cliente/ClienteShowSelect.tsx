import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { ClienteModel } from "../../models/ClienteModel";

type Props = {
    cliente: ClienteModel | null;
    show: boolean;
    onHide: () => void;
};

export default function ClienteShowSelect({ cliente, show, onHide }: Props) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{cliente?.nome ?? "Cliente não selecionado"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cliente ? (
                    <>
                        <p>Id: {cliente.id}</p>
                        <p>Telefone: {cliente.telefone}</p>
                        <p>Email: {cliente.email}</p>
                    </>
                ) : null}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}
