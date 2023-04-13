import { useState, useEffect, useCallback } from 'react';
import { Cliente } from '../../../models/Cliente';
import { getAllClientes, createNewCliente, updateExistingCliente, deleteExistingCliente } from '../../../controllers/Cliente/ClienteController';
import Table from '../../components/Table/Table';

import CustomModal from '../../components/Modal/CustomModal';
import DeleteConfirmationModal from '../../components/Modal/DeleteConfirmationModal';

const ClienteCrud: React.FC = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);
    const [formValues, setFormValues] = useState<Record<string, string>>({});
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [updateListKey, setUpdateListKey] = useState(0);

    useEffect(() => {
        if (showModal) {
            if (selectedCliente) {
                setFormValues({
                    nome: selectedCliente.nome,
                    telefone: selectedCliente.telefone,
                    email: selectedCliente.email,
                });
            } else {
                setFormValues({});
            }
        }
    }, [selectedCliente, showModal]);

    const openModal = useCallback(() => {
        if (selectedCliente) {
            setFormValues({
                nome: selectedCliente.nome,
                telefone: selectedCliente.telefone,
                email: selectedCliente.email,
            });
        } else {
            setFormValues({});
        }
        setShowModal(true);
    }, [selectedCliente]);

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const allClientes = await getAllClientes();
            setClientes(allClientes);
        };
        fetchData();
    }, [updateListKey]);

    const handleAdd = useCallback(() => {
        setSelectedCliente(null);
        setShowModal(true);
    }, []);

    const handleEdit = useCallback((clienteData: any[]) => {
        const cliente: Cliente = {
            id: clienteData[0],
            nome: clienteData[1],
            telefone: clienteData[2],
            email: clienteData[3],
        };
        setSelectedCliente(cliente);
        openModal();
    }, [openModal]);

    const handleDelete = useCallback((clienteData: any[]) => {
        const cliente: Cliente = {
            id: clienteData[0],
            nome: clienteData[1],
            telefone: clienteData[2],
            email: clienteData[3],
        };
        setSelectedCliente(cliente);
        setShowDeleteConfirmation(true);
    }, []);

    const handleCancel = useCallback(() => {
        closeModal();
    }, []);

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (!event.currentTarget.checkValidity()) {
                event.currentTarget.classList.add("was-validated");
                return;
            }
            if (selectedCliente) {
                const updatedCliente = await updateExistingCliente({
                    ...selectedCliente,
                    ...formValues,
                });
                setClientes(clientes.map((c) => (c.id === updatedCliente.id ? updatedCliente : c)));
            } else {
                const newCliente = await createNewCliente(formValues as unknown as Cliente);
                setClientes([...clientes, newCliente]);
            }

            closeModal();
        },
        [clientes, selectedCliente, formValues]
    );

    const handleFormChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    }, []);

    return (
        <>
            <h1>Clientes</h1>
            <button className="btn btn-primary" onClick={handleAdd}>Adicionar Cliente</button>
            <Table
                columns={['ID', 'Nome', 'Telefone', 'Email']}
                data={clientes.map((cliente) => [
                    cliente.id,
                    cliente.nome,
                    cliente.telefone,
                    cliente.email,
                ])}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <DeleteConfirmationModal
                show={showDeleteConfirmation}
                onDeleteConfirmed={async () => {
                    if (selectedCliente) {
                        await deleteExistingCliente(selectedCliente.id);
                        setClientes(clientes.filter((c) => c.id !== selectedCliente.id));
                        setUpdateListKey((prevKey) => prevKey + 1);
                    }
                    setShowDeleteConfirmation(false);
                }}
                onClose={() => setShowDeleteConfirmation(false)}
            />
            <CustomModal
                title={selectedCliente ? 'Editar Cliente' : 'Adicionar Cliente'}
                show={showModal}
                onClose={handleCancel}
            >
                <div className="px-3">
                    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                name="nome"
                                value={formValues.nome || ''}
                                onChange={handleFormChange}
                                className="form-control"
                                id="nome"
                                required
                            />
                            <label htmlFor="nome" className="form-label">Nome</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                name="telefone"
                                value={formValues.telefone || ''}
                                onChange={handleFormChange}
                                className="form-control"
                                id="telefone"
                                required
                            />
                            <label htmlFor="telefone" className="form-label">Telefone</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                name="email"
                                value={formValues.email || ''}
                                onChange={handleFormChange}
                                className="form-control"
                                id="email"
                                required
                            />
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary me-2">Salvar</button>
                            <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </CustomModal>
        </>
    );

};

export default ClienteCrud;