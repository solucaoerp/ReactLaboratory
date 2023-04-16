/**
 * Hook personalizado que gerencia o estado e a lógica de negócios relacionada às operações de CRUD (criar, ler, atualizar, excluir) dos clientes.
 * Isso permite separar a lógica de negócios da lógica de apresentação, facilitando a manutenção do código e a reutilização em outros lugares, se
 * necessário.
 */
import { useState, useEffect, useCallback } from "react";

import * as Controller from "../../../controllers/Cliente/ClienteController";
import { Cliente } from "../../../models/Cliente";

export const ClienteManagement = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const fetchData = async () => {
    const allClientes = await Controller.getAllClientes();
    setClientes(allClientes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCancel = useCallback(() => {
    setSelectedCliente(null);
    fetchData();
  }, []);

  const handleDelete = useCallback(
    async (cliente: Cliente) => {
      setSelectedCliente(cliente);
      await Controller.deleteExistingCliente(cliente.id);
      fetchData();
    },
    []
  );

  const handleSubmit = useCallback(
    async (formValues: Record<string, string>) => {
      if (selectedCliente && selectedCliente.id === 0) {
        const newCliente = await Controller.createNewCliente(
          formValues as unknown as Cliente
        );
        setClientes([...clientes, newCliente]);
      } else if (selectedCliente) {
        const updatedCliente = await Controller.updateExistingCliente({
          ...selectedCliente,
          ...formValues,
        });
        setClientes(
          clientes.map((c) => (c.id === updatedCliente.id ? updatedCliente : c))
        );
      }

      setSelectedCliente(null);
      fetchData();
    },
    [clientes, selectedCliente]
  );

  return {
    clientes,
    setClientes,
    selectedCliente,
    setSelectedCliente,
    handleDelete,
    handleSubmit,
    handleCancel,
    isEditing,
    setIsEditing,
  };
};