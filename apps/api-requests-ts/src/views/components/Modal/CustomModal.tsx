import { Modal } from 'react-bootstrap';

import styles from './css/CustomModal.module.css';
interface ModalProps {
    title: string;
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ title, show, onClose, children }) => {
    return (
        <Modal
            show={show}
            onHide={onClose}
            dialogClassName={`${styles["modal-dialog-centered-custom"]} modal-dialog-centered`}        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles["modal-body"]}>
                {children}
            </Modal.Body>
        </Modal>
    );
};

export default CustomModal;