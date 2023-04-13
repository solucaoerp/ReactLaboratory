import { Request, Response } from 'express';

export interface IController<T> {
    buscarTodos(req: Request, res: Response): Promise<void>;
    buscarPorId(req: Request, res: Response): Promise<void>;
    salvar(req: Request, res: Response): Promise<void>;
    excluir(req: Request, res: Response): Promise<void>;
}
