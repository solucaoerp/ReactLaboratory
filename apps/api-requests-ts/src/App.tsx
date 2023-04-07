import "./App.css"

import ClienteFrm from "./components/Cliente/ClienteFrm";
import ClienteTbl from "./components/Cliente/ClienteTbl";

function App() {
  return (
    <div className="container-global">
      <ClienteFrm />
      <ClienteTbl />
    </div>
  );
}

export default App;
