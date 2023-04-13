import { Cliente } from '../models/Cliente';
import { validaEmail, validaTelefone } from '../utils/validadao';

const validaCamposCliente = (cliente: Cliente): void => {
    if (!cliente.nome || cliente.nome.trim() === '') {
        throw new Error('O campo "nome" é obrigatório');
    }

    if (cliente.nome.length < 5 || cliente.nome.length > 60) {
        throw new Error('O campo "nome" deve ter entre 5 e 60 caracteres');
    }

    if (!cliente.telefone || cliente.telefone.trim() === '') {
        throw new Error('O campo "telefone" é obrigatório');
    }

    if (cliente.telefone.length < 10 || cliente.telefone.length > 11) {
        throw new Error('O campo "telefone" deve ter entre 10 e 11 caracteres');
    }

    if (!validaTelefone(cliente.telefone)) {
        throw new Error('O campo "telefone" é inválido');
    }

    if (!cliente.email || !validaEmail(cliente.email)) {
        throw new Error('O campo "email" é inválido');
    }
};

export { validaCamposCliente };
