import axios, { AxiosInstance } from 'axios';
import { Request, Response } from 'express';
import { IController } from '../../interfaces/IController';
import { Cliente } from '../../models/ClienteModel';
import { IService } from '../../interfaces/IService';

export class ClienteController implements IController<Cliente> {
    private readonly httpClient: AxiosInstance;
    private readonly service: IService<Cliente>;

    constructor(service: IService<Cliente>) {
        this.httpClient = axios.create({
            baseURL: 'http://localhost:8080'
        });
        this.service = service;
    }

    async buscarTodos(req: Request, res: Response): Promise<void> {
        try {
            const response = await this.httpClient.get<Cliente[]>('/clientes');
            res.json(response.data);
        } catch (error) {
            console.error(error);
            res.status(500).end();
        }
    }

    async buscarPorId(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            const response = await this.httpClient.get<Cliente>(`/clientes/${id}`);
            res.json(response.data);
        } catch (error) {
            console.error(error);
            res.status(500).end();
        }
    }

    // async salvar(req: Request, res: Response): Promise<void> {
    //     try {
    //         const cliente = req.body as Cliente;
    //         const response = await this.httpClient.post<Cliente>('/clientes', cliente);
    //         res.json(response.data);
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).end();
    //     }
    // }
    // async salvar(req: Request, res: Response): Promise<void> {
    //     try {
    //         const cliente = req.body as Cliente;
    //         const clienteSalvo = await this.service.salvar(cliente);
    //         res.json(clienteSalvo);
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).end();
    //     }
    // }
    async salvar(req: Request, res: Response) {
        const cliente = req.body as Cliente;
        const clienteSalvo = await this.service.salvar(cliente);
        res.json(clienteSalvo);
    }
    
    

    async excluir(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            await this.httpClient.delete(`/clientes/${id}`);
            res.status(204).end();
        } catch (error) {
            console.error(error);
            res.status(500).end();
        }
    }
}
