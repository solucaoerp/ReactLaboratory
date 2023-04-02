import axios from "axios";
import { useState, useEffect } from "react";
import { Cliente } from "../../types/Cliente";

export default function ClientesAxios() {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {

        axios.get("http://localhost:8080/clientes")
            .then(response => {
                const data = response.data as Cliente[];
                console.log(data);
                setClientes(data);
            });

    }, []);

    return (
        <div>
            <h2>Lista Clientes com Axios</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>TELEFONE</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}