export const formatarTelefone = (telefone: string): string => {
    const numeros = telefone.replace(/\D/g, ''); // remove tudo que não é número
    if (numeros.length === 10) { // é telefone fixo
        return numeros.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'); // aplica a máscara
    } else if (numeros.length === 11) { // é celular
        return numeros.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4'); // aplica a máscara
    } else {
        return telefone; // caso o número não possua o tamanho correto, retorna sem máscara
    }
};


export const formataCPF = (cpf: string): string => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const formataCNPJ = (cnpj: string): string => {
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};

export const formataDataBrasileira = (data: Date): string => {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
};

export const formatarTelefoneFixo = (telefone: string): string => {
    const numeros = telefone.replace(/\D/g, '');
    return numeros.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
};

export const formatarTelefoneCelular = (telefone: string): string => {
    const numeros = telefone.replace(/\D/g, '');
    if (numeros.length === 11) {
        return numeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
        return numeros.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
};
