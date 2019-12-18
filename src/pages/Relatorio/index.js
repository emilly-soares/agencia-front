import React, { useState, useEffect } from "react";
import { Container } from "./style.js";
import api from "../../services/api";

import { Link } from "react-router-dom";
import Relatorio from "../../components/relatorio";

export default function Relatorios({ history }) {

   const [relatorios, setRelatorios] = useState([]);
   useEffect(() => {
      async function loadRelatorios() {
         const response = await api.get("/candidato");
         setRelatorios(response.data);
      }
      loadRelatorios();
   }, [relatorios]);

   return (
      <Container>
         <div className="Cont">
            <div className="cab">
               <h1>Entrevistas Marcadas</h1>
               <nav className="op">
                  <Link className="lin" to="../Inicio">
                     Voltar
          </Link>
               </nav>
            </div>

         </div>
         <div className="dados">
            <section>
               <table>
                  <tr>
                     <th>Nome:</th>
                     <th>Emprego:</th>
                  </tr>
                  {relatorios &&
                     relatorios.map(relatorio => (
                        <Relatorio
                           nome={relatorio.nome}
                           emprego={relatorio.emprego}
                        />
                     ))}
               </table>
            </section>
         </div>
      </Container>
   );
}