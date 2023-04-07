import React from "react";
import { BrowserRouter as Routes, Route, Switch, Link } from 'react-router-dom';

import { Home } from "./pages/Home";
import { Usuario } from "./pages/Usuario";

export default function App() {
  return (
    <div>
      <Routes>
        <Link to="/">Home</Link>
        <Link to="/user">Usuários</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={Usuario} />
        </Switch>
      </Routes>
    </div>
  );
};