/**
 * é um componente que renderiza e gerencia o formulário de criação e edição de clientes. Este componente é responsável por coletar os dados
 * do cliente e validar os campos antes de enviar os dados para o hook useClienteCrud. A separação do formulário em seu próprio componente 
 * permite que ele seja facilmente reutilizado e atualizado sem afetar outros componentes.
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faSave } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { Cliente } from "../../../models/Cliente";
import CustomModal from "../../components/Modal/CustomModal";
import { validaCamposCliente } from "../../../services/ClienteService";
import styles from "./css/Cliente.module.css";

interface ClienteFormProps {
  show: boolean;
  cliente: Cliente | null;
  onSubmit: (formValues: Record<string, string>) => Promise<void>;
  onCancel: () => void;
  isEditing: boolean;
  clienteId: number | null;
}

const ClienteFormulario: React.FC<ClienteFormProps> = ({
  show,
  cliente,
  onSubmit,
  onCancel,
  isEditing,
  clienteId,
}) => {

  const [formValues, setFormValues] = useState<Record<string, string>>({
    nome: "",
    telefone: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (cliente) {
      setFormValues({
        nome: cliente.nome,
        telefone: cliente.telefone,
        email: cliente.email,
      });
    }
  }, [cliente]);

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: name === "nome" ? value.toUpperCase() : value }));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newCliente: Cliente = {
        id: clienteId ? clienteId : 0,
        nome: formValues.nome,
        telefone: formValues.telefone,
        email: formValues.email,
      };

      validaCamposCliente(newCliente);
      await onSubmit(formValues); // envia o novo objeto
      onCancel();
      setErrorMessage("");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Um erro desconhecido ocorreu.");
      }
    }
  };

  const modalTitle = isEditing ? `Editando o Cliente: ${clienteId}` : "Incluindo novo cliente";

  return (
    <CustomModal title={modalTitle} show={show} onClose={onCancel}>
      <form onSubmit={handleFormSubmit}>
        <div className="form-floating mb-3">
          <input
            className={`form-control ${styles["input-control"]}`}
            id="nome"
            type="text"
            name="nome"
            value={formValues.nome}
            onChange={handleFormChange}
            required
          />
          <label htmlFor="nome">Nome</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className={`form-control ${styles["input-control"]}`}
            id="telefone"
            type="text"
            name="telefone"
            value={formValues.telefone}
            onChange={handleFormChange}
            required
          />
          <label htmlFor="telefone">Telefone (somente números)</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className={`form-control ${styles["input-control"]}`}
            id="email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleFormChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="modal-footer">
          <button className={`btn btn-primary ${styles["button-control"]}`} type="submit"><FontAwesomeIcon icon={faSave} /> Salvar</button>
          <button className={`btn btn-secondary ${styles["button-control"]}`} type="button" onClick={onCancel}><FontAwesomeIcon icon={faCancel} /> Cancelar</button>
        </div>
      </form>
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
    </CustomModal>
  );
};

export default ClienteFormulario;
