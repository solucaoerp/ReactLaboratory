import axios from 'axios';

import { BASE_URL } from '../utils/requests';
import { Cliente } from '../models/Cliente';

export const buscarClientes = async (): Promise<Cliente[]> => {
  const response = await axios.get<Cliente[]>(`${BASE_URL}/clientes`);
  return response.data;
};

export const cadastrarCliente = async (cliente: Cliente): Promise<Cliente> => {
  const response = await axios.post<Cliente>(`${BASE_URL}/clientes`, cliente);
  return response.data;
};

export const alterarCliente = async (cliente: Cliente): Promise<Cliente> => {
  const response = await axios.put<Cliente>(`${BASE_URL}/clientes/${cliente.id}`, cliente);
  return response.data;
};

export const removerCliente = async (cliente: Cliente): Promise<void> => {
  await axios.delete(`${BASE_URL}/clientes/${cliente.id}`);
};
