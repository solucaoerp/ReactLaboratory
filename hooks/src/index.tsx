import 'bootstrap/dist/css/bootstrap.min.css';

/* Modo Desenvolvimento */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/* Modo Deploy */

// import { createRoot } from 'react-dom/client';
// import App from './App';

// const rootElement = document.getElementById('root') as HTMLElement;
// const root = createRoot(rootElement);

// root.render(
//   <App />
// );