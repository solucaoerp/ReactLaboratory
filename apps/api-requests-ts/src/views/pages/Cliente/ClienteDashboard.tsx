/**
 * é o componente principal que integra o hook useClienteCrud e os componentes de apresentação (como Table, DeleteConfirmationModal e ClienteForm)
 * para fornecer a funcionalidade completa do CRUD de clientes. Este componente serve como um ponto central para gerenciar a interação entre os 
 * vários componentes e hooks e garantir que tudo funcione conforme o esperado.
 */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./css/Cliente.module.css";
import Table from "../../components/Table/Table";
import CustomModalDeleteConfirmation from "../../components/Modal/CustomModalDeleteConfirmation";
import ClienteFormulario from "./ClienteFormulario";
import { ClienteManagement } from "./ClienteManagement";
import { Cliente, createNewCliente } from "../../../models/Cliente";

const ClienteDashboard: React.FC = () => {
    const {
        clientes,
        selectedCliente,
        setSelectedCliente,
        handleSubmit,
        handleCancel,
        isEditing,
        setIsEditing,
        handleDelete,
    } = ClienteManagement();

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showFormModal, setShowFormModal] = useState(false);

    const handleAddCliente = () => {
        setSelectedCliente(createNewCliente());
        setIsEditing(false);
        setShowFormModal(true);
    };

    return (
        <div className={`${styles.containerWithBorder}`}>
            <button
                type="button"
                className={`btn btn-secondary custom-btn ${styles["button-add"]}`}
                onClick={handleAddCliente}
            ><FontAwesomeIcon icon={faPlus} /> Adicionar</button>
            <Table
                columns={["ID", "Nome", "Telefone", "Email"]}
                data={clientes.map((cliente: Cliente) => [
                    cliente.id,
                    cliente.nome,
                    cliente.telefone,
                    cliente.email,
                ])}
                onEdit={(clienteData) => {
                    setSelectedCliente({
                        id: clienteData[0],
                        nome: clienteData[1],
                        telefone: clienteData[2],
                        email: clienteData[3],
                    });
                    setIsEditing(true);
                    setShowFormModal(true);
                }}
                onDelete={(clienteData) => {
                    setSelectedCliente({
                        id: clienteData[0],
                        nome: clienteData[1],
                        telefone: clienteData[2],
                        email: clienteData[3],
                    });
                    setShowDeleteModal(true);
                }}
                onView={undefined} // passando a propriedade onView como vazia
                isEditing={isEditing}
            />
            <CustomModalDeleteConfirmation
                show={showDeleteModal}
                cliente={selectedCliente}
                onDeleteConfirmed={handleDelete}
                onClose={() => setShowDeleteModal(false)}
            />
            {selectedCliente && (
                <ClienteFormulario
                    show={showFormModal}
                    cliente={selectedCliente}
                    onSubmit={handleSubmit}
                    onCancel={() => {
                        handleCancel();
                        setIsEditing(false);
                        setShowFormModal(false);
                    }}
                    isEditing={isEditing}
                    clienteId={selectedCliente.id}
                />
            )}
        </div>
    );
};

export default ClienteDashboard;