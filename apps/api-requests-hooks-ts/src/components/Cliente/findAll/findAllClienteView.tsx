import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Cliente } from "../../../types/Cliente";
import DetailClienteView from "../detail/detailClienteView";

type ListaClientesProps = {
    clientes: Cliente[];
};

export default function FindAllClienteView({ clientes }: ListaClientesProps) {
    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null);
    const [showDetalhe, setShowDetalhe] = useState(false);

    const handleDetalhe = (cliente: Cliente) => {
        setClienteSelecionado(cliente);
        setShowDetalhe(true);
    };

    const handleCloseDetalhe = () => {
        setClienteSelecionado(null);
        setShowDetalhe(false);
    };

    return (
        <>
            <Table bordered hover striped>
                <thead>
                    <tr className="bg-dark text-light">
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th className="text-center whitespace-no-wrap">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente, index) => (
                        <tr
                            key={cliente.id}
                            className={index % 2 === 0 ? "table-primary" : "table-secondary"}
                        >
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.email}</td>
                            <td className="text-center whitespace-no-wrap">
                                <Button variant="primary" onClick={() => handleDetalhe(cliente)}>Detalhar</Button>{" "}
                                <Button variant="warning">Alterar</Button>{" "}
                                <Button variant="danger">Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <DetailClienteView show={showDetalhe} handleClose={handleCloseDetalhe} cliente={clienteSelecionado} />
        </>
    );
}
