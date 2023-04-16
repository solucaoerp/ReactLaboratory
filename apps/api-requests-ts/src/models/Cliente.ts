export interface Cliente {
    id: number;
    nome: string;
    telefone: string;
    email: string;
}

export function createNewCliente(): Cliente {
    return {
        id: 0,
        nome: "",
        telefone: "",
        email: "",
    };
}  