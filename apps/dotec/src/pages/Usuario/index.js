import React, { useEffect, useState } from "react";

import api from '../../config/clientAxios';

export const Usuario = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const listarUsuarios = async e => {
        await api.get("/user/listar").then((response) => {
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
        listarUsuarios();
    }, []);

    return (
        <div>
            <h1>Usuário</h1>
            <button>Anterior</button>
            <button>Próximo...</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Chave</th>
                        <th>Cargo</th>
                        <th>Matricula</th>
                        <th>Celular</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.chave}</td>
                            <td>{item.cargo}</td>
                            <td>{item.matricula}</td>
                            <td>{item.celular}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};