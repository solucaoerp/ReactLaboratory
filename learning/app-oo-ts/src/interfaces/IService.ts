export interface IService<T> {
    buscarTodos(): Promise<T[]>;
    buscarPorId(id: number): T | undefined;
    salvar(entidade: T): T;
    excluir(id: number): void;
  }
  