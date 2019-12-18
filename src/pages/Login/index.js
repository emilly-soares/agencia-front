import React, { useState } from "react";

import api from "../../services/api";

import { Container } from "./style.js";
import user from '../../assets/user.svg';

import { login } from "../../services/auth.js";

export default function Login({ history }) {
   const [email, setEmail] = useState("");

   const [password, setPassword] = useState("");
   async function handleSubmit(event) {
      event.preventDefault();

      try {
         const user = {
            email,
            password
         };

         const response = await api.post("/session", user);
         const { token, user: userData } = response.data;
         if (token) {
            login(token, userData);
         }

         history.push("/inicio");
      } catch (erro) {
         alert("Erro");
      }
   }
   return (

      <Container>
         <div id="espaço"></div>
         <section>
            <img src={user} alt="icon" />
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
               <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  onChange={event => setEmail(event.target.value)}
                  required
                  className="txt"
               />
               <input
                  type="password"
                  placeholder="Senha"
                  id="password"
                  onChange={event => setPassword(event.target.value)}
                  required
                  className="txt"
               />
               <div>
                  <button className="button" type="submit">Entrar</button>
               </div>
            </form>
         </section>
      </Container>

   );
}