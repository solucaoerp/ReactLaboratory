import { RequestBase } from "../../configs/RequestBase";
import { Cliente } from "../../models/Cliente";
import { validaCamposCliente } from "../../services/ClienteService";

const getAllClientes = async (): Promise<Cliente[]> => {
    const response = await RequestBase.get<Cliente[]>("/clientes");
    return response.data;
};

const createNewCliente = async (cliente: Cliente): Promise<Cliente> => {
    validaCamposCliente(cliente);
    try {
        const response = await RequestBase.post<Cliente>("/clientes", cliente);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.status === 400) {
            throw new Error(error.response.data.titulo);
        } else {
            throw new Error("Um erro desconhecido ocorreu.");
        }
    }
};

const updateExistingCliente = async (cliente: Cliente): Promise<Cliente> => {
    validaCamposCliente(cliente);
    try {
        const response = await RequestBase.put<Cliente>(
            `/clientes/${cliente.id}`,
            cliente
        );
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.status === 400) {
            throw new Error(error.response.data.titulo);
        } else {
            throw new Error("Um erro desconhecido ocorreu.");
        }
    }
};

const deleteExistingCliente = async (id: number): Promise<void> => {
    await RequestBase.delete(`/clientes/${id}`);
};

export {
    getAllClientes,
    createNewCliente,
    updateExistingCliente,
    deleteExistingCliente,
};
