import React from 'react';
import Relatorio from '../pages/Relatorio';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Inicio from "../pages/Inicio"
import Candidato from "../pages/Candidato"

import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

export default function Routes() {
   return (

      <BrowserRouter>

         <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/candidato" component={Candidato} isPrivate />
            <Route path="/inicio" component={Inicio} isPrivate />
            <Route path="/cadastro" component={Cadastro} isPrivate />
            <Route path="/relatorio" component={Relatorio} isPrivate />
         </Switch>

      </BrowserRouter>

   );
}