import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { Table, Button } from 'react-bootstrap';
import { Cliente } from '../../models/ClienteModel';

import { IService } from '../../interfaces/IService';

interface Props {
    clientes: Cliente[];
    onEditar: (cliente: Cliente) => void;
    onExcluir: (cliente: Cliente) => Promise<void>;
}


export function ClienteListView({ clientes, onEditar, onExcluir }: Props) {
    const excluirCliente = async (cliente: Cliente) => {
        await onExcluir(cliente);
    };

    return (
        <Table striped bordered hover responsive size="sm" className="mt-3">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map((cliente) => (
                    <tr key={cliente.id}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.telefone}</td>
                        <td>{cliente.email}</td>
                        <td>
                            <Button style={{ marginRight: '8px' }} variant="outline-secondary" onClick={() => onEditar(cliente)}><FontAwesomeIcon icon={faEdit} /> Editar</Button>
                            <Button className="mr-2" variant="outline-danger" onClick={() => excluirCliente(cliente)}><FontAwesomeIcon icon={faTrashAlt} /> Excluir</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
