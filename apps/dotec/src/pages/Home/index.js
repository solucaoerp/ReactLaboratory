import React, { useEffect, useState } from "react";

import {
    Container,
    ConteudoTitulo,
    Titulo,
    ButtonAction,
    ButtonDirection,
    ButtonSuccess,
    ButtonPrimary,
    Table,
    TextDanger,
    TextSuccess,
    AlertDanger,
    AlertSuccess
} from "../../styles/customCSS";

import api from '../../config/clientAxios';

export const Home = () => {

    const [data, setData] = useState([]);

    let dataAtual = new Date();
    let ano = dataAtual.getFullYear();
    let mes = dataAtual.getMonth() + 1;

    const [dataView, setDataView] = useState({ ano, mes });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const anterior = async () => {
        if (dataView.mes === 1) {
            setDataView({ ano: dataView.ano - 1, mes: 12 });
        } else {
            setDataView({ ano: dataView.ano, mes: dataView.mes - 1 });
        }
    }

    const proximo = async () => {
        if (dataView.mes === 12) {
            setDataView({ ano: dataView.ano + 1, mes: 1 });
        } else {
            setDataView({ ano: dataView.ano, mes: dataView.mes + 1 });
        }
    }

    const listarExtrato = async e => {
        await api.get("/extrato/listar").then((response) => {
            console.log(response);
            setData(response.data);
        }).catch((err) => {
            if (err.response) {
                setStatus({
                    type: 'Erro',
                    mensagem: err.response.data.mensagem
                });
            } else {
                setStatus({
                    type: 'Erro',
                    mensagem: 'Erro! Tente mais tarde.'
                });
            }
        })
    }

    useEffect(() => {
        listarExtrato();
    }, []);

    return (
        <Container>
            <ConteudoTitulo>
                <Titulo>Usuários</Titulo>
                <ButtonAction>
                    <ButtonSuccess>Cadastrar</ButtonSuccess>
                </ButtonAction>
            </ConteudoTitulo>

            {status.type === 'Erro' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
            {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
            <ButtonDirection>
                <ButtonPrimary type="button" onClick={() => anterior()}>Anterior</ButtonPrimary>
                <span>{dataView.mes + "/" + dataView.ano}</span>
                <ButtonPrimary type="button" onClick={() => proximo()}>Próximo...</ButtonPrimary>
            </ButtonDirection>

            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Situação</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.tipo === 1 ? <TextDanger>Pagamento</TextDanger> : <TextSuccess>Recebido</TextSuccess>}</td>
                            <td>{item.situacao}</td>
                            <td>{item.valor}</td>
                        </tr>
                    ))}
                </tbody>
                {/* <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>586.15</td>
                    </tr>
                </tfoot> */}
            </Table>

        </Container>
    );
};