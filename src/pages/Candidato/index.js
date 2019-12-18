import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Container } from "./style.js";
import clock
   from '../../assets/clock.svg';
export default function Candidato({ history }) {


   const [nome, setNome] = useState([]);
   const [email, setEmail] = useState([]);
   const [escolaridade, setEscolaridade] = useState([]);
   const [idade, setIdade] = useState([]);
   const [emprego, setEmprego] = useState([]);


   async function handleSubmit(event) {
      event.preventDefault();
      console.log(nome,
         email,
         escolaridade,
         idade,
         emprego);
      try {
         const result = await api.post("/candidato", {
            nome,
            email,
            escolaridade,
            idade,
            emprego
         });
         console.log('resultado', result)
         history.push("/inicio");
         // alert("Cadastrado");
      }
      catch (erro) {
         console.log("Erro");
      }
   }

   return (

      <Container>


         <div className="cont">
            <section>
               <img src={clock} alt="icon" />
               <h1>Cadastrar Entrevista</h1>

               <form onSubmit={handleSubmit}>

                  <input
                     className="txt"
                     type="text"
                     placeholder="Nome"
                     id="name"
                     value={nome}
                     onChange={event => setNome(event.target.value)}
                     required
                  />
                  <input
                     className="txt"
                     type="email"
                     placeholder="Email"
                     id="email"
                     value={email}
                     onChange={event => setEmail(event.target.value)}
                     required
                  />
                  <select
                     className="txt"
                     id="Escolaridade"
                     onChange={event => setEscolaridade(event.target.value)}
                  >
                     <option value="selecione">Selecione</option>
                     <option value="infantil">Infantil</option>
                     <option value="fundamental">Fundamental</option>
                     <option value="médio">Médio</option>
                     <option value="superior">Superior</option>

                  </select>
                  <input
                     className="txt"
                     type="number"
                     placeholder="Idade"
                     id="idade"
                     value={idade}
                     onChange={event => setIdade(event.target.value)}
                     required
                  />
                  <select
                     className="txt"
                     id="Emprego"
                     onChange={event => setEmprego(event.target.value)}
                  >
                     <option value="selecione">Selecione</option>
                     <option value="jardineiro">Jardineiro</option>
                     <option value="mecanico">Mecanico</option>
                     <option value="professor">Professor</option>
                     <option value="manicure">Manicure</option>
                     <option value="camareira">Camareira</option>
                     <option value="pedreiro">Pedreiro</option>
                     <option value="padeiro">Padeiro</option>
                  </select>
                  <button className="button" type="submit">Salvar</button><br />
                  <hr />
                  <Link className="link" to="../Inicio">
                     Voltar{" "}
                  </Link>
               </form>
            </section>
         </div>
      </Container>

   );
}