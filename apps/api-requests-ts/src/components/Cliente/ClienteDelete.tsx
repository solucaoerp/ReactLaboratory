import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { RequestBase } from "../../configs/RequestBase";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";

export interface ClienteDeleteProps {
    id: number;
    onDelete: () => void;
    onDeleteSuccess: () => void;
    icon: IconDefinition;
}

export const ClienteDelete: React.FC<ClienteDeleteProps> = ({ id, onDelete, icon }) => {
    const [deleting, setDeleting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false);
    };

    const handleConfirmDelete = async () => {
        setDeleting(true);
        try {
            await RequestBase.delete(`/clientes/${id}`);
            onDelete();
        } catch (error) {
            console.error("Erro ao deletar cliente: ", error);
        } finally {
            setDeleting(false);
        }
    };

    return (
        <>
            <button className="custom-button" onClick={handleClick} disabled={deleting}><FontAwesomeIcon icon={icon} /></button>
            <ConfirmDeleteModal show={showModal} onHide={handleHideModal} onConfirm={handleConfirmDelete} />
        </>
    );
};