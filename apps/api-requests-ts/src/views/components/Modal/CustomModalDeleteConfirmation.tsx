import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";

import { Cliente } from "../../../models/Cliente";
import styles from "./css/CustomModal.module.css";

interface DeleteConfirmationModalProps {
    show: boolean;
    cliente: Cliente | null;
    onDeleteConfirmed: (cliente: Cliente) => void;
    onClose: () => void;
}

const CustomModalDeleteConfirmation: React.FC<DeleteConfirmationModalProps> = ({
    show,
    cliente,
    onDeleteConfirmed,
    onClose,
}) => {
    if (!show) {
        return null;
    }

    return (
        <>
            <div className={`${styles.backdrop} ${show ? "show" : ""}`} onClick={onClose}></div> {/* Adicione o elemento do backdrop aqui */}
            <div className={`modal ${show ? "show d-block" : ""}`} tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirmação de exclusão</h5>
                            <button type="button" className={`btn-close ${styles.customCloseButton}`} onClick={onClose}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        <div className="modal-body"><p>Tem certeza de que deseja excluir este cliente?</p></div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => {
                                    if (cliente) {
                                        onDeleteConfirmed(cliente); // chama o callback passando o cliente
                                        onClose();
                                    }
                                }}
                            ><FontAwesomeIcon icon={faTrash} /> Excluir</button>

                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                <FontAwesomeIcon icon={faCancel} /> Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomModalDeleteConfirmation;
