import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './CustomModal.module.css';

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
            size="lg"
            dialogClassName={`${styles["modal-dialog-centered-custom"]} modal-dialog-centered`}
            contentClassName="modal-content"
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
};


export default CustomModal;
