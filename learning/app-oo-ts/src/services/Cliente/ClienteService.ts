import { GenericApi } from "../../controllers/GenericApi";
import { IService } from "../../interfaces/IService";
import { Cliente } from "../../models/ClienteModel";

export class ClienteService implements IService<Cliente> {
    private api: GenericApi;
    constructor(api: GenericApi) {
      this.api = api;
    }
  
    private clientes: Cliente[] = [];
  
    async buscarTodos(): Promise<Cliente[]> {
        const clientes = await this.api.buscarTodos<Cliente>('/clientes');
        return clientes;
      }
      
      
  
    buscarPorId(id: number): Cliente | undefined {
      const cliente = this.clientes.find((c) => c.id === id);
      return cliente;
    }

    // salvar(cliente: Cliente): Cliente {
    //     if (cliente.id) {
    //       const index = this.clientes.findIndex((c) => c.id === cliente.id);
      
    //       if (index < 0) {
    //         throw new Error("Cliente não encontrado");
    //       }
      
    //       this.clientes[index] = cliente;
    //     } else {
    //       cliente.id = this.clientes.length + 1;
    //       this.clientes.push(cliente);
    //     }
      
    //     return cliente; // retorna o cliente atualizado ou adicionado
    //   }
    salvar(cliente: Cliente): Cliente {
        const clienteExistente = this.clientes.find(c => c.nome === cliente.nome);
      
        if (clienteExistente) {
          throw new Error("Já existe um cliente com esse nome");
        }
      
        if (cliente.id) {
          const index = this.clientes.findIndex((c) => c.id === cliente.id);
      
          if (index < 0) {
            throw new Error("Cliente não encontrado");
          }
      
          this.clientes[index] = cliente;
        } else {
          cliente.id = this.clientes.length + 1;
          this.clientes.push(cliente);
        }
      
        return cliente;
      }
      
      
  
    // salvar(cliente: Cliente): Cliente {
    //   if (cliente.id) {
    //     const index = this.clientes.findIndex((c) => c.id === cliente.id);
  
    //     if (index < 0) {
    //       throw new Error("Cliente não encontrado");
    //     }
  
    //     this.clientes[index] = cliente;
    //   } else {
    //     cliente.id = this.clientes.length + 1;
    //     this.clientes.push(cliente);
    //   }
  
    //   return cliente;
    // }
  
    excluir(id: number): void {
      const index = this.clientes.findIndex((c) => c.id === id);
  
      if (index < 0) {
        throw new Error("Cliente não encontrado");
      }
  
      this.clientes.splice(index, 1);
    }
  }
  