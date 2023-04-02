import Clientes from "./components/Cliente/List";
import ClientesAxios from "./components/Cliente/ListAxios";
import { ExportConsumerAPis, ExportContadorUseEffect } from "./hooks/useEffect";
import { ExportContador, ExportPessoa, ExportTodo } from "./hooks/useState";

export default function App() {
  return <>
    <Clientes />
    <ClientesAxios />

    {/* <ExportConsumerAPis />
    <ExportContadorUseEffect /> */}

    {/* <ExportContador />
    <ExportPessoa />
    <ExportTodo /> */}
  </>
};