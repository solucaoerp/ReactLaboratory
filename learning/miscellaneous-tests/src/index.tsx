import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App001 from "./apps/App001";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App001 />
  </React.StrictMode>
);

reportWebVitals();
