import axios from "axios";

const SERVER_URL = 'http://localhost:';
const SERVER_PORT = '8080';
const SERVER_API_VERSION = '/api/v1';

export default axios.create({
  baseURL: SERVER_URL + SERVER_PORT + SERVER_API_VERSION
});