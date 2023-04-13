/** Página Principal do Cliente: usa ClienteListView e ClienteFormView */

import { useEffect, useState } from "react";
import { IService } from "../../interfaces/IService";
import { Cliente } from "../../models/ClienteModel";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ClienteListView } from "./ClienteListView";
import { ClienteFormView } from "./ClienteFormView";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


/** interface com propriedades obrigatórias */
interface Props {
    service: IService<Cliente>; /** instância do serviço de clientes */
}

export const ClientePageView = ({ service }: Props) => {
    /** estados */
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null);

    /** busca todos os clientes ao montar o componente */
    useEffect(() => {
        buscarClientes();
    }, []);

    const buscarClientes = async () => {
        const result = await service.buscarTodos();
        setClientes(result);
    };

    // console.log('Objeto cliente enviado para a API:', cliente);
    /** abre o modal para adicionar um novo cliente */
    const salvarCliente = async (cliente: Cliente) => {        
        delete cliente.id; // remova a propriedade 'id' do objeto 'cliente'
        console.log('Objeto cliente enviado para a API:', cliente);
        await service.salvar(cliente);
        const clientesAtualizados = await service.buscarTodos();
        setClientes(clientesAtualizados);
        setShowForm(false);
    };
    


    /** abre o modal para editar um cliente */
    const editarCliente = (cliente: Cliente) => {
        setClienteSelecionado(cliente);
        setShowForm(true);
    };

    /** exclui um cliente */
    const excluirCliente = async (cliente: Cliente) => {
        await service.excluir(cliente.id ?? 0);
        const clientesAtualizados = await service.buscarTodos();
        setClientes(clientesAtualizados);
    };

    /** salva um cliente */
    const adicionarCliente = () => {
        setClienteSelecionado({ nome: '', telefone: '', email: '' });
        setShowForm(true);
    };

    return (
        <div>
            <Button onClick={() => adicionarCliente()}><FontAwesomeIcon icon={faPlus} /> Novo</Button>
            <ClienteListView clientes={clientes} onEditar={editarCliente} onExcluir={excluirCliente} />
            <ClienteFormView visible={showForm} onCancel={() => setShowForm(false)} onSave={salvarCliente} cliente={clienteSelecionado || undefined} service={service} />
        </div>
    );
};