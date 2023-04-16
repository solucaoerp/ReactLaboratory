/**
 * ----------------------------------------------------------------------------------------------------------------------------------------
 * O arquivo 'http-common.js' cria uma instância do cliente HTTP do Axios com a base URL definida como 'http://localhost:8080/api' 
 * e o cabeçalho definido como 'Content-type: application/json'.
 * ----------------------------------------------------------------------------------------------------------------------------------------
 * Para usá-lo em outros locais, basta importá-lo e usar a instância criada para fazer solicitações HTTP para a API definida na base URL. 
 * Por exemplo, se quisermos buscar dados de clientes da API, podemos importar a instância HTTP definida em 'http-common.js' e fazer uma 
 * solicitação GET para '/clientes' da seguinte forma:
 * ----------------------------------------------------------------------------------------------------------------------------------------
 * import http from './http-common';
 *
 * http.get('/clientes')
 *    .then((response) => {
 *        // Tratar a resposta da API
 *    })
 *    .catch((error) => {
 *        // Tratar o erro da API
 *    });
 * ----------------------------------------------------------------------------------------------------------------------------------------
 */

import axios from "axios";

const port = process.env.PORT ?? 3000;
const apiUrl = process.env.REACT_APP_API_URL ?? `http://localhost:${port}`;

const http = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache",
    "Expires": "0",
  },
});

export default http;
