// GenericApi.ts
import axios, { AxiosInstance } from 'axios';

export class GenericApi {
    private readonly httpClient: AxiosInstance;

    constructor(private baseURL: string) {
        this.httpClient = axios.create({
            baseURL: baseURL
        });
    }

    async buscarTodos<T>(endpoint: string): Promise<T[]> {
        const response = await this.httpClient.get<T[]>(endpoint);
        return response.data;
    }

    async get<T>(endpoint: string): Promise<T[]> {
        const response = await this.httpClient.get<T[]>(endpoint);
        return response.data;
      }
      
}
