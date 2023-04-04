import axios from "axios";
import { useState, useEffect } from "react";
import { Cliente } from "../../types/Cliente";
import { Table } from "react-bootstrap";
import { BASE_URL } from "../../utils/requests";

export default function ClientesAxios() {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/clientes`).then((response) => {
            const data = response.data as Cliente[];
            console.log(data);
            setClientes(data);
        });
    }, []);

    return (
        <div>
            <h2>Clientes</h2>
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
                        <tr key={cliente.id} className={index % 2 === 0 ? 'table-primary' : 'table-secondary'}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
