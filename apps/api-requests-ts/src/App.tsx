import { Route, Routes } from 'react-router-dom';

import "./styles/App.css";
import ClienteList from './components/Cliente/ClienteList';
import ResponseTest from './hooks/ResponseTest';
import ClienteSave from './components/Cliente/ClienteSave';
import ClienteCrud from './views/pages/ClienteCrud/ClienteCrud';

function App() {
  return (
    <div className="container-global">
      <Routes>
        <Route path="/" element={<ClienteList />} />

        <Route path="/clientes-new" element={<ClienteSave endpoint="http://localhost:8080/clientes" />} />
        <Route path="/endpoint-test" element={<ResponseTest endpoint="http://localhost:8080/clientes" />} />
        <Route path="/clientes-crud" element={<ClienteCrud />} />
      </Routes>
    </div>
  );
}

export default App;

