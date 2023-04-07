import { useState, useEffect } from "react";
import axios from "axios";

import { Cliente } from "../../../types/Cliente";
import { BASE_URL } from "../../../utils/requests";

import FindAllClienteView from "./findAllClienteView";

export default function FindAllClienteRequest() {
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

            <FindAllClienteView clientes={clientes} />
        </div>
    );
}
