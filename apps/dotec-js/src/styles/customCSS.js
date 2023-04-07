import styled from "styled-components";

export const Container = styled.section`
    font-family: Sans-serif;
    margin: 0px auto;
    width: 960px;
    max-width: 960px;
    border: 1px solid grey;
    border-radius: 4px;
`;

export const ConteudoTitulo = styled.section`
    margin: 5px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;    
    padding-bottom: 5px;
`;

export const Titulo = styled.h1`
    font-size: 23px;
    margin: 5px 0px;
    color: #787878;
`;

export const ButtonAction = styled.section`
    margin: 0px;
`;

export const ButtonSuccess = styled.button`
    background-color: #fff;
    color: #198754;
    padding: 8px;
    border: 1px solid #198754; 
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color: #198754;
        color: #fff;
    }
`;

export const ButtonDirection = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 5px;
    border-bottom: 1px solid grey;    
    padding-bottom: 4px;
`;

export const ButtonPrimary = styled.section`
    font-family: Sans-serif;
    background-color: #fff;
    color: #198754;
    padding: 8px;
    border: 1px solid #198754; 
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color: #198754;
        color: #fff;
    }
`;

export const Table = styled.table`
    margin-top: 15px;
    width: 100%;
    th{
        background-color: #007281;
        color: #f1f1f1;
        padding: 7px;
    }
    td{
        background-color: #f6f6f6;
        color: #3e3e3e;
        padding: 5px;
    }
`;

export const TextDanger = styled.span`
    color: #ec2121;
`;

export const TextSuccess = styled.span`
    color: #24c14a;
`;

export const AlertDanger = styled.p`
    background-color: #f8d7da;
    color: #842029;
    margin: 10px 0;
    border: 1px solid #f5c2c7;
    border-radius: 4px;
    padding: 7px;
`;

export const AlertSuccess = styled.p`
    background-color: #d1e7dd;
    color: #0f5132;
    margin: 10px 0;
    border: 1px solid #badbcc;
    border-radius: 4px;
    padding: 7px;
`;