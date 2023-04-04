/*
    Arquivo de configuração para a rota base de requisição aos Endpoints
*/

const HOST = "http://localhost:";
const PORT = 8080;
const REACT_APP_API_URL_LOCAL = HOST + PORT;

export const BASE_URL = process.env.REACT_APP_API_URL_PROD ?? REACT_APP_API_URL_LOCAL;

/*    
    Pega o valor definido na veriável de ambiente no ambiente de deploy, ou pega o valor após
    o operador de coalescencia ??
    --
    Ler:
    https://definirtec.com/operador-de-coalescencia-nula/
*/