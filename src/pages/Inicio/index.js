import React from "react";

import { Container } from "./style.js";
import { Link } from "react-router-dom";
import send from '../../assets/send.svg';
import rel from '../../assets/rel.svg';
export default function Inicio({ history }) {

   async function handleSubmit(event) {

      event.preventDefault();
      localStorage.removeItem("@CESTA/token");
      history.push("/");
   }

   return (
      <Container>
         <div className="container">
            <div className="cab">
               <h1> Nova Empregos </h1>
               <form onSubmit={handleSubmit}>
                  <button className="btn" type="submit">Encerrar Seção</button>
               </form>
            </div>
            <div className="categorias">

               <Link className="op" to="../cadastro">
                  <div className="a">
                     <img src={send} alt="icon" />
                     <h2>Cadastrar Usuario</h2>
                  </div>
               </Link>

               <Link className="op" to="../candidato">
                  <div className="a">
                     <img src={send} alt="icon" />
                     <h2>Cadastrar Entrevista</h2>
                  </div>
               </Link>

               <Link className="op" to="../relatorio">
                  <div className="a">
                     <img src={rel} alt="icon" />
                     <h2>Ver entrevistas marcadas</h2>
                  </div>
               </Link>
            </div>
         </div>
      </Container>
   );
}