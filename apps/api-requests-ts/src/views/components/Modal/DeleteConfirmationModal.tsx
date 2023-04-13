interface DeleteConfirmationModalProps {
    show: boolean;
    onDeleteConfirmed: () => void;
    onClose: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
    show,
    onDeleteConfirmed,
    onClose,
}) => {
    if (!show) {
        return null;
    }

    return (
        <div className={`modal ${show ? "show d-block" : ""}`} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirmação de exclusão</h5>
                        <button type="button" className="close" onClick={onClose}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Tem certeza de que deseja excluir este cliente?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={onDeleteConfirmed}>
                            Excluir
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
