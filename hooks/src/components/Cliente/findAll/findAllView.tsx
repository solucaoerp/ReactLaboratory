import { Table } from "react-bootstrap";
import { Cliente } from "../../../types/Cliente";

type ListaClientesProps = {
    clientes: Cliente[];
};

export default function FindAllView({ clientes }: ListaClientesProps) {
    return (
        <Table bordered hover striped>
            <thead>
                <tr className="bg-dark text-light">
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
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
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
