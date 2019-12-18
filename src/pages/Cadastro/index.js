import React, { useState } from "react";
import { Container } from "./style.js";
import api from "../../services/api";
import { Link } from "react-router-dom";
import user from '../../assets/user.svg';
export default function Cadastro({ history }) {
   const [nome, setNome] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   async function handleSubmit(event) {
      event.preventDefault();
      try {
         await api.post("/usuario", {
            nome,
            email,
            password
         });

         history.push("/Inicio");
         alert("Usuário Cadastrado");

      } catch (err) {
         alert("Erro ao cadastrar");
      }
   }

   return (
      <Container>
         <div className="cont">
            <section>
               <img src={user} alt="icon" />
               <h1>Cadastrar Usuário</h1>
               <form onSubmit={handleSubmit}>
                  <input
                     className="txt"
                     type="text"
                     placeholder="Nome"
                     id="nome"
                     onChange={event => setNome(event.target.value)}
                     required
                  />
                  <input
                     className="txt"
                     type="email"
                     placeholder="Email"
                     id="email"
                     onChange={event => setEmail(event.target.value)}
                     required
                  />
                  <input
                     className="txt"
                     type="password"
                     placeholder="Senha"
                     id="password"
                     onChange={event => setPassword(event.target.value)}
                     required
                  />
                  <div>
                     <button className="button" type="submit">Salvar</button><br />
                     <hr />
                     <Link className="link" to="../Inicio">
                        Voltar{" "}
                     </Link>
                  </div>
               </form>
            </section>
         </div>
      </Container>
   );
}