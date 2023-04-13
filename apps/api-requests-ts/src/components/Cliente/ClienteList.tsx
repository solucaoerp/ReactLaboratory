import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash, faUserPlus, faCog } from "@fortawesome/free-solid-svg-icons";

import "./css/ClienteStyles.css";
import { ClienteModel } from "../../models/ClienteModel";
import { RequestList } from "../../hooks/RequestList";
import ClienteShowSelect from "./ClienteShowSelect";
import { ClienteDelete, ClienteDeleteProps } from "./ClienteDelete";

export default function ClienteList() {
  const { src: fetchedClientes, isFetching } = RequestList<ClienteModel[]>("/clientes");
  const [clientes, setClientes] = useState<ClienteModel[]>([]);
  const [selectedCliente, setSelectedCliente] = useState<ClienteModel | null>(null);
  const handleCloseModal = () => setSelectedCliente(null);
  const [updateCount, setUpdateCount] = useState(0);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteSuccess = () => {
    setUpdateCount((prev) => prev + 1);
    setIsLoading(false);
  };

  const onDeleteHandler = async () => {
    try {
      if (selectedCliente) {
        const { id } = selectedCliente;
        const clienteDeleteProps: ClienteDeleteProps = {
          id: id,
          onDelete: () => setUpdateCount((prev) => prev + 1),
          onDeleteSuccess: handleDeleteSuccess,
          icon: faTrash
        };
        await ClienteDelete(clienteDeleteProps);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (fetchedClientes) {
      setClientes(fetchedClientes);
    }
  }, [fetchedClientes, updateCount]);

  const onDeleteSuccess = () => {
    setIsLoading(false);
  };

  return (
    <div className="border p-3 custom-border">
      {isFetching && <p>Carregando...</p>}
      <Link to="/clientes-new" className="btn btn-primary mb-3 btn-novo-cliente"><FontAwesomeIcon icon={faUserPlus} /> Novo</Link>
      <Link to="/endpoint-test" className="btn btn-primary mb-3 btn-novo-cliente"><FontAwesomeIcon icon={faCog} /> EndpointTest</Link>
      <table className="table table-striped table-hover table-bordered custom-table custom-bordered">
        <thead>
          <tr className="table-active text-center">
            <th>Id</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes?.map((cliente: ClienteModel) => {
            const handleSelectCliente = () => setSelectedCliente(cliente);
            return (
              <tr key={cliente.id}>
                <td className="text-center">{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.email}</td>
                <td className="text-center">
                  <button className="custom-button" onClick={handleSelectCliente}><FontAwesomeIcon icon={faEye} /></button>
                  <button className="custom-button"><FontAwesomeIcon icon={faEdit} /></button>
                  <ClienteDelete id={cliente.id} onDelete={onDeleteHandler} onDeleteSuccess={onDeleteSuccess} icon={faTrash} />

                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <ClienteShowSelect cliente={selectedCliente!} show={!!selectedCliente} onHide={handleCloseModal} />
    </div>
  );
}