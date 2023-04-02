import { useState, useEffect } from "react";
import { Cliente } from "../../types/Cliente";

export default function Clientes() {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8080/clientes");
            const data = await response.json();
            console.log(data);
            setClientes(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Lista Clientes com fetch nativo (retorna uma Promise)</h2>
            <h3>fetch é nativo do navegador e não requer a instalação de bibliotecas adicionais</h3>
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
                    {clientes.map((cliente) => (
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
};